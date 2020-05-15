import { createRouter, createWebHistory } from 'vue-router'
import About from "../views/About";
import Home from "../views/Home";

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
      }
    ]
  });

export default router;