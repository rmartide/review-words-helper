import Vue from 'vue';
import App from './App.vue';
import { routes } from '@services/navigation';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
