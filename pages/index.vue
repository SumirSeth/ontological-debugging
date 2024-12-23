<template>
  <div class="min-h-screen">
    <div class="flex items-center justify-center h-screen">
      <!-- this is the main content section for my portfolio -->
      <div class="main-content-card grid grid-cols-2 lg:gap-5 gap-3 dark:text-white bg-black/10 dark:bg-white/5 backdrop-brightness-100 backdrop-blur-sm shadow-2xl shadow-black/65 dark:shadow-white/5 items-center 2xl:space-x-10 xl:space-x-8 lg:space-x-6 md:space-x-4 space-x-2 lg:px-4 px-2 2xl:py-12 lg:py-8 md:py-6 sm:py-3 rounded-3xl max-w-max">
        <div>
          <LazyClientOnly>
            <Transition appear name="fade">
              <h1 v-if="showGreeting" class="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-thin font-['Satoshi']">{{ greeting.greeting }}, I'm <span class="text-teal-500">Sumir</span>.</h1>
            </Transition>
            <sub class="italic font-thin text-xs tracking-wide -inset-y-2">({{ greeting.language.toLowerCase() }})</sub>
            <p class="font-thin">ontological: relating to the branch of metaphysics dealing with the nature of being.</p>
          </LazyClientOnly>
        </div>
        <NuxtImg src="avatar.jpg" alt="grid" class="rounded-full 2xl:w-80 2xl:h-80 xl:w-80 xl:h-80 md:h-72 md:w-72 w-40 h-40 my-5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { isDark, toggleDarkMode, isDarkMode } = useDarkMode();

// greetings logic
const showGreeting = ref(true);
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
const greeting = ref(greetings[Math.random() * greetings.length | 0]);
const changeGreeting = () => {
  showGreeting.value = false;
  setTimeout(() => {
    greeting.value = greetings[Math.random() * greetings.length | 0];
    showGreeting.value = true;
  }, 100);
};

onMounted(() => {
  setInterval(() => {
    changeGreeting();
  }, 5000);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>