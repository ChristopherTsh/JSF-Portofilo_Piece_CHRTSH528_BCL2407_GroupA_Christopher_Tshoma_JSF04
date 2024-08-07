<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Compare products
        </h2>
        <div class="mt-6 flex flex-col space-y-4">
          <div class="flex space-x-4">
            <button @click="addNewProduct" class="btn-primary">+ Add new product</button>
            <button @click="resetAll" class="btn-secondary">Reset all</button>
          </div>
          <div class="flex space-x-4">
            <div v-for="(product, index) in products" :key="index" class="flex-1 border rounded-lg p-4">
              <h3 class="text-lg font-semibold">{{ product.productName }}</h3>
              <p class="text-sm text-gray-500">{{ product.category }}</p>
              <p class="text-sm text-gray-500">${{ product.price }}</p>
              <p class="text-sm text-gray-500">{{ product.description }}</p>
              <div class="flex items-center">
                <span v-for="star in product.rating" :key="star" class="text-yellow-500">★</span>
                <span v-for="star in 5 - product.rating" :key="star" class="text-gray-300">★</span>
              </div>
              <p class="text-sm text-gray-500">Delivery: Will confirm soon</p>
              <p class="text-sm text-gray-500">Tax: 15%</p>
              <button @click="addToCart(product)" class="btn-primary mt-4">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const products = ref([]);
  
      const fetchProducts = async () => {
        try {
          const response = await fetch('your-api-endpoint');
          const data = await response.json();
          products.value = data.slice(0, 3); // Assuming the API returns an array of products
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      const addNewProduct = () => {
        // Logic to add a new product
      };
  
      const resetAll = () => {
        products.value = [];
      };
  
      const addToCart = (product) => {
        // Logic to add product to the cart
      };
  
      fetchProducts();
  
      return {
        products,
        addNewProduct,
        resetAll,
        addToCart,
      };
    },
  };
  </script>
  
  <style>
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded-lg;
  }
  .btn-secondary {
    @apply bg-gray-300 text-gray-700 px-4 py-2 rounded-lg;
  }
  </style>
  