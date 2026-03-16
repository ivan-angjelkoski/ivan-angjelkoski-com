<script setup lang="ts">
defineProps<{
  foo?: string;
  bar: number;
}>();

const isMenuOpen = ref(false);
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <header
    class="sticky top-0 z-20 mb-14 bg-[#ffffff]/95 dark:bg-[#111111]/95 backdrop-blur-sm border-b border-[#0077cc]/30 dark:border-[#0077cc]/50 header-animate"
  >
    <nav
      class="mx-auto flex w-full items-center justify-between gap-3 py-4"
      aria-label="Page sections"
    >
      <div class="flex items-center gap-2">
        <span
          class="text-base font-bold font-['Orbitron'] tracking-wider text-[#0077cc] cyber-glow"
        >
          IVAN_ANGJELKOSKI
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="toggleTheme"
          class="flex items-center justify-center w-10 h-10 rounded-none border border-[#0077cc] bg-[#ebebeb] dark:bg-[#1a1a1a] text-[#0077cc] transition hover:bg-[#0077cc] hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]"
          aria-label="Toggle theme"
        >
          <svg
            v-if="colorMode.value === 'dark'"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>

        <button
          class="md:hidden flex items-center justify-center w-10 h-10 rounded-none border border-[#0077cc] bg-[#ebebeb] dark:bg-[#1a1a1a] text-[#0077cc] transition hover:bg-[#0077cc] hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="hidden md:flex flex-wrap items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="relative px-4 py-2 text-sm font-medium font-['Share_Tech_Mono'] text-[#1a1a1a] dark:text-[#e5e5e5] transition-all duration-200 hover:text-[#0077cc] hover:shadow-[0_0_10px_#0077cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]/50"
        >
          [{{ link.label }}]
        </a>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-[#ffffff] dark:bg-[#111111] shadow-[0_0_30px_rgba(0,119,204,0.3)] border-r border-[#0077cc]/30"
      >
        <div
          class="flex h-16 items-center justify-between border-b border-[#0077cc]/30 px-4"
        >
          <span
            class="text-base font-bold font-['Orbitron'] tracking-wider text-[#0077cc]"
          >
            IVAN_ANGJELKOSKI
          </span>
          <button
            class="flex items-center justify-center w-8 h-8 rounded-none border border-[#0077cc]/50 text-[#0077cc] hover:bg-[#0077cc] hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]"
            aria-label="Close menu"
            @click="isMenuOpen = false"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="p-4 space-y-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block w-full px-4 py-3 text-sm font-medium font-['Share_Tech_Mono'] text-[#1a1a1a] dark:text-[#e5e5e5] rounded-none border border-transparent hover:border-[#0077cc] hover:text-[#0077cc] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]/50"
            @click="isMenuOpen = false"
          >
            [{{ link.label }}]
          </a>
        </div>
      </div>
    </Transition>

    <div
      v-if="isMenuOpen"
      class="md:hidden fixed inset-0 bg-black/70 z-40"
      aria-hidden="true"
      @click="isMenuOpen = false"
    />
  </header>
</template>
