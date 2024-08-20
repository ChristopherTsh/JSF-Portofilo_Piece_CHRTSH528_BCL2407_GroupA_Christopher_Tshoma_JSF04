<template>
    <section class="max-w-4xl mx-auto mt-10 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Checkout</h1>
      <form class="space-y-6">
        <div>
          <label for="nickname" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nickname</label>
          <input
            type="text"
            id="nickname"
            v-model="nickname"
            placeholder="Your Nickname"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            readonly
          />
        </div>
  
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Your Email"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            readonly
          />
        </div>
  
        <div>
          <label for="country" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
          <select
            id="country"
            v-model="country"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option>United States</option>
            <option>Australia</option>
            <!-- Add other countries as needed -->
          </select>
        </div>
  
        <div>
          <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
          <select
            id="city"
            v-model="city"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option>San Francisco</option>
            <option>New York</option>
            <!-- Add other cities as needed -->
          </select>
        </div>
  
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
          <input
            type="text"
            id="phone"
            v-model="phone"
            placeholder="Phone Number"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
  
        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Place Order
        </button>
      </form>
    </section>
  </template>
  
  <script>
  import { computed, ref, watchEffect } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const currentUser = computed(() => store.state.currentUser);
      const userData = computed(() => store.state.usersData[currentUser.value?.userId]);
  
      // Prefill user data with refs
      const nickname = ref('');
      const email = ref('');
      const country = ref('');
      const city = ref('');
      const phone = ref('');
  
      // Watch the user data and prefill the form when it changes
      watchEffect(() => {
        if (currentUser.value) {
          nickname.value = currentUser.value.nickname || '';
          email.value = userData.value?.email || '';
          country.value = userData.value?.address?.country || 'United States';
          city.value = userData.value?.address?.city || 'San Francisco';
          phone.value = userData.value?.phone || '';
        }
      });
  
      return { nickname, email, country, city, phone };
    },
  };
  </script>
  