import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import Navbar from '../components/Navbar.vue';
import ViewedCard from '../components/ViewedCard.vue';
import Cart from '../Pages/Cart.vue';
import Wishlist from '../Pages/Wishlist.vue';
import Login from '../Pages/Login.vue';
import store from '../store/store';
import Comparison from '../Pages/Comparison.vue';
import Checkout from '../Pages/Checkout.vue';

/**
 * The list of route definitions for the Vue Router.
 * @type {Array<import('vue-router').RouteRecordRaw>}
 */
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/comparison', name: 'Comparison', component: Comparison, meta: { requiresAuth: true } },
  { path: '/navbar', name: 'Navbar', component: Navbar },
  { path: '/product/:id', name: 'ViewedCard', component: ViewedCard, props: true },
  { path: '/cart', name: 'Cart', component: Cart, meta: { requiresAuth: true } },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/login', name: 'Login', component: Login },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist, meta: { requiresAuth: true } },
];

/**
 * Creates a new Vue Router instance with history mode and route definitions.
 * @type {import('vue-router').Router}
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * Global navigation guard for authentication.
 * Redirects to the login page if the route requires authentication and the user is not authenticated.
 * @param {import('vue-router').RouteLocationNormalized} to - The target RouteLocation.
 * @param {import('vue-router').RouteLocationNormalized} from - The current RouteLocation.
 * @param {Function} next - The function to call to resolve the hook.
 */
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
