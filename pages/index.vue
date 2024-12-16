<template>
  <div class="h-screen">
    <div class="flex items-center justify-center h-screen" :style="svgGridStyle">
      <!-- this is the main content section for my portfolio -->
       <div class="main-content grid grid-cols-2 gap-5 dark:text-white bg-black/5 dark:bg-white/5 backdrop-brightness-110 backdrop-blur-xl shadow-lg items-center lg:space-x-6 space-x-4 lg:px-6 px-4 py-2 rounded-2xl max-w-max">
        <div>
          <h1 class="text-3xl font-thin">{{ greeting() }}, I'm <span class="text-teal-500">Sumir</span>.</h1>
          <!-- <p class="text-xl font-general font-light">I'm a web developer and designer from the UK.</p> -->
        </div>
        <NuxtImg src="https://files.shroomery.org/avatars/shroomery/227923a1389143332-big.png" alt="grid" class="rounded-full h-72 w-72" />
       </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { isDark, toggleDarkMode, isDarkMode } = useDarkMode();
const strokeWidth = computed(() => (isDark.value ? 0.4 : 0.7))
const strokeColor = computed(() => (isDark.value ? 'fff' : '000'))

const greetings = [
  { language: "English", greeting: "Hello" },
  { language: "Spanish", greeting: "Hola" },
  { language: "French", greeting: "Bonjour" },
  { language: "German", greeting: "Hallo" },
  { language: "Italian", greeting: "Ciao" },
  { language: "Portuguese", greeting: "Olá" },
  { language: "Russian", greeting: "Привет" },
  { language: "Chinese (Mandarin)", greeting: "你好" },
  { language: "Japanese", greeting: "こんにちは" },
  { language: "Korean", greeting: "안녕하세요" },
  { language: "Arabic", greeting: "مرحبا" },
  { language: "Hindi", greeting: "नमस्ते" },
  { language: "Bengali", greeting: "হ্যালো" },
  { language: "Turkish", greeting: "Merhaba" },
  { language: "Vietnamese", greeting: "Xin chào" },
  { language: "Swahili", greeting: "Habari" },
  { language: "Dutch", greeting: "Hallo" },
  { language: "Greek", greeting: "Γεια σας" },
  { language: "Hebrew", greeting: "שלום" },
  { language: "Thai", greeting: "สวัสดี" },
  { language: "Urdu", greeting: "ہیلو" },
  { language: "Malay", greeting: "Halo" },
  { language: "Polish", greeting: "Cześć" },
  { language: "Swedish", greeting: "Hej" },
  { language: "Finnish", greeting: "Hei" },
  { language: "Norwegian", greeting: "Hallo" },
  { language: "Danish", greeting: "Hej" },
  { language: "Romanian", greeting: "Salut" },
  { language: "Czech", greeting: "Ahoj" },
  { language: "Hungarian", greeting: "Szia" },
];

const greeting = () => {return greetings[Math.floor(Math.random() * greetings.length)].greeting}


const svgGridStyle = computed(() => ({
  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M 30 10 L 3 0 10 30" fill="none" stroke="%23${strokeColor.value}" opacity="0.5" stroke-width="${strokeWidth.value}"/></svg>')`,
}))
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>