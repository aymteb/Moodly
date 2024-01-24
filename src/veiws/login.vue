<template>
  <div class="bg-white w-screen h-screen">
    <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
      <h1 class="text-black mt-36">Bienvenue!</h1>
      <label class="form-label text-black">Email</label>
      <div class="form-control">
        <input v-model="email" placeholder="Email" type="text" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
      </div>
      <label class="form-label text-black">Mot de passe</label>
      <div class="form-control">
        <input v-model="password" placeholder="Mot de passe" type="password" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
      </div>
      <div class="flex justify-between">
        <RouterLink class="link link-underline-hover link-primary text-sm" to="/forgot-password">Mot de passe oublié ?</RouterLink>
      </div>
      <button class="btn btn-black btn-block" @click="checkDroit">Connexion</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  name: 'LoginComponent',
  components: {
    RouterLink,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async checkDroit() {
      try {
        const response = await axios.get('http://localhost:1337/api/users');
        this.handleResponse(response.data);
      } catch (error) {
        console.error('Erreur de connexion:', error.response.data);
      }
    },
    handleResponse(users) {
      const user = users.find(user => user.email === this.email);
      if (user) {
        this.redirectUser(user);
      } else {
        console.error("Aucun utilisateur correspondant trouvé");
      }
    },
    redirectUser(user) {
      localStorage.setItem('userId', user.id);
      if (user.username === 'admin') {
        this.$router.push('/manage');
      } else {
        this.$router.push('/collab');
      }
    },
  },
}
</script>
