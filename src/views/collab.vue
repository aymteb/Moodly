<template>
  <div class="bg-[#FFEFE5] h-[100vh]">
    <img src="./../assets/Logo.png" class="pl-20 pt-10 pr-20 pb-8">
    <p v-if="isSubmitted" :style="{ backgroundColor: getCardColor(moodNumber), color: 'black' }" class="ml-4 mr-4 p-2 pb-0 rounded-lg text-center flex items-center justify-center">{{ countdown }}</p>
    <div class="pt-8">
      <div v-if="!isSubmitted" v-touch:swipe.left="decrementMood" v-touch:swipe.right="incrementMood">
        <my_card :moodNumber="moodNumber"/>
      </div>
      <my_card_val v-if="isSubmitted" :moodNumber="moodNumber"/>
    </div>
    <div class="bg-[#FFEFE5] flex items-center justify-center gap-8 p-6 ">
      <button v-if="!isSubmitted" @click="decrementMood">
        <img class="rotate-180" src="./../assets/fleche.png">
      </button>
      <div v-if="!isSubmitted" class="flex items-center gap-5">
        <div class="w-10 h-10 rounded-full" :style="{ backgroundColor: getCardColor(moodNumber - 1) }" @click="decrementMood"></div>
        <div class="w-20 h-20 rounded-full" :style="{ backgroundColor: getCardColor(moodNumber) }"></div>
        <div class="w-10 h-10 rounded-full" :style="{ backgroundColor: getCardColor(moodNumber + 1) }" @click="incrementMood"></div>
      </div>
      <button v-if="!isSubmitted" @click="incrementMood">
        <img src="./../assets/fleche.png">
      </button>
    </div>
    <div class="flex flex-col items-center">
      <button :class="{ 'bg-gray-400': isSubmitted }" class="bg-[#29262A] rounded-[24px] p-4 w-[80%]" @click="submitMood" :disabled="isSubmitted">
        <h1 class="text-white">Valider</h1>
      </button>
      <p v-if="isSubmitted" class="mt-4 text-black">{{ moodMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import my_card from '../components/my_card.vue';
import my_card_val from '../components/my_card_val.vue';

export default {
  name: 'my_collab',
  components: {
    my_card,
    my_card_val,
  },
  data() {
    return {
      moodNumber: 4,
      moods: ['En colère', 'Contrarié', 'Triste', 'Bien', 'Heureux', 'Royal'],
      isSubmitted: false,
      moodMessage: '',
      countdown: '',
    };
  },
  methods: {
    incrementMood() {
      if (!this.isSubmitted) {
        this.moodNumber = this.moodNumber < 6 ? this.moodNumber + 1 : 1;
      }
    },
    decrementMood() {
      if (!this.isSubmitted) {
        this.moodNumber = this.moodNumber > 1 ? this.moodNumber - 1 : 6;
      }
    },
    getCardColor(number) {
      const colors = ['#FF843E', '#8CA4EE', '#A1E7EB', '#FDDD6F', '#DFEBFF', '#FFA7BC'];
      return colors[((number + 5) % 6)];
    },
    async submitMood() {
  try {
    const userId = localStorage.getItem('userId');
    const today = new Date().toISOString().split('T')[0];

    await axios.post('http://localhost:1337/api/tableau-humeurs', {
      data: {
        Moodnumber: this.moodNumber,
        Humeur: this.moods[this.moodNumber - 1],
        uid: parseInt(userId, 10),
        date: today
      },
    });

    this.isSubmitted = true;
    this.moodMessage = `Votre humeur du jour est : ${this.moods[this.moodNumber - 1]}`;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'humeur:', error.response ? error.response.data : error);
  }
},
    async checkDailyMood() {
    try {
      const userId = localStorage.getItem('userId');
      const today = new Date().toISOString().split('T')[0];
      const response = await axios.get('http://localhost:1337/api/tableau-humeurs');
      const data = response.data.data;

      if (Array.isArray(data)) {
        const moodEntry = data.find(entry =>
          entry.attributes.uid === parseInt(userId, 10) && entry.attributes.date === today
        );
        console.log(moodEntry);
        if (moodEntry) {
          this.moodNumber = moodEntry.attributes.Moodnumber;
          this.moodMessage = `Votre humeur du jour est : ${this.moods[this.moodNumber - 1]}`;
          this.isSubmitted = true;
        }
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    }
  },
    updateCountdown() {
      const now = new Date();
      const hours = 23 - now.getHours();
      const minutes = 59 - now.getMinutes();
      const seconds = 59 - now.getSeconds();
      this.countdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
  },
  mounted() {
    this.checkDailyMood();
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
</script>
