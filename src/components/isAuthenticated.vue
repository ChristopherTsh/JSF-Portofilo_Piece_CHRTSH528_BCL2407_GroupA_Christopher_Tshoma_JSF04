<template>
  <div v-if="isAuthenticated">
    <!-- Protected content here -->
  </div>
  <div v-else>
    <h1>please logIn</h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters.isAuthenticated);
    
    return {
      isAuthenticated
    };
  }
};
</script>
