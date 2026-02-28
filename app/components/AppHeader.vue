<script setup lang="ts">
const isMenuOpen = ref(false);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <header class="sticky top-0 z-20 mb-14 bg-[#ffffff]/95 backdrop-blur-sm border-b border-[#0077cc]/30 header-animate">
    <nav
      class="mx-auto flex w-full items-center justify-between gap-3 py-4"
      aria-label="Page sections"
    >
      <div class="flex items-center gap-2">
        <span class="text-base font-bold font-['Orbitron'] tracking-wider text-[#0077cc] cyber-glow">
          IVAN_ANGJELKOSKI
        </span>
      </div>
      
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-none border border-[#0077cc] bg-[#ebebeb] text-[#0077cc] transition hover:bg-[#0077cc] hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
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

      <div class="hidden md:flex flex-wrap items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="relative px-4 py-2 text-sm font-medium font-['Share_Tech_Mono'] text-[#1a1a1a] transition-all duration-200 hover:text-[#0077cc] hover:shadow-[0_0_10px_#0077cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]/50"
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
        class="md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-[#ffffff] shadow-[0_0_30px_rgba(0,119,204,0.3)] border-r border-[#0077cc]/30"
      >
        <div class="flex h-16 items-center justify-between border-b border-[#0077cc]/30 px-4">
          <span class="text-base font-bold font-['Orbitron'] tracking-wider text-[#0077cc]">
            IVAN_ANGJELKOSKI
          </span>
          <button
            @click="isMenuOpen = false"
            class="flex items-center justify-center w-8 h-8 rounded-none border border-[#0077cc]/50 text-[#0077cc] hover:bg-[#0077cc] hover:text-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]"
            aria-label="Close menu"
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
            @click="isMenuOpen = false"
            class="block w-full px-4 py-3 text-sm font-medium font-['Share_Tech_Mono'] text-[#1a1a1a] rounded-none border border-transparent hover:border-[#0077cc] hover:text-[#0077cc] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]/50"
          >
            [{{ link.label }}]
          </a>
        </div>
      </div>
    </Transition>

    <div
      v-if="isMenuOpen"
      @click="isMenuOpen = false"
      class="md:hidden fixed inset-0 bg-black/70 z-40"
      aria-hidden="true"
    />
  </header>
</template>
