import { createWebHistory, createRouter } from "vue-router";
import login from './../veiws/login.vue';
import home from './../veiws/welcome.vue';
import register from './../veiws/register.vue';
import forgotPassword from './../veiws/forgotpwd.vue';
import newpwd from './../veiws/newpwd.vue';
import my_collab from './../views/collab.vue';
import my_manage from './../views/manage.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: forgotPassword
    },
    {
      path: '/new-password',
      name: 'NewPassword',
      component: newpwd
    },
    {
      path: '/collab',
      name: 'MyCollab',
      component: my_collab
    },
    {
      path: '/manage',
      name: 'MyManage',
      component: my_manage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router;