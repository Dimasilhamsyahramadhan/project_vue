import { createRouter, createWebHistory } from "vue-router";

import dashboard from '../pages/master/dashboard';
import login from '../pages/master/login.vue';
import register from '../pages/master/register.vue';

import home from '../pages/home.vue'
import profile from '../pages/profile'
import books from '../pages/books'
import download from '../pages/download'

const routes = [
    {
        name: 'dashboard',
        path: '/dashboard',
        component:dashboard

    },
      {
        name: 'home',
        path: '/home',
        component:home

    },
        {
        name: 'profile',
        path: '/profile',
        component:profile

    },
         {
        name: 'books',
        path: '/books',
        component:books

    },
            {
        name: 'download',
        path: '/download',
        component:download

    },
             {
      name: 'login',
      path: '/',
      component:login
    },
              {
        name: 'register',
        path: '/register',
        component:register
      },
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}