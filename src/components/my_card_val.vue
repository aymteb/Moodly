<template>
    <div class="flex flex-col mr-4 ml-4 rounded-lg pb-8" :style="{ backgroundColor: cardColor }">
      <img class="w-[250px] self-center my-4" :src="moodImagePath">
      <div class="flex">
        <div class="flex flex-col w-1/2 p-2">
          <div v-for="tag in personalTags" :key="tag"
               class="bg-gray-200 p-2 m-1 rounded-lg cursor-pointer hover:bg-gray-300 text-black flex justify-center"
               @click="toggleTag(tag)">
            {{ tag }}
          </div>
        </div>
        <div class="flex flex-col w-1/2 p-2">
          <div v-for="tag in workTags" :key="tag"
               class="bg-gray-200 p-2 m-1 rounded-lg cursor-pointer hover:bg-gray-300 text-black flex justify-center"
               @click="toggleTag(tag)">
            {{ tag }}
          </div>
        </div>
      </div>
      <button v-if="!isSubmitted" @click="submitTags" class="bg-[#29262A] text-white mt-4 mx-auto rounded-lg hover:bg-[#3a3a3a] p-8">Valider</button>
      <button v-if="isSubmitted" class="bg-[#606060] text-white mt-4 mx-auto rounded-lg hover:bg-[#545353] p-8">Valider</button>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    name: 'my_card',
    props: {
      moodNumber: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        personalTags: ['Famille', 'Finances', 'Sommeil', 'Travail'],
        workTags: ['Santé', 'Couple', 'Météo', 'Addiction'],
        selectedTags: [],
        currentCategory: null,
        isSubmitted: false,
      };
    },
    computed: {
      moodName() {
        const moods = ['En colère', 'Contrarier', 'Triste', 'Bien', 'Heureux', 'Royal'];
        return moods[this.moodNumber - 1];
      },
      moodImagePath() {
        const moodImages = {
          '1': require('@/assets/enerver.png'),
          '2': require('@/assets/contrarier.png'),
          '3': require('@/assets/triste.png'),
          '4': require('@/assets/bien.png'),
          '5': require('@/assets/heureux.png'),
          '6': require('@/assets/royal.png'),
        };
        return moodImages[this.moodNumber];
      },
      cardColor() {
        const colors = ['#FF843E', '#8CA4EE', '#A1E7EB', '#FDDD6F', '#DFEBFF', '#FFA7BC'];
        return colors[this.moodNumber - 1];
      }
    },
    methods: {
      toggleTag(tag) {
        const index = this.selectedTags.indexOf(tag);
        const isPersonalTag = this.personalTags.includes(tag);
        if (this.currentCategory === null || this.currentCategory === (isPersonalTag ? 'personal' : 'work')) {
          if (index >= 0) {
            this.selectedTags.splice(index, 1);
            if (this.selectedTags.length === 0) {
              this.currentCategory = null;
            }
          } else {
            this.selectedTags.push(tag);
            this.currentCategory = isPersonalTag ? 'personal' : 'work';
          }
        } else {
          console.log('Vous ne pouvez sélectionner des tags que dans une seule catégorie à la fois.');
        }
      },
      async submitTags() {
  try {
    const tagString = this.selectedTags.join(', ');
    await axios.post('http://localhost:1337/api/tableau-tags', {
      data: {
        moodNumber: this.moodNumber,
        Tag: tagString,
      }
    });
    console.log('Tags envoyés avec succès');
    this.isSubmitted = true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi des tags:', error.response ? error.response.data : error);
  }
}
    }
  }
  </script>

  <style scoped>
  h1 {
    font-family: 'Rubik', sans-serif;
  }

  h2 {
    font-family: 'Rubik', sans-serif;
    color: moodTextColor;
  }
  </style>