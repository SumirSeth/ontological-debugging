<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded"
  >
    <span v-if="isDark">🌙</span>
    <span v-else>🔆</span>
  </button>
</template>

<script setup>
const { isDark, toggleDarkMode } = useDarkMode();
</script>

<style scoped>
/* button {
  transition: background-color 0.5s ease;
} */
</style>
