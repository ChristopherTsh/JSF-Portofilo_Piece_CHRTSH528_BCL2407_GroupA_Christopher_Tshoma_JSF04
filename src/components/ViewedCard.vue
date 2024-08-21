<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Button from "./Button.vue";
import LoadingPage from './LoadingPage.vue';
import NotFoundPage from './NotFoundPage.vue';

/**
 * Reactive state for product details, loading status, and error handling.
 * @type {Object}
 * @property {Ref<Object|null>} product - The product details object or null if not loaded.
 * @property {Ref<Boolean>} loading - Boolean indicating if the product data is being loaded.
 * @property {Ref<Boolean>} error - Boolean indicating if there was an error fetching product data.
 */
const product = ref(null);
const loading = ref(true);
const error = ref(false);

/**
 * Vue Router instance for navigation.
 * @type {Router}
 */
const router = useRouter();

/**
 * Vue Route instance for accessing route parameters.
 * @type {Route}
 */
const route = useRoute();
const productId = route.params.id;

/**
 * Fetches product data when the component is mounted.
 * @async
 * @function
 */
onMounted(async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    product.value = response.data;
    loading.value = false;
  } catch (fetchError) {
    console.error("Error fetching product data:", fetchError);
    error.value = true;
    loading.value = false;
  }
});
</script>

<template>
  <!-- Show loading page while data is being fetched -->
  <div v-if="loading">
    <LoadingPage />
  </div>

  <!-- Show not found page if there is an error fetching data -->
  <div v-else-if="error">
    <NotFoundPage />
  </div>

  <!-- Show product details if data is successfully fetched -->
  <div v-else class="container mx-auto p-4">
    <div class="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
      <img class="w-2/4 mb-4" :src="product.image" alt="Product Image" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-base">{{ product.category }}</p>
        <p class="text-base">{{ product.description }}</p>
        <p class="text-base font-semibold mt-2">${{ product.price }}</p>
      </div>
      <div class="svgProduct rating w-52 flex items-left -ml-2 mb-2">
        <!-- Display star rating based on product rating -->
        <svg
          v-for="i in 5"
          :key="i"
          :class="i <= Math.round(product.rating.rate) ? 'filled' : 'empty'"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"
          />
        </svg>
        <span>({{ product.rating.count }}reviews)</span>
      </div>
      <div class="px-6 pt-4 pb-2">
        <Button @click="router.push('/')" intent="Go back">Go Back</Button>
      </div>
    </div>
  </div>
</template>

<style>
/** Style for filled star rating */
.filled {
  fill: gold; 
}

/** Style for empty star rating */
.empty {
  fill: lightgray;
}
</style>
