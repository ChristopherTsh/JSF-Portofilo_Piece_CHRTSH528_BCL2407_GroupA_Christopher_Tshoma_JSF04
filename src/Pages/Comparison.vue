<template>
  <div class="comparison-page container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Product Comparison</h1>

    <!-- Dropdown for filtering comparison -->
    <div class="flex justify-center mb-4">
      <select v-model="selectedCategory" class="border rounded-md p-2">
        <option value="all">All</option>
        <option value="title">Title</option>
        <option value="category">Category</option>
        <option value="price">Price</option>
        <option value="description">Description</option>
        <option value="rating">Ratings</option>
        <option value="reviews">Reviews</option>
      </select>
    </div>

    <div v-if="comparisonList.length" class="overflow-x-auto">
      <table class="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th class="p-4 border-b"></th>
            <th v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
              <img :src="product.image" alt="Product Image" class="mx-auto h-24">
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Display all categories if "all" is selected -->
          <template v-if="selectedCategory === 'all'">
            <tr>
              <th class="text-left p-4 border-b">Title</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                {{ product.title }}
              </td>
            </tr>
            <tr>
              <th class="text-left p-4 border-b">Category</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                {{ product.category }}
              </td>
            </tr>
            <tr>
              <th class="text-left p-4 border-b">Price</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                ${{ product.price }}
              </td>
            </tr>
            <tr>
              <th class="text-left p-4 border-b">Description</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                {{ product.description }}
              </td>
            </tr>
            <tr>
              <th class="text-left p-4 border-b">Ratings</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                <div class="flex items-center justify-center">
                  <svg v-for="i in 5" :key="i" :class="i <= Math.round(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-300'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"/>
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <th class="text-left p-4 border-b">Reviews</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                <span>({{ product.rating?.count || 0 }} reviews)</span>
              </td>
            </tr>
          </template>

          <!-- Conditional rendering based on selected category -->
          <template v-else>
            <tr v-if="selectedCategory === 'title'">
              <th class="text-left p-4 border-b">Title</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                {{ product.title }}
              </td>
            </tr>
            <tr v-if="selectedCategory === 'category'">
              <th class="text-left p-4 border-b">Category</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                {{ product.category }}
              </td>
            </tr>
            <tr v-if="selectedCategory === 'price'">
              <th class="text-left p-4 border-b">Price</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                ${{ product.price }}
              </td>
            </tr>
            <tr v-if="selectedCategory === 'description'">
              <th class="text-left p-4 border-b">Description</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                {{ product.description }}
              </td>
            </tr>
            <tr v-if="selectedCategory === 'rating'">
              <th class="text-left p-4 border-b">Ratings</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                <div class="flex items-center justify-center">
                  <svg v-for="i in 5" :key="i" :class="i <= Math.round(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-300'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"/>
                  </svg>
                </div>
              </td>
            </tr>
            <tr v-if="selectedCategory === 'reviews'">
              <th class="text-left p-4 border-b">Reviews</th>
              <td v-for="product in comparisonList" :key="product.id" class="p-4 border-b">
                <span>({{ product.rating?.count || 0 }} reviews)</span>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td v-for="product in comparisonList" :key="product.id" class="p-4">
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
              <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <button
                    @click="removeFromComparison(product.id)"
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
                    Remove 
                  </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="flex justify-center mt-4">
        <button @click="resetComparison" class="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
          Reset All
        </button>
      </div>
    </div>
    <div v-else class="text-center">
      <p>No products in comparison list.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

/**
 * List of products in the comparison.
 * @type {ComputedRef<Array<Object>>}
 */
const comparisonList = computed(() => store.state.usersData[userId].comparisonList);

/**
 * The currently selected category for filtering.
 * @type {Ref<string>}
 */
const selectedCategory = ref('all');

/**
 * The user ID of the currently logged-in user.
 * @type {string}
 */
const userId = store.state.currentUser.userId;

/**
 * Removes the product with the given ID from the comparison list.
 * @param {string} productId - The ID of the product to remove.
 */
const removeFromComparison = (productId) => {
  store.commit('removeFromComparison', productId);
};

/**
 * Resets the comparison list to empty.
 */
const resetComparison = () => {
  store.commit('resetComparison');
};

/**
 * Adds the specified product to the cart.
 * @param {Object} product - The product to add to the cart.
 */
const addToCart = (product) => {
  store.commit('addToCart', product);
};

// Limit the number of products in the comparison list to 4
store.subscribe((mutation, state) => {
  if (state.comparisonList.length > 4) {
    state.comparisonList.pop();
  }
});
</script>
