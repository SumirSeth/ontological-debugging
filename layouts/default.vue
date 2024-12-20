<template>
  <div class="bg-white dark:bg-black" :style="animationPreference ? svgGridStyleAnimated : svgGridStyle"> 

    <!-- <div v-if="show" class="flex flex-row justify-evenly items-center dark:bg-amber-900 dark:text-white bg-amber-200 font-general font-thin">
      <NuxtLink to="/" class="text-2xl z-20 bg-transparent">PawPlus</NuxtLink>
      <NuxtLink to="/services" class="text-2xl z-20 bg-transparent">Services</NuxtLink>
    </div> -->

    <nav v-if="elementVisible" class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center transition ease-in-out delay-150">
      <div class="bg-black/5 dark:bg-white/5 backdrop-brightness-110 backdrop-blur-xl shadow-lg flex items-center lg:space-x-6 space-x-4 lg:px-6 px-4 py-2 rounded-2xl max-w-max">
        <div class="2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-general font-light dark:text-white flex flex-row gap-2">
          <div class="flex flex-row items-center gap-2">
            <NuxtImg src="fav.webp" alt="site logo" class="rounded-full w-10 h-10" />
            <TransitionGroup appear name="fade">
              <NuxtLink to="/" v-if="showFullTitle">ontological-debugging</NuxtLink>
              <NuxtLink to="/" v-if="showShortTitle">sumset</NuxtLink>
            </TransitionGroup>
          </div>
        </div>
        <ul class="flex lg:space-x-6 space-x-4 font-general-italic font-normal dark:text-white items-center 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm text-sm ">
          <li><NuxtLink to="/services" class="italic">work</NuxtLink></li>
          <li><NuxtLink to="/about" class="italic">about</NuxtLink></li>
          <li><NuxtLink to="/contact" class="italic">contact</NuxtLink></li>
          <li><DarkModeToggle/></li>
        </ul>
      </div>
    </nav>
    <slot />
    <p @click="animationPreference = animationPreference ? false : true" class="dark:text-white text-black absolute bottom-0 right-0 lg:p-4 p-2 lg:text-base sm:text-xs text-xs dark:opacity-20 opacity-55 cursor-cell hover:opacity-90 dark:hover:opacity-90">Turn {{ animationPreference ? "off" : "on" }} animation</p>
  </div>
</template>

<script lang="ts" setup>

// logic for changing the title
const showFullTitle = ref(true)
const showShortTitle = ref(false)

onMounted(() => {
  setTimeout(() => {
    showFullTitle.value = false
  }, 5000)
  setTimeout(() => {
    showShortTitle.value = true
  }, 5500)
})


const { isDark, toggleDarkMode, isDarkMode } = useDarkMode();
const animationPreference = ref(true);
const elementVisible = ref(true)
// svg logic
const strokeWidth = computed(() => (isDark.value ? 0.4 : 0.7));
const strokeColor = computed(() => (isDark.value ? 'fff' : '000'));
const svgGridStyleAnimated = computed(() => ({
  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M 30 10 L 3 0 10 30" fill="none" stroke="%23${strokeColor.value}" opacity="0.5" stroke-width="${strokeWidth.value}"/></svg>')`,
  animation: 'moveBackground 10s linear infinite',
}));
const svgGridStyle = computed(() => ({
  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M 30 10 L 3 0 10 30" fill="none" stroke="%23${strokeColor.value}" opacity="0.5" stroke-width="${strokeWidth.value}"/></svg>')`,
}));

</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>