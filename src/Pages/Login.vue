<template>
  <div class="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Login</h1>
      <form @submit.prevent="login" class="space-y-4">
        <input v-model="username" type="text" placeholder="Username" required class="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input v-model="password" type="password" placeholder="Password" required class="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <input v-model="nickname" type="text" placeholder="Nickname" required class="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />

        <div class="grid grid-cols-3 gap-4">
          <div 
            v-for="avatar in avatars" 
            :key="avatar" 
            @click="selectAvatar(avatar)" 
            :class="['cursor-pointer', selectedAvatar === avatar ? 'ring-4 ring-blue-500' : '']"
            class="p-1 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            <img :src="`/avatars/${avatar}`" alt="Avatar" class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Login</button>
      </form>
      <div v-if="loginError" class="mt-4 text-red-500 text-center">{{ loginError }}</div>
      <div class="mt-4 text-center">
        <button @click="navigateToSignup" class="text-blue-600 hover:underline">Sign Up</button> |
        <button @click="navigateToForgotPassword" class="text-blue-600 hover:underline">Forgot Password</button>
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <p class="text-gray-900 dark:text-white">Login successful!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const nickname = ref('');
    const selectedAvatar = ref('');
    const loginError = ref(null);
    const showModal = ref(false);
    const router = useRouter();
    const store = useStore();

    const avatars = ['avatar1.png', 'avatar2.png', 'avatar3.png', 'avatar4.png'];

    const selectAvatar = (avatar) => {
      selectedAvatar.value = avatar;
    };

    const login = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: username.value, password: password.value }),
        });

        if (!response.ok) throw new Error('Incorrect username or password');

        const data = await response.json();
        if (data.token) {
          store.commit('setUser', { token: data.token, nickname: nickname.value, avatar: selectedAvatar.value });
          showModal.value = true;
          setTimeout(() => {
            showModal.value = false;
            router.push('/');
          }, 2000);
        }
      } catch (error) {
        loginError.value = error.message;
      }
    };

    const navigateToSignup = () => router.push('/signup');
    const navigateToForgotPassword = () => router.push('/forgot-password');

    return { username, password, nickname, selectedAvatar, avatars, selectAvatar, login, navigateToSignup, navigateToForgotPassword, loginError, showModal };
  }
};
</script>
