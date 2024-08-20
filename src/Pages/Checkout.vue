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
          <label for="street" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Street</label>
          <input
            type="text"
            id="street"
            v-model="street"
            placeholder="Street Address"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            readonly
          />
        </div>
  
        <div>
          <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
          <input
            type="text"
            id="city"
            v-model="city"
            placeholder="City"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            readonly
          />
        </div>
  
        <div>
          <label for="zipcode" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Zipcode</label>
          <input
            type="text"
            id="zipcode"
            v-model="zipcode"
            placeholder="Zipcode"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            readonly
          />
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

    // Fields that should be populated with user data
    const nickname = ref('');
    const email = ref('');
    const street = ref('');
    const city = ref('');
    const zipcode = ref('');
    const phone = ref('');

    // Watch for changes to userData and populate fields accordingly
    watchEffect(() => {
      console.log('Current User:', currentUser.value); // Check if currentUser is correct
      console.log('User Data from Vuex:', userData.value); // Check if userData is populated

      if (userData.value) {
        nickname.value = currentUser.value?.nickname || '';
        email.value = userData.value?.email || '';
        street.value = userData.value?.address?.street || '';
        city.value = userData.value?.address?.city || '';
        zipcode.value = userData.value?.address?.zipcode || '';
        phone.value = userData.value?.phone || '';

        // Log the fields to ensure they're being set correctly
        console.log('Nickname:', nickname.value);
        console.log('Email:', email.value);
        console.log('Street:', street.value);
        console.log('City:', city.value);
        console.log('Zipcode:', zipcode.value);
        console.log('Phone:', phone.value);
      } else {
        console.log('No user data available in Vuex for the current user.');
      }
    });

    return { nickname, email, street, city, zipcode, phone };
  },
};
</script>

  
  