<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded"
  >
    <span v-if="isDark"><Icon mode="svg" name="line-md:moon-twotone-loop"/></span>
    <span v-else><Icon mode="svg" name="line-md:sun-rising-twotone-loop" /></span>
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
