import { createStore } from 'vuex';
import persistState from './persistState';
// Import jwtDecode correctly using the named export
import { jwtDecode } from "jwt-decode";

const store = createStore({
  state: {
    selectedCategory: null,
    sortOption: null,
    searchTerm: '',
    cart: [],
    wishlist: [],
    user: null,
    usersData: {}, // Store data for all users by userId
    currentUser: null, // Store current user's data
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
      const userId = state.currentUser?.userId;
      if (userId) {
        const existingProduct = state.usersData[userId].cart.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.usersData[userId].cart.push({ ...product, quantity: 1 });
        }
      }
    },
    removeFromCart(state, productId) {
      const userId = state.currentUser?.userId;
      if (userId) {
        state.usersData[userId].cart = state.usersData[userId].cart.filter(product => product.id !== productId);
      }
    },
    incrementQuantity(state, productId) {
      const userId = state.currentUser?.userId;
      if (userId) {
        const product = state.usersData[userId].cart.find(item => item.id === productId);
        if (product) {
          product.quantity++;
        }
      }
    },
    decrementQuantity(state, productId) {
      const userId = state.currentUser?.userId;
      if (userId) {
        const product = state.usersData[userId].cart.find(item => item.id === productId);
        if (product && product.quantity > 1) {
          product.quantity--;
        }
      }
    },
    addToWishlist(state, product) {
      const userId = state.currentUser?.userId;
      if (userId) {
        const existingProduct = state.usersData[userId].wishlist.find(item => item.id === product.id);
        if (!existingProduct) {
          state.usersData[userId].wishlist.push(product);
        }
      }
    },
    removeFromWishlist(state, productId) {
      const userId = state.currentUser?.userId;
      if (userId) {
        state.usersData[userId].wishlist = state.usersData[userId].wishlist.filter(product => product.id !== productId);
      }
    },
    addToComparison(state, product) {
      const userId = state.currentUser?.userId;
      if (userId) {
        const existingProduct = state.usersData[userId].comparisonList.find(item => item.id === product.id);
        if (!existingProduct && state.usersData[userId].comparisonList.length < 4) {
          state.usersData[userId].comparisonList.push(product);
        }
      }
    },
    removeFromComparison(state, productId) {
      const userId = state.currentUser?.userId;
      if (userId) {
        state.usersData[userId].comparisonList = state.usersData[userId].comparisonList.filter(product => product.id !== productId);
      }
    },
    resetComparison(state) {
      const userId = state.currentUser?.userId;
      if (userId) {
        state.usersData[userId].comparisonList = [];
      }
    },
    setUser(state, { token, nickname = '', avatar = '', userData }) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.sub;
  
      // Set current user state
      state.currentUser = { userId, token, nickname, avatar };
      state.isAuthenticated = true;
  
      // Initialize user data if not already present
      if (!state.usersData[userId]) {
        state.usersData[userId] = {
          cart: [],
          wishlist: [],
          comparisonList: [],
          token,
          nickname,
          avatar,
          ...userData // Spread the userData to include additional fields
        };
      } else {
        // Update existing user data if necessary
        state.usersData[userId] = {
          ...state.usersData[userId],
          token,
          nickname,
          avatar,
          ...userData // Ensure existing fields are updated
        };
      }

      // Debug log to check if user data is correctly stored
      console.log('User data stored in Vuex:', state.usersData[userId]);
    },
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    setState(state, newState) {
      Object.assign(state, newState);
    },
  },
  actions: {
    async proceedToPayPal({ state }) {
      const userId = state.currentUser?.userId;
      if (userId) {
        const cartTotal = state.usersData[userId].cart.reduce((total, product) => total + (product.price * product.quantity), 0);
        const discountedTotal = cartTotal * (state.usersData[userId].cart.length >= 5 ? 0.9 : 1);

        const paypalUrl = 'https://www.sandbox.paypal.com/cgi-bin/webscr';

        const queryString = new URLSearchParams({
          cmd: '_xclick',
          business: 'YOUR_PAYPAL_EMAIL',
          amount: discountedTotal.toFixed(2),
          currency_code: 'USD',
          item_name: 'Cart Total',
          return: 'http://yourdomain.com/payment-confirmation',
          cancel_return: 'http://yourdomain.com/cart',
        }).toString();

        console.log(`${paypalUrl}?${queryString}`);

        window.location.href = `${paypalUrl}?${queryString}`;
      }
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
      const userId = state.currentUser?.userId;
      return userId
        ? state.usersData[userId].cart.reduce((total, product) => total + (product.price * product.quantity), 0)
        : 0;
    },
    getCart(state) {
      const userId = state.currentUser?.userId;
      return userId ? state.usersData[userId].cart : [];
    },
    getWishlist(state) {
      const userId = state.currentUser?.userId;
      return userId ? state.usersData[userId].wishlist : [];
    },
    isAuthenticated(state) {
      return !!state.isAuthenticated;
    },
    comparisonList: state => {
      const userId = state.currentUser?.userId;
      return userId ? state.usersData[userId].comparisonList : [];
    },
  },
  plugins: [persistState()],
});

export default store;
