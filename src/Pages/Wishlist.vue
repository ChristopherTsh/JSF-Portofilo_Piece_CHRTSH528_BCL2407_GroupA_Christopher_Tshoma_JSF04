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
          <div class="flex justify-between mb-4">
            <!-- Dropdown Filter -->
            <div>
              <label for="filter" class="mr-2">Filter by:</label>
              <select v-model="selectedFilter" id="filter" class="py-2 px-4 border rounded-lg">
                <option value="">All</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="category">Category</option>
              </select>
            </div>

            <button
              @click="removeAllFromWishlist"
              class="py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Remove All Products
            </button>
          </div>

          <div
            v-for="product in filteredWishlist"
            :key="product.id"
            class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-4 p-4 border rounded shadow-sm w-full"
          >
            <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <a :href="product.link" class="shrink-0 md:order-1">
                <img
                  :src="product.image"
                  class="h-48 w-40"
                  :alt="product.title"
                />
              </a>
            </div>

            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1
                class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
              >
                {{ product.title }}
              </h1>
              <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p
                  class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                >
                  ${{ product.price }}
                </p>
                <div class="svgProduct rating w-52 flex items-left -ml-2 mb-2">
                  <!-- Display star rating based on product rating -->
                  <svg
                    v-for="i in 5"
                    :key="i"
                    :class="
                      i <= Math.round(product.rating.rate) ? 'filled' : 'empty'
                    "
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"
                    />
                  </svg>
                  <span v-if="product.rating && product.rating.count"
                    >({{ product.rating.count }}reviews)</span
                  >
                  <span v-else>(No reviews)</span>
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
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="48px"
                    height="48px"
                  >
                    <path
                      d="M3,6L5,6L21,6L21,8L19.9375,8L18.917,19.4052C18.8315,20.3556 18.0374,21.0637 17.0848,21.0637L6.9152,21.0637C5.9626,21.0637 5.1685,20.3556 5.083,19.4052L4.0625,8L3,8L3,6ZM8,10L8.0035,18L9.9965,18L9.993,10L8,10ZM12,10L12,18L14,18L14,10L12,10ZM9,2L15,2L15,4L21,4L21,6L3,6L3,4L9,4L9,2Z"
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
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const userId = store.state.currentUser.userId;

    const wishlist = computed(() => store.state.usersData[userId].wishlist);

    // Ref for the selected filter option
    const selectedFilter = ref("");

    // Computed property to filter the wishlist
    const filteredWishlist = computed(() => {
      if (selectedFilter.value === "price") {
        return wishlist.value.slice().sort((a, b) => a.price - b.price);
      } else if (selectedFilter.value === "rating") {
        return wishlist.value.slice().sort((a, b) => b.rating.rate - a.rating.rate);
      } else if (selectedFilter.value === "category") {
        return wishlist.value.slice().sort((a, b) =>
          a.category.localeCompare(b.category)
        );
      } else {
        return wishlist.value; // No filter, return the original wishlist
      }
    });

    /**
     * Removes a product from the wishlist based on the product ID.
     * @param {number} productId - The ID of the product to be removed.
     */
    const removeFromWishlist = (productId) => {
      store.commit("removeFromWishlist", productId);
    };

    /**
     * Removes all products from the wishlist.
     */
    const removeAllFromWishlist = () => {
      store.commit("resetWishlist");
    };

    /**
     * Adds a product to the cart.
     * @param {Object} product - The product object to be added to the cart.
     * @param {number} product.id - The ID of the product.
     * @param {string} product.title - The title of the product.
     * @param {string} product.image - The image URL of the product.
     * @param {number} product.price - The price of the product.
     */
    const addToCart = (product) => {
      store.commit("addToCart", product);
    };

    return {
      wishlist,
      selectedFilter,
      filteredWishlist,
      removeFromWishlist,
      removeAllFromWishlist,
      addToCart,
    };
  },
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
