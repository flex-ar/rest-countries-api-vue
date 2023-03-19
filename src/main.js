import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import state from './store';

import './style.css';

const HomePage = () => import('./pages/HomePage.vue');
const DetailPage = () => import('./pages/DetailPage.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/:country', name: 'detail', component: DetailPage },
  ],
});

createApp(App).use(router).provide('state', state).mount('#app');
