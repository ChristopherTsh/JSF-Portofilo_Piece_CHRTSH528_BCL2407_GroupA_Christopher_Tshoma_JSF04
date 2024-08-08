<template>
  <div class="comparison-page">
    <h1 class="text-2xl font-bold mb-4">Product Comparison</h1>
    <div v-if="comparisonList.length" class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>General Information</th>
            <th v-for="product in comparisonList" :key="product.id">
              <img :src="product.image" alt="Product Image" class="product-image" />
              <div>{{ product.title }}</div>
              <div>{{ product.category }}</div>
              <div class="price">${{ product.price }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rating</td>
            <td v-for="product in comparisonList" :key="product.id">{{ product.rating }} / 5</td>
          </tr>
          <tr>
            <td>Description</td>
            <td v-for="product in comparisonList" :key="product.id">{{ product.description }}</td>
          </tr>
          <!-- Add more rows here for additional properties -->
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td v-for="product in comparisonList" :key="product.id">
              <button @click="addToCart(product)" class="add-to-cart-button">Add to cart</button>
              <button @click="removeFromComparison(product.id)" class="remove-button">Remove</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <button @click="resetComparison" class="reset-button">Reset all</button>
    </div>
    <div v-else>
      <p>No products in comparison list.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const comparisonList = computed(() => store.getters.comparisonList);

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

<style scoped>
.comparison-page {
  padding: 1rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  text-align: center;
}

.product-image {
  width: 100px;
  height: auto;
}

.price {
  font-weight: bold;
}

.add-to-cart-button,
.remove-button,
.reset-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
}

.remove-button {
  background-color: #dc3545;
}

.reset-button {
  background-color: #ffc107;
  margin-top: 1rem;
}

.add-to-cart-button:hover,
.remove-button:hover,
.reset-button:hover {
  opacity: 0.8;
}
</style>
