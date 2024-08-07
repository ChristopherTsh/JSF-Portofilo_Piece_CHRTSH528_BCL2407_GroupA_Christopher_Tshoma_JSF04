<template>
    <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <h1 class="text-2xl font-bold mb-4 mt-4 flex flex-col items-center">
          Wishlist
        </h1>
        <div class="flex justify-center">
          <div v-if="wishlist.length === 0" class="text-gray-500">
            Your wishlist is empty.
          </div>
          <div v-else>
            <div
              v-for="product in wishlist"
              :key="product.id"
              class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-4 p-4 border rounded shadow-sm w-full"
            >
              <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <a :href="product.link" class="shrink-0 md:order-1">
                <img
                  :src="product.image"
                  class="h-20 w-20"
                  :alt="product.title"
                />
              </a>
              </div>
  
              <div class="mt-6 sm:mt-8 lg:mt-0">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                  {{ product.title }}
                </h1>
                <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p
                    class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                  >
                    ${{ product.price }}
                  </p>
                  <div class="svgProduct rating w-52 flex items-left -ml-2 mb-2">
                    <svg
                      v-for="i in 5"
                      :key="i"
                      :class="i <= Math.round(product.rating?.rate || 0) ? 'filled' : 'empty'"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"
                      />
                    </svg>
                    <span>({{ product.rating?.count || 0 }}reviews)</span>
                  </div>
                </div>
  
                <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <button
                    @click="removeFromWishlist(product.id)"
                    class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      class="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Remove from Wishlist
                  </button>
  
                  <button
                    @click="addToCart(product)"
                    class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      class="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
  
                <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
  
                <p class="mb-6 text-gray-500 dark:text-gray-400">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  export default {
    setup() {
      const store = useStore();
  
      const wishlist = computed(() => store.state.wishlist);
  
      const removeFromWishlist = (productId) => {
        store.commit('removeFromWishlist', productId);
      };
  
      const addToCart = (product) => {
        store.commit('addToCart', product);
      };
  
      return {
        wishlist,
        removeFromWishlist,
        addToCart,
      };
    }
  };
  </script>
  
  <style scoped>
  .svgProduct svg.filled path {
    fill: #ffc107;
  }
  .svgProduct svg.empty path {
    fill: #e0e0e0;
  }
  </style>
  