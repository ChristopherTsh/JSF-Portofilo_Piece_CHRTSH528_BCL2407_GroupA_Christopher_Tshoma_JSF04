<template>
  <div
    :class="[
      cardClass,
      darkCard ? 'bg-gray-800 text-white' : 'bg-white text-gray-800',
    ]"
  >
    <img class="w-2/4" :src="cardImage" alt="Product Image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ cardTitle }}</div>
      <p class="text-base">{{ cardCategory }}</p>
      <p class="text-base font-semibold mt-2">${{ cardPrice }}</p>
    </div>
    <div class="px-6 pt-4 pb-2 flex justify-between items-center">
      <button
        @click="toggleWishlist"
        :class="{ 'icon-button active': isInWishlist }"
        class="icon-button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        @click="toggleCart"
        :class="{ 'icon-button active': isInCart }"
        class="icon-button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
        >
          <path
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.25 10h9.25l1.45-4H5.21L7.25 10zm13.65-4.34l-3.2 9.19c-.14.43-.52.73-.98.73H7.56c-.45 0-.84-.31-.98-.74L3.36 5.65H1V3h3.25c.45 0 .84.31.98.74l1.5 4.25H18c.38 0 .72.21.89.55.17.34.17.75 0 1.09L18 5.66h-3.76l1.5-4.25c.14-.43.53-.74.98-.74H20v2h-1.75z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        @click="addToComparison"
        :class="{ 'icon-button active': isInComparison }"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3H14V21H10V3ZM4 7H8V21H4V7ZM16 13H20V21H16V13Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Button @click="viewProduct" intent="view product">View Product</Button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "./Button.vue";

// Props definition
const props = defineProps({
  darkCard: {
    type: Boolean,
    default: false,
  },
  cardImage: {
    type: String,
    default: "",
  },
  cardTitle: {
    type: String,
    default: "",
  },
  cardDescription: {
    type: String,
    default: "",
  },
  cardPrice: {
    type: Number,
    default: 0,
  },
  cardCategory: {
    type: String,
    default: "",
  },
  cardId: {
    type: Number,
    required: true,
  },
  // cardRatings:{
  //   type: Object,
  //   required: true,
  // }
});

const store = useStore();
const router = useRouter();

const cardClass = computed(() => "max-w-sm rounded overflow-hidden shadow-lg p-6");

// States for wishlist and cart
const isInWishlist = computed(() =>
  store.state.wishlist.some((product) => product.id === props.cardId)
);
const isInCart = ref(false);
const isInComparison = computed(() =>
  store.state.comparisonList.some((product) => product.id === props.cardId)
);

// Method to navigate to product detail page
const viewProduct = () => {
  router.push(`/product/${props.cardId}`);
};

// Method to toggle wishlist status
const toggleWishlist = () => {
  if (isInWishlist.value) {
    store.commit("removeFromWishlist", props.cardId);
    console.log(`Product ${props.cardId} removed from wishlist`);
  } else {
    store.commit("addToWishlist", {
      id: props.cardId,
      title: props.cardTitle,
      price: props.cardPrice,
      image: props.cardImage,
      rating: props.cardRatings,
      
    });
    // console.log(`Product ${props.cardId} added to wishlist`);
  }
};

// Method to toggle cart status
const toggleCart = () => {
  isInCart.value = !isInCart.value;
  if (isInCart.value) {
    store.commit("addToCart", {
      id: props.cardId,
      title: props.cardTitle,
      price: props.cardPrice,
      category: props.cardCategory,
      image: props.cardImage,
    });
  } else {
    store.commit("removeFromCart", props.cardId);
  }
  console.log(
    `Product ${props.cardId} ${
      isInCart.value ? "added to" : "removed from"
    } cart`
  );
};

// Method to add product to comparison list
const addToComparison = () => {
  store.commit("addToComparison", {
    id: props.cardId,
    title: props.cardTitle,
    category: props.cardCategory,
    price: props.cardPrice,
    image: props.cardImage,
    description: props.cardDescription,
    rating: props.cardRatings,
  });
  // console.log(`Product ${props.cardId} added to comparison`);
};
</script>

<style scoped>
.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}

.icon-button:hover {
  color: #007bff;
}

.icon-button.active {
  color: #007bff; /* Change to desired active color */
}

.icon-button svg {
  fill: currentColor;
}
</style>
