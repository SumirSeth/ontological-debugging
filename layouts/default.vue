<template>
  <div class="bg-teal-200 dark:bg-black"> 

    <!-- <div v-if="show" class="flex flex-row justify-evenly items-center dark:bg-amber-900 dark:text-white bg-amber-200 font-general font-thin">
      <NuxtLink to="/" class="text-2xl z-20 bg-transparent">PawPlus</NuxtLink>
      <NuxtLink to="/services" class="text-2xl z-20 bg-transparent">Services</NuxtLink>
    </div> -->

    <nav v-if="elementVisible" class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center">
      <div class="bg-black/5 dark:bg-white/5 backdrop-brightness-110 backdrop-blur-xl shadow-lg flex items-center lg:space-x-6 space-x-4 lg:px-6 px-4 py-2 rounded-2xl max-w-max">
        <div class="2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-general font-light dark:text-white"><NuxtLink to="/">ontological-debugging</NuxtLink></div>
        <ul class="flex lg:space-x-6 space-x-4 font-general-italic font-normal dark:text-white items-center 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm text-sm ">
          <li><NuxtLink to="/services" class="italic">work</NuxtLink></li>
          <li><NuxtLink to="/about" class="italic">about</NuxtLink></li>
          <li><NuxtLink to="/contact" class="italic">contact</NuxtLink></li>
          <li><DarkModeToggle/></li>
        </ul>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts" setup>

// const elementVisible = useVisibilityState()
const elementVisible = ref(true)

</script>

<style>

</style>