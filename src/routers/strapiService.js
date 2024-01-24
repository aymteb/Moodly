import axios from 'axios';

const API_URL = 'http://localhost:1337'; // Remplacez par l'URL de votre instance Strapi

export default {
  getMoods() {
    return axios.get(`${API_URL}/moods`) // Remplacez '/moods' par le chemin approprié de votre API Strapi
      .then(response => response.data)
      .catch(error => console.error("Erreur lors de la récupération des humeurs :", error));
  },
};