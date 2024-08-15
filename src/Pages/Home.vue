<template>
  <div>
    <div v-if="loading">
      <LoadingPage />
    </div>
    <div v-else-if="error">
      <NotFoundPage />
    </div>
    <div v-else>
      <!-- Dropdown for Categories -->
      <div class="flex justify-center space-x-4 mb-6 mt-4 flex-wrap">
        <div class="relative inline-flex">
          <button
            @click="toggleDropdown"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:outline-none text-sm px-4 py-2 inline-flex items-center transition duration-200 ease-in-out"
          >
            {{ selectedCategory || "Select Category" }}
            <svg
              class="w-4 h-4 ml-2 transition-transform duration-200"
              :class="{ 'rotate-180': isCategoryDropdownOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9l-7 7-7-7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
          <div
            v-if="isCategoryDropdownOpen"
            class="absolute z-10 mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-lg w-48"
          >
            <ul class="py-1 text-sm text-gray-700 dark:text-white">
              <li
                v-for="category in categories"
                :key="category"
                class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                @click="filterProductsByCategory(category)"
              >
                {{ category }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Dropdown for Sorting -->
        <div class="relative inline-flex">
          <button
            @click="toggleSortDropdown"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:outline-none text-sm px-4 py-2 inline-flex items-center transition duration-200 ease-in-out"
          >
            {{ selectedSortOption || "Sort By" }}
            <svg
              class="w-4 h-4 ml-2 transition-transform duration-200"
              :class="{ 'rotate-180': isSortDropdownOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9l-7 7-7-7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
          <div
            v-if="isSortDropdownOpen"
            class="absolute z-10 mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-lg w-48"
          >
            <ul class="py-1 text-sm text-gray-700 dark:text-white">
              <li
                class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                @click="sortProducts('highest')"
              >
                Price: High to Low
              </li>
              <li
                class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                @click="sortProducts('lowest')"
              >
                Price: Low to High
              </li>
            </ul>
          </div>
        </div>

        <!-- Search Bar (Visible on large devices only) -->
        <div class="hidden lg:flex items-center">
          <input
            v-model="searchTerm"
            type="text"
            class="text-gray-900 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm rounded-lg px-4 py-2 w-full lg:w-auto"
            placeholder="Search by title..."
          />
          <button
            @click="searchProducts"
            class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:outline-none text-sm px-4 py-2 inline-flex items-center transition duration-200 ease-in-out"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.707 18.293l-4.97-4.97a7.978 7.978 0 001.24-4.992A8.004 8.004 0 008 0C3.588 0 0 3.588 0 8s3.588 8 8 8c1.87 0 3.577-.648 4.993-1.24l4.97 4.97c.39.39.902.584 1.414.584s1.024-.195 1.414-.584c.78-.78.78-2.048 0-2.828zM8 14a6.006 6.006 0 01-6-6 6.006 6.006 0 016-6 6.006 6.006 0 016 6 6.006 6.006 0 01-6 6z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Product List -->
      <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :dark-card="false"
            :card-image="product.image"
            :card-title="product.title"
            :card-ratings="product.rating"
            :card-description="product.description"
            :card-price="product.price"
            :card-category="product.category"
            :card-id="product.id"
            @addToComparison="addToComparison"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import LoadingPage from "../components/LoadingPage.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    ProductCard,
    LoadingPage,
    NotFoundPage,
  },

  setup() {
    const store = useStore();
    const products = ref([]);
    const categories = ref([]);
    const isCategoryDropdownOpen = ref(false);
    const isSortDropdownOpen = ref(false);
    const loading = ref(true);
    const error = ref(false);

    const selectedCategory = computed(() => store.getters.getSelectedCategory);
    const selectedSortOption = computed(() => store.getters.getSortOption);

    /**
     * Toggles the visibility of the category dropdown menu.
     */
    const toggleDropdown = () => {
      isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
    };

    /**
     * Toggles the visibility of the sort dropdown menu.
     */
    const toggleSortDropdown = () => {
      isSortDropdownOpen.value = !isSortDropdownOpen.value;
    };

    /**
     * Filters products based on the selected category.
     * @param {string} category - The selected category.
     */
    const filterProductsByCategory = (category) => {
      store.commit("setSelectedCategory", category);
      isCategoryDropdownOpen.value = false; // Close the dropdown after selecting a category
    };

    /**
     * Sorts products based on the selected option.
     * @param {string} option - The selected sorting option.
     */
    const sortProducts = (option) => {
      store.commit("setSortOption", option);
      isSortDropdownOpen.value = false; // Close the dropdown after selecting a sort option
    };

    /**
     * Searches for products based on the search term.
     */
    const searchProducts = () => {
      store.commit("setSearchTerm", searchTerm.value);
    };

    const filteredProducts = computed(() => {
      let result = products.value;
      if (store.getters.getSelectedCategory) {
        result = result.filter(
          (product) => product.category === store.getters.getSelectedCategory
        );
      }
      if (store.getters.getSearchTerm) {
        result = result.filter((product) =>
          product.title
            .toLowerCase()
            .includes(store.getters.getSearchTerm.toLowerCase())
        );
      }
      if (store.getters.getSortOption === "highest") {
        result = result.sort((a, b) => b.price - a.price);
      } else if (store.getters.getSortOption === "lowest") {
        result = result.sort((a, b) => a.price - b.price);
      }
      return result;
    });

    /**
     * Fetches products and categories data from the API on component mount.
     */
    onMounted(async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        products.value = response.data;
        categories.value = [
          ...new Set(response.data.map((product) => product.category)),
        ];
      } catch (err) {
        error.value = true;
      } finally {
        loading.value = false;
      }
    });

    const searchTerm = ref("");

    /**
     * Watches for changes in the search term and triggers product search.
     */
    watch(searchTerm, (newTerm) => {
      store.commit("setSearchTerm", newTerm);
    });

    return {
      products,
      categories,
      isCategoryDropdownOpen,
      isSortDropdownOpen,
      selectedCategory,
      selectedSortOption,
      searchTerm,
      loading,
      error,
      filteredProducts,
      toggleDropdown,
      toggleSortDropdown,
      filterProductsByCategory,
      sortProducts,
      searchProducts,
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
