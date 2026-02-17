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
  <header class="sticky top-0 z-20 mb-14 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#ff6b00]/30">
    <nav
      class="mx-auto flex w-full items-center justify-between gap-3 py-4"
      aria-label="Page sections"
    >
      <div class="flex items-center gap-2">
        <span class="text-base font-bold font-['Orbitron'] tracking-wider text-[#ff6b00] cyber-glow">
          IVAN_ANGJELKOSKI
        </span>
      </div>
      
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-none border border-[#ff6b00] bg-[#1a1a1a] text-[#ff6b00] transition hover:bg-[#ff6b00] hover:text-[#0a0a0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
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
          class="relative px-4 py-2 text-sm font-medium font-['Share_Tech_Mono'] text-[#e0e0e0] transition-all duration-200 hover:text-[#ff6b00] hover:shadow-[0_0_10px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]/50"
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
        class="md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-[#0a0a0a] shadow-[0_0_30px_rgba(255,107,0,0.3)] border-r border-[#ff6b00]/30"
      >
        <div class="flex h-16 items-center justify-between border-b border-[#ff6b00]/30 px-4">
          <span class="text-base font-bold font-['Orbitron'] tracking-wider text-[#ff6b00]">
            IVAN_ANGJELKOSKI
          </span>
          <button
            @click="isMenuOpen = false"
            class="flex items-center justify-center w-8 h-8 rounded-none border border-[#ff6b00]/50 text-[#ff6b00] hover:bg-[#ff6b00] hover:text-[#0a0a0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
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
            class="block w-full px-4 py-3 text-sm font-medium font-['Share_Tech_Mono'] text-[#e0e0e0] rounded-none border border-transparent hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]/50"
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
