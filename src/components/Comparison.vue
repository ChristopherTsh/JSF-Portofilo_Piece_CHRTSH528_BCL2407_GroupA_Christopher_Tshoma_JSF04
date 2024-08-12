<template>
  <div class="comparison-page">
    <h1 class="text-2xl font-bold mb-4">Product Comparison</h1>
    <div v-if="comparisonList.length" class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th v-for="product in comparisonList" :key="product.id">
              <img
                :src="product.image"
                alt="Product Image"
                class="product-image"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Title</th>
            <td v-for="product in comparisonList" :key="product.id">
              {{ product.title }}
            </td>
          </tr>
          <tr>
            <th>Category</th>
            <td v-for="product in comparisonList" :key="product.id">
              {{ product.category }}
            </td>
          </tr>
          <tr>
            <th>Price</th>
            <td v-for="product in comparisonList" :key="product.id">
              ${{ product.price }}
            </td>
          </tr>
          <tr>
            <th>Description</th>
            <td v-for="product in comparisonList" :key="product.id">
              {{ product.description }}
            </td>
          </tr>
          <tr>
            <th>Ratings</th>
            <td
              v-for="product in comparisonList"
              :key="product.id"
              
            >
            <div class="svgProduct rating w-52 flex items-center -ml-2 mb-2">
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
                  </div>
          </td>
          </tr>
          <tr>
            <th>reviews</th>
            <td v-for="product in comparisonList" :key="product.id">
              <span>({{ product.rating?.count || 0 }}reviews)</span>
            </td>
          </tr>
          
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td v-for="product in comparisonList" :key="product.id">
              <button @click="addToCart(product)" class="add-to-cart-button">
                Add to cart
              </button>
              <button
                @click="removeFromComparison(product.id)"
                class="remove-button"
              >
                Remove
              </button>
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
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const comparisonList = computed(() => store.getters.comparisonList);

const removeFromComparison = (productId) => {
  store.commit("removeFromComparison", productId);
};

const resetComparison = () => {
  store.commit("resetComparison");
};

const addToCart = (product) => {
  store.commit("addToCart", product);
};
</script>

<style scoped>
.comparison-page {
  padding: 1rem;
}
.stars {
  width: 170px;
  display: flex;
  height: 59px;
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
  display: inline;
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
