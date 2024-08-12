import { createStore } from 'vuex';
import persistState from './persistState';

const store = createStore({
  state: {
    selectedCategory: null,
    sortOption: null,
    searchTerm: '',
    cart: [],
    wishlist: [],
    user: null,
    isAuthenticated: false,
    comparisonList: [],
  },
  mutations: {
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
    setSortOption(state, option) {
      state.sortOption = option;
    },
    setSearchTerm(state, term) {
      state.searchTerm = term;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    incrementQuantity(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    addToWishlist(state, product) {
      const existingProduct = state.wishlist.find(item => item.id === product.id);
      if (!existingProduct) {
        state.wishlist.push(product);
        console.log(state.wishlist)
      }
    },
    removeFromWishlist(state, productId) {
      state.wishlist = state.wishlist.filter(product => product.id !== productId);
    },
    addToComparison(state, product) {
      const existingProduct = state.comparisonList.find(item => item.id === product.id);
      if (!existingProduct) {
        state.comparisonList.push(product);
      }
    },
    removeFromComparison(state, productId) {
      state.comparisonList = state.comparisonList.filter(product => product.id !== productId);
    },
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    setState(state, newState) {
      Object.assign(state, newState);
    },
  },
  actions: {
    addToComparison({ commit }, product) {
      commit('addToComparison', product);
    },
  },
  getters: {
    getSelectedCategory(state) {
      return state.selectedCategory;
    },
    getSortOption(state) {
      return state.sortOption;
    },
    getSearchTerm(state) {
      return state.searchTerm;
    },
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    },
    isAuthenticated(state) {
      return !!state.isAuthenticated;
    },
    comparisonList: state => state.comparisonList,
  },
  plugins: [persistState()]
});

export default store;
