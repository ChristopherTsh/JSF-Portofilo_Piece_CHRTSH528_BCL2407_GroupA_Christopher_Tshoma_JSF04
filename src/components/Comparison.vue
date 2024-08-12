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
              <button @click="addToCart(product)" class="block w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Add to Cart
              </button>
              <button @click="removeFromComparison(product.id)" class="block w-full bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600">
                Remove
              </button>
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
const comparisonList = computed(() => store.getters.comparisonList);
const selectedCategory = ref('all');

// Limit the number of products to 4
store.subscribe((mutation, state) => {
  if (state.comparisonList.length > 4) {
    state.comparisonList.pop();
  }
});

const removeFromComparison = (productId) => {
  store.commit('removeFromComparison', productId);
};

const resetComparison = () => {
  store.commit('resetComparison');
};

const addToCart = (product) => {
  store.commit('addToCart', product);
};
</script>
