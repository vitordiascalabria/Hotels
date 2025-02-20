import type { RouteRecordRaw } from 'vue-router';
import HomePage from 'pages/HomePage.vue';
import HotelPage from 'pages/HotelPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: HomePage },
      { path: '/hotel/:id', component: HotelPage, props: true }
    ]
  },
];

export default routes;
