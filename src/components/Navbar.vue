<template>
  <div class="vp-raw">
    <nav class="border-gray-200 p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" class="flex items-center">
          <!-- Show avatar and nickname after login -->
          <template v-if="isAuthenticated">
            <img
              :src="userAvatar ? `/avatars/${userAvatar}` : ''"
              alt="User Avatar"
              class="h-8 w-8 rounded-full mr-2"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap" :style="{ color: 'black' }">
              {{ userNickname }}
            </span>
          </template>

          <!-- Show default Home text if not logged in -->
          <template v-else>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :style="{ fill: isAuthenticated ? 'blue' : 'red' }"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span class="self-center text-xl font-semibold whitespace-nowrap" :style="{ color: 'black' }">
              Home
            </span>
          </template>
        </router-link>

        <button
          @click="toggleMenu"
          aria-controls="navbar-default"
          aria-expanded="menuOpen"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div :class="['w-full md:block md:w-auto', menuOpen ? '' : 'hidden']" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-gray-50"
          >
            <!-- Wishlist -->
            <li>
              <router-link
                to="/wishlist"
                @click.native="closeMenu"
                class="relative block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :style="{ fill: isAuthenticated ? 'blue' : 'red' }"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
                <span
                  v-if="wishlistCount"
                  class="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5"
                >
                  {{ wishlistCount }}
                </span>
                Wishlist
              </router-link>
            </li>
            <!-- Comparison -->
            <li>
              <router-link
                to="/comparison"
                @click.native="closeMenu"
                class="relative block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :style="{ fill: isAuthenticated ? 'blue' : 'red' }"
                >
                  <path
                    d="M10 3H14V21H10V3ZM4 7H8V21H4V7ZM16 13H20V21H16V13Z"
                  />
                </svg>
                <span
                  v-if="comparisonCount"
                  class="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5"
                >
                  {{ comparisonCount }}
                </span>
                Comparison
              </router-link>
            </li>
            <!-- Cart -->
            <li>
              <router-link
                to="/cart"
                @click.native="closeMenu"
                class="relative block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :style="{ fill: isAuthenticated ? 'blue' : 'red' }"
                >
                  <path
                    d="M7 18c-1.1 0-1.99 0.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99 0.9-1.99 2s0.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 16h14V6H7V16zM5 4h2v2H4.22l-1.6 8H18v2H3.4L5 4z"
                  />
                </svg>
                <span
                  v-if="cartCount"
                  class="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5"
                >
                  {{ cartCount }}
                </span>
                Cart
              </router-link>
            </li>
            <!-- Other Links -->
            <li>
              <router-link
                to="/login"
                v-if="!isAuthenticated"
                class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :style="{ fill: isAuthenticated ? 'blue' : 'red' }"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
                Login
              </router-link>
              <button
                v-else
                @click="logout"
                class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :style="{ fill: isAuthenticated ? 'blue' : 'red' }"
                >
                  <path
                    d="M16 13v-2H8V7l-5 5 5 5v-4h8zm2-11H6v2h12v14H6v2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                  />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

/**
 * Navbar component that provides navigation links and user information.
 * @component
 */
export default {
  name: 'Navbar',
  setup() {
    const menuOpen = ref(false);
    const store = useStore();
    const router = useRouter();

    /**
     * Toggles the state of the mobile menu.
     */
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    /**
     * Closes the mobile menu.
     */
    const closeMenu = () => {
      menuOpen.value = false;
    };

    /**
     * Whether the user is authenticated.
     * @type {ComputedRef<boolean>}
     */
    const isAuthenticated = computed(() => store.getters.isAuthenticated);

    /**
     * The URL or path of the user's avatar.
     * @type {ComputedRef<string>}
     */
    const userAvatar = computed(() => store.state.currentUser?.avatar || '');

    /**
     * The nickname of the currently authenticated user.
     * @type {ComputedRef<string>}
     */
    const userNickname = computed(() => store.state.currentUser?.nickname || 'User');

    /**
     * The count of items in the user's wishlist.
     * @type {ComputedRef<number>}
     */
    const wishlistCount = computed(() => store.state.wishlistCount);

    /**
     * The count of items in the user's comparison list.
     * @type {ComputedRef<number>}
     */
    const comparisonCount = computed(() => store.state.comparisonCount);

    /**
     * The count of items in the user's cart.
     * @type {ComputedRef<number>}
     */
    const cartCount = computed(() => store.state.cartCount);

    /**
     * Logs the user out and redirects to the login page.
     */
    const logout = () => {
      store.commit('logout');
      router.push('/login');
    };

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
      isAuthenticated,
      userAvatar,
      userNickname,
      wishlistCount,
      comparisonCount,
      cartCount,
      logout,
    };
  },
};
</script>
