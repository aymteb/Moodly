<template>
    <div class="bg-white w-screen h-screen">
        <div class="pt-8">
            <my_card :moodNumber="moodNumber"/>
        </div>
        <div class="bg-[#FFEFE5] flex items-center justify-center gap-8 p-8 mt-10">
            <button @click="decrementMood">
                <img class="rotate-180" src="./../assets/fleche.png">
            </button>
            <div class="flex items-center gap-5">
                <div class="w-10 h-10 rounded-full" :style="{ backgroundColor: getCardColor(moodNumber - 1) }"></div>
                <div class="w-20 h-20 rounded-full" :style="{ backgroundColor: getCardColor(moodNumber) }"></div>
                <div class="w-10 h-10 rounded-full" :style="{ backgroundColor: getCardColor(moodNumber + 1) }"></div>
            </div>
            <button @click="incrementMood">
                <img src="./../assets/fleche.png">
            </button>
        </div>
        <div class="flex flex-col items-center mt-14">
            <p v-if="isSubmitted" class="-mt-4">{{ moodMessage }}</p>
            <button :class="{ 'bg-gray-400': isSubmitted }" class="bg-[#29262A] rounded-[24px] p-4 w-[80%]" @click="submitMood" :disabled="isSubmitted">
                <h1 class="text-white">Valider</h1>
            </button>
        </div>
    </div>
</template>

<script>
import my_card from '../components/my_card.vue'

export default {
    name: 'MoodVeiws',
    components: {
        my_card,
    },
    data() {
        return {
            moodNumber: 4,
            moods: ['En colère', 'Contrarié', 'Triste', 'Bien', 'Heureux', 'Royal'],
            isSubmitted: false,
            moodMessage: '',
        }
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
            return colors[((number + 5) % 6)]; // Ajuster pour le cycle 1-6
        },
        submitMood() {
            this.isSubmitted = true;
            this.moodMessage = `Votre humeur du jour est : ${this.moods[this.moodNumber - 1]}`;
        }
    }
}
</script>