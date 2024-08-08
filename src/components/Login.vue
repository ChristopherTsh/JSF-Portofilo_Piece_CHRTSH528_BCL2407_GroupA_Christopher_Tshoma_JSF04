<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="username" placeholder="Username" required class="login-input" />
      <input v-model="password" type="password" placeholder="Password" required class="login-input" />
      <button type="submit" class="login-button">Login</button>
    </form>
    <div class="login-actions">
      <button @click="navigateToSignup" class="login-link">Sign Up</button>
      <button @click="navigateToForgotPassword" class="login-link">Forgot Password</button>
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
    const router = useRouter();
    const store = useStore();

    const login = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value
          })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.token) {
          store.commit('setUser', { token: data.token });
          router.push('/');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    const navigateToSignup = () => {
      router.push('/signup');
    };

    const navigateToForgotPassword = () => {
      router.push('/forgot-password');
    };

    return {
      username,
      password,
      login,
      navigateToSignup,
      navigateToForgotPassword,
    };
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.login-button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.login-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.login-link {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  padding: 0;
  transition: color 0.3s;
}

.login-link:hover {
  color: #0056b3;
}
</style>
