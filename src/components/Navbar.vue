<template>
  <div class="vp-raw">
    <nav class="border-gray-200 p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            :fill="isAuthenticated ? 'blue' : 'red'"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
          </svg>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Home
          </span>
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
        <div
          :class="['w-full md:block md:w-auto', menuOpen ? '' : 'hidden']"
          id="navbar-default"
        >
          <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-gray-50">
            <li>
              <router-link
                to="/wishlist"
                class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
                Wishlist
              </router-link>
            </li>
            <li>
              <router-link
                to="/comparison"
                class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3H14V21H10V3ZM4 7H8V21H4V7ZM16 13H20V21H16V13Z"
                    fill="currentColor"
                  />
                </svg>
                Comparison
              </router-link>
            </li>
            <li>
              <router-link
                to="/cart"
                class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18c-1.1 0-1.99 0.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99 0.9-1.99 2s0.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 16h14V6H7V16zM5 4h2v2H4.22l-1.6 8H18v2H3.4L5 4z"
                    fill="currentColor"
                  />
                </svg>
                Cart
              </router-link>
            </li>
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
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    fill="currentColor"
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
                >
                  <path
                    d="M16 13v-2H8V7l-5 5 5 5v-4h8zm2-11H6v2h12v14H6v2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                    fill="currentColor"
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

export default {
  name: 'Navbar',
  setup() {
    const menuOpen = ref(false);
    const store = useStore();
    const router = useRouter();

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const isAuthenticated = computed(() => store.getters.isAuthenticated);

    const logout = () => {
      store.commit('logout');
      router.push('/login');
    };

    return {
      menuOpen,
      toggleMenu,
      isAuthenticated,
      logout,
    };
  },
};
</script>


