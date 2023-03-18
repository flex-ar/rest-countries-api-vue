import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import './style.css';

const Home = () => import('./components/Home.vue');
const Detail = () => import('./components/Detail.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/:country', name: 'detail', component: Detail },
  ]
});

createApp(App).use(router).mount('#app')
