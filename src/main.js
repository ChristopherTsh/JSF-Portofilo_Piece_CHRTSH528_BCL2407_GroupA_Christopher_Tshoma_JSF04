import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';
import './index.css';

const initializeApp = async () => {
    try {
      const response = await axios.get('/api/loadState');
      store.commit('setState', response.data);
    } catch (error) {
      console.error('Error loading initial state:', error);
    }
const app = createApp(App);


app.use(router);
app.use(store);

app.mount('#app');
};


initializeApp();
