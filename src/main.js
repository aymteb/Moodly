import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/routers.js';
import Vue3TouchEvents from 'vue3-touch-events';

const app = createApp(App);
app.use(router);
app.use(Vue3TouchEvents);
app.mount('#app');
