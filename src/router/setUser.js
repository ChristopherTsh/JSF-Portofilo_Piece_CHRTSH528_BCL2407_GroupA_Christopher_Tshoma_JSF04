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

    const avatars = ['avatar1.png', 'avatar2.png', 'avatar3.png', 'avatar4.png','avatar5.png','avatar6.png'];

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
