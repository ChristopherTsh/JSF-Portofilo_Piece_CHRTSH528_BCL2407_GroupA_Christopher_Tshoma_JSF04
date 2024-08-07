<template>
    <div class="comparison-page">
      <h1 class="text-2xl font-bold mb-4">Product Comparison</h1>
      <div class="comparison-grid">
        <div v-for="product in comparisonList" :key="product.id" class="comparison-item">
          <img :src="product.image" alt="Product Image" class="w-full h-auto mb-2" />
          <div class="text-lg font-semibold">{{ product.title }}</div>
          <div>{{ product.category }}</div>
          <div class="text-lg font-bold mt-2">${{ product.price }}</div>
          <button 
            @click="removeFromComparison(product.id)"
            class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mt-4"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const comparisonList = computed(() => store.state.comparisonList);
  
  const removeFromComparison = (productId) => {
    store.commit('removeFromComparison', productId);
  };
  </script>
  
  <style scoped>
  .comparison-page {
    padding: 1rem;
  }
  
  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .comparison-item {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
  }
  </style>
  