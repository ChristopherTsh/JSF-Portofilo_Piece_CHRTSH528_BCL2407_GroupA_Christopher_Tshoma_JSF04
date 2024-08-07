<template>
  <div class="not-found-container flex flex-col justify-center items-center h-screen">
    <svg class="not-found-svg w-1/3 h-1/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path d="M32 0C14.355 0 0 14.355 0 32s14.355 32 32 32 32-14.355 32-32S49.645 0 32 0zm0 58C16.561 58 4 45.439 4 30S16.561 2 32 2s28 13.561 28 30-12.561 28-28 28z"/>
      <path d="M32 15.609c-.552 0-1 .448-1 1v18.562c0 .552.448 1 1 1s1-.448 1-1V16.609c0-.552-.448-1-1-1zM32 41.527c-.552 0-1 .448-1 1v4.026c0 .552.448 1 1 1s1-.448 1-1v-4.026c0-.552-.448-1-1-1z"/>
    </svg>
    <p class="text-2xl mt-4">404 - Page Not Found</p>
  </div>
</template>

<script>
/**
 * NotFound component.
 * 
 * This component renders a 404 Not Found page.
 */
export default {
  name: 'NotFound'
};
</script>

<style scoped>
.not-found-container {
  background-color: #f3f4f6;
  color: #333;
}
</style>
