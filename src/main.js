import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import './style.css';

const CountriesHome = () => import('./components/CountriesHome.vue');
const CountryDetail = () => import('./components/CountryDetail.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: CountriesHome },
    { path: '/:country', name: 'detail', component: CountryDetail },
  ],
});

createApp(App).use(router).mount('#app');
