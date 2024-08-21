import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import Navbar from '../components/Navbar.vue';
import ViewedCard from '../components/ViewedCard.vue';
import Cart from '../Pages/Cart.vue';
import Wishlist from '../Pages/Wishlist.vue';
import Login from '../Pages/Login.vue';
import store from '../store/store';
import Comparison from '../Pages/Comparison.vue';
import PaymentConfirmation from '../components/PaymentConfirmation.vue';
import Checkout from '../Pages/Checkout.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/comparison', name: 'Comparison', component: Comparison, meta: { requiresAuth: true } },
  { path: '/navbar', name: 'Navbar', component: Navbar },
  { path: '/product/:id', name: 'ViewedCard', component: ViewedCard, props: true },
  { path: '/cart', name: 'Cart', component: Cart, meta: { requiresAuth: true } },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/login', name: 'Login', component: Login },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist, meta: { requiresAuth: true } },
  { path: '/payment-confirmation', name: 'PaymentConfirmation', component: PaymentConfirmation }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Store the intended route
    store.commit('setRedirectAfterLogin', to.fullPath);
    next('/login');
  } else {
    next();
  }
});

export default router;
