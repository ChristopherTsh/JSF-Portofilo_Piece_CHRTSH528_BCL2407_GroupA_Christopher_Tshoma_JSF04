import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Navbar from '../components/Navbar.vue';
import ViewedCard from '../components/ViewedCard.vue';
import Cart from '../components/Cart.vue';
import Wishlist from '../components/Wishlist.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
