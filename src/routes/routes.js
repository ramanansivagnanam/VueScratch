import { createRouter, createWebHistory } from 'vue-router'
import About from "../views/About";
import Home from "../views/Home";
import Videowatch from "../views/Video";

const routerHistory = createWebHistory();



const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: About
    },
    {
      path: '/video:id',
      component: Videowatch,
      params:true
    }
  ]
});

export default router;