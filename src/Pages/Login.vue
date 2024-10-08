<template>
  <div
    class="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900"
  >
    <div
      class="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg relative"
    >
      <h1
        class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6"
      >
        Login
      </h1>
      <form @submit.prevent="login" class="space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          required
          class="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          v-model="nickname"
          type="text"
          placeholder="Nickname"
          required
          class="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />

        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="avatar in avatars"
            :key="avatar"
            @click="selectAvatar(avatar)"
            :class="[
              'cursor-pointer',
              selectedAvatar === avatar ? 'ring-4 ring-blue-500' : '',
              'p-1 rounded-lg bg-gray-200 dark:bg-gray-700',
            ]"
          >
            <img
              :src="`/avatars/${avatar}`"
              alt="Avatar"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="animate-spin mr-2">🔄</span> Login
        </button>
      </form>

      <div v-if="loginError" class="mt-4 text-red-500 text-center">
        {{ loginError }}
      </div>

      <div class="mt-4 text-center">
        <button @click="navigateToSignup" class="text-blue-600 hover:underline">
          Sign Up
        </button>
        |
        <button
          @click="navigateToForgotPassword"
          class="text-blue-600 hover:underline"
        >
          Forgot Password
        </button>
      </div>

      <div
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75"
      >
        <p class="text-gray-900 dark:text-white">Authenticating...</p>
      </div>

      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <p class="text-gray-900 dark:text-white">Login successful!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * Login component for handling user authentication.
 * @component
 */
export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const nickname = ref("");
    const selectedAvatar = ref("");
    const loginError = ref(null);
    const showModal = ref(false);
    const isLoading = ref(false);
    const router = useRouter();
    const store = useStore();

    const avatars = [
      "avatar1.png",
      "avatar2.png",
      "avatar3.png",
      "avatar4.png",
      "avatar5.png",
      "avatar6.png",
    ];

    /**
     * Select an avatar by updating the selectedAvatar ref.
     * @param {string} avatar - The name of the avatar file.
     */
    const selectAvatar = (avatar) => {
      selectedAvatar.value = avatar;
    };

    /**
     * Handle user login by authenticating with the server.
     * Shows loading spinner during the authentication process.
     * @async
     */
    const login = async () => {
      loginError.value = null;
      isLoading.value = true;
      try {
        // Authenticate the user
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        });

        if (!response.ok) throw new Error("Incorrect username or password");

        const data = await response.json();
        if (data.token) {
          // Fetch user details using the username
          const userResponse = await fetch(`https://fakestoreapi.com/users`);
          const users = await userResponse.json();
          const user = users.find((u) => u.username === username.value);

          if (user) {
            store.commit("setUser", {
              // Store user data in Vuex
              token: data.token,
              nickname: nickname.value,
              avatar: selectedAvatar.value,
              userData: user,
            });

            showModal.value = true;

            // Redirect to intended route or default route
            const redirectTo = store.getters.getRedirectAfterLogin || "/";
            store.commit("clearRedirectAfterLogin");
            router.push(redirectTo);
          }
        }
      } catch (error) {
        loginError.value = error.message;
      } finally {
        isLoading.value = false;
      }
    };

    /**
     * Navigate to the signup page.
     */
    const navigateToSignup = () => router.push("/signup");

    /**
     * Navigate to the forgot password page.
     */
    const navigateToForgotPassword = () => router.push("/forgot-password");

    return {
      username,
      password,
      nickname,
      selectedAvatar,
      avatars,
      selectAvatar,
      login,
      navigateToSignup,
      navigateToForgotPassword,
      loginError,
      showModal,
      isLoading,
    };
  },
};
</script>
