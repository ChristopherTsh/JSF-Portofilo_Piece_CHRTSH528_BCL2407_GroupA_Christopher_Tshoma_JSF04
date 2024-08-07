<template>
  <div class="vp-raw">
    <nav class="border-gray-200 p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="/" class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
              fill="currentColor"
            />
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
        <div :class="['w-full md:block md:w-auto', menuOpen ? '' : 'hidden']" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-gray-50">
            <li>
              <router-link to="/wishlist" class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
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
              <router-link to="/cart" class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.25 10h9.25l1.45-4H5.21L7.25 10zm13.65-4.34l-3.2 9.19c-.14.43-.52.73-.98.73H7.56c-.45 0-.84-.31-.98-.74L3.36 5.65H1V3h3.25c.45 0 .84.31.98.74l1.5 4.25H18c.38 0 .72.21.89.55.17.34.17.75 0 1.09L18 5.66h-3.76l1.5-4.25c.14-.43.53-.74.98-.74H20v2h-1.75z"
                    fill="currentColor"
                  />
                </svg>
                Cart
              </router-link>
            </li>
            <li>
              <router-link to="/login" class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <svg
                  width="24"
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';

/**
 * Navbar component.
 * 
 * This component provides a responsive navigation bar with links to the home, wishlist, cart, and login pages.
 */
export default {
  name: 'Navbar',
  setup() {
    /**
     * Ref for storing the menu open state.
     * @type {import('vue').Ref<boolean>}
     */
    const menuOpen = ref(false);

    /**
     * Toggles the menu open state.
     */
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    return {
      menuOpen,
      toggleMenu
    };
  }
};
</script>
