<template>
  <section
    class="max-w-5xl mx-auto mt-10 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
  >
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      Checkout
    </h1>
    <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
    <li
      :class="{'text-blue-600': currentStep === 'cart' || currentStep === 'checkout'}"
      class="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
    >
      <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
        <svg
          :class="{'text-blue-600': currentStep === 'cart' || currentStep === 'checkout'}"
          class="me-2 h-4 w-4 sm:h-5 sm:w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Cart
      </span>
    </li>

    <li
      :class="{'text-blue-600': currentStep === 'checkout'}"
      class="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
    >
      <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
        <svg
          :class="{'text-blue-600': currentStep === 'checkout'}"
          class="me-2 h-4 w-4 sm:h-5 sm:w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Checkout
      </span>
    </li>

    <li
      :class="{'text-blue-600': currentStep === 'summary'}"
      class="flex shrink-0 items-center"
    >
      <svg
        :class="{'text-blue-600': currentStep === 'summary'}"
        class="me-2 h-4 w-4 sm:h-5 sm:w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      Order summary
    </li>
  </ol>
    <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-6">
      <!-- Name Fields -->
      <div class="col-span-2">
        <label
          for="firstname"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >First Name</label
        >
        <input
          type="text"
          id="firstname"
          v-model="firstname"
          placeholder="First Name"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div class="col-span-2">
        <label
          for="lastname"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Last Name</label
        >
        <input
          type="text"
          id="lastname"
          v-model="lastname"
          placeholder="Last Name"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <!-- Email Field -->
      <div class="col-span-2">
        <label
          for="email"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Your Email"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <!-- Username Field -->
      <div class="col-span-2">
        <label
          for="username"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Username</label
        >
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Username"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <!-- Address Fields -->
      <div class="col-span-2">
        <label
          for="street"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Street</label
        >
        <input
          type="text"
          id="street"
          v-model="street"
          placeholder="Street Address"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <label
          for="city"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >City</label
        >
        <input
          type="text"
          id="city"
          v-model="city"
          placeholder="City"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <label
          for="zipcode"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Zipcode</label
        >
        <input
          type="text"
          id="zipcode"
          v-model="zipcode"
          placeholder="Zipcode"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <!-- Geolocation Fields -->
      <div>
        <label
          for="lat"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Latitude</label
        >
        <input
          type="text"
          id="lat"
          v-model="lat"
          placeholder="Latitude"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <label
          for="long"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Longitude</label
        >
        <input
          type="text"
          id="long"
          v-model="long"
          placeholder="Longitude"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <!-- Phone Number Field -->
      <div class="col-span-2">
        <label
          for="phone"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Phone Number</label
        >
        <input
          type="text"
          id="phone"
          v-model="phone"
          placeholder="Phone Number"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <!-- Payment Method Selection -->
      <div class="col-span-2">
        <label
          for="payment"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >Payment Method</label
        >
        <select
          id="payment"
          v-model="paymentMethod"
          class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="paypal">PayPal</option>
          <option value="credit_card">Credit Card</option>
        </select>
      </div>

      <!-- Order Summary -->
      <div class="col-span-2">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Order Summary
        </h2>
        <div
          v-for="item in cart"
          :key="item.id"
          class="flex justify-between py-2"
        >
          <span>{{ item.name }} (x{{ item.quantity }})</span>
          <span>{{ formatCurrency(item.price * item.quantity) }}</span>
        </div>
        <div class="flex justify-between font-bold border-t pt-2">
          <span>Total:</span>
          <span>{{ formatCurrency(cartTotal) }}</span>
        </div>
      </div>

      <!-- Place Order Button -->
      <div class="col-span-2">
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Place Order
        </button>
      </div>

      <!-- Confirmation or Error Message -->
      <div
        v-if="orderMessage"
        class="col-span-2 mt-4 p-3 text-center"
        :class="orderMessageClass"
      >
        {{ orderMessage }}
      </div>
    </form>
  </section>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const currentUser = computed(() => store.state.currentUser);
    const userData = computed(
      () => store.state.usersData[currentUser.value?.userId]
    );
    const cart = computed(() => store.state.cart);
    const cartTotal = computed(() => store.getters.cartTotal);

    // Form fields
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const username = ref("");
    const street = ref("");
    const city = ref("");
    const zipcode = ref("");
    const lat = ref("");
    const long = ref("");
    const phone = ref("");
    const paymentMethod = ref("paypal");
    const orderMessage = ref("");
    const orderMessageClass = ref("");

    // Auto-fill form with user data
    watchEffect(() => {
      if (userData.value) {
        firstname.value = userData.value?.name?.firstname || "";
        lastname.value = userData.value?.name?.lastname || "";
        email.value = userData.value?.email || "";
        username.value = userData.value?.username || "";
        street.value = userData.value?.address?.street || "";
        city.value = userData.value?.address?.city || "";
        zipcode.value = userData.value?.address?.zipcode || "";
        lat.value = userData.value?.address?.geolocation?.lat || "";
        long.value = userData.value?.address?.geolocation?.long || "";
        phone.value = userData.value?.phone || "";
      }
    });

    /**
     * Format a number as a currency string.
     *
     * @param {number} amount - The amount to format.
     * @returns {string} The formatted currency string.
     */
    const formatCurrency = (amount) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    };

    /**
     * Handle the form submission to place an order.
     */
    const handleSubmit = async () => {
      try {
        // Call Vuex action to process the payment
        const paymentResult = await store.dispatch("processPayment", {
          paymentMethod: paymentMethod.value,
          amount: cartTotal.value,
        });

        if (paymentResult.success) {
          orderMessage.value = "Order placed successfully!";
          orderMessageClass.value = "text-green-600 bg-green-100";
          router.push("/order-confirmation");
        } else {
          throw new Error(paymentResult.message || "Payment failed.");
        }
      } catch (error) {
        orderMessage.value = error.message || "Something went wrong.";
        orderMessageClass.value = "text-red-600 bg-red-100";
      }
    };

    return {
      firstname,
      lastname,
      email,
      username,
      street,
      city,
      zipcode,
      lat,
      long,
      phone,
      paymentMethod,
      cart,
      cartTotal,
      orderMessage,
      orderMessageClass,
      formatCurrency,
      handleSubmit,
      currentStep: 'checkout',
    };
  },
};
</script>

<style scoped>
.text-blue-600 {
  color: #2563eb; /* Blue color */
}

body {
  background-color: #f7f8fa;
}
</style>
