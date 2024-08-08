import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Navbar from '../components/Navbar.vue';
import ViewedCard from '../components/ViewedCard.vue';
import Cart from '../components/Cart.vue';
import Wishlist from '../components/Wishlist.vue';
import Login from '../components/Login.vue';
import store from '../store/store';
import Comparison from '../components/Comparison.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/comparison',
    name: 'Comparison',
    component: Comparison,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar,
  },
  {
    path: '/product/:id',
    name: 'ViewedCard',
    component: ViewedCard,
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
