<template>
    <div class="comparison-page">
      <h1 class="text-2xl font-bold mb-4">Product Comparison</h1>
      <div class="comparison-header">
        <button @click="addProduct" class="btn-add">+ Add new product</button>
        <button @click="resetComparison" class="btn-reset">Reset all</button>
      </div>
      <div class="comparison-grid">
        <div v-if="comparisonList.length > 0" v-for="product in comparisonList" :key="product.id" class="comparison-item">
          <div class="product-image">
            <img :src="product.image" alt="Product Image" />
          </div>
          <div class="product-info">
            <h2 class="product-title">{{ product.title }}</h2>
            <div class="product-category">{{ product.category }}</div>
            <div class="product-price">${{ product.price }}</div>
          </div>
          <div class="product-details">
            <h3>General Information</h3>
            <p>Brand: {{ product.brand }}</p>
            <p>Colors: {{ product.colors.join(', ') }}</p>
            <p>Category: {{ product.category }}</p>
            <h3>Technical Information</h3>
            <p>Platform: {{ product.platform }}</p>
            <p>RAM: {{ product.ram }}</p>
            <p>CPU: {{ product.cpu }}</p>
            <p>GPU: {{ product.gpu }}</p>
            <p>Storage: {{ product.storage }}</p>
            <p>Resolution: {{ product.resolution }}</p>
            <p>Frame Rate: {{ product.frameRate }}</p>
            <p>Optical Drive: {{ product.opticalDrive }}</p>
            <p>Controller: {{ product.controller }}</p>
            <p>Web Connection: {{ product.webConnection }}</p>
            <h3>Delivery</h3>
            <p>Country: {{ product.delivery.country }}</p>
            <p>Duration: {{ product.delivery.duration }}</p>
            <p>Tax: {{ product.delivery.tax }}</p>
          </div>
          <button @click="addToCart(product.id)" class="btn-cart">Add to cart</button>
        </div>
        <div v-else class="empty-message">No products to compare.</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const comparisonList = computed(() => store.state.comparisonList);
  
  const addProduct = () => {
    // Logic to add a new product
  };
  
  const resetComparison = () => {
    store.commit('resetComparison');
  };
  
  const addToCart = (productId) => {
    // Logic to add product to cart
  };
  </script>
  
  <style scoped>
  .comparison-page {
    padding: 1rem;
  }
  
  .comparison-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .btn-add, .btn-reset {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  .btn-reset {
    background-color: #dc3545;
  }
  
  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  
  .comparison-item {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .product-image img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  .product-info {
    margin-bottom: 1rem;
  }
  
  .product-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .product-category, .product-price {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .product-details {
    text-align: left;
    width: 100%;
  }
  
  .product-details h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  
  .btn-cart {
    background-color: #28a745;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .empty-message {
    grid-column: span 3;
    text-align: center;
    font-size: 1.25rem;
    color: #6c757d;
  }
  </style>
  