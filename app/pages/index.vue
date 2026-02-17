<script setup lang="ts">
const isMenuOpen = ref(false);

useSeoMeta({
  title: "Ivan Angjelkoski — Frontend Developer",
  description:
    "Frontend Developer at Injective Labs with 3 years of experience building performant web and Web3 products with Vue, Nuxt, React, and TypeScript from North Macedonia.",
  ogTitle: "Ivan Angjelkoski — Frontend Developer",
  ogDescription:
    "Frontend Developer at Injective Labs building modern interfaces for Web2 and Web3 products.",
  twitterCard: "summary_large_image",
});

const skills = [
  "Vue",
  "Nuxt",
  "React",
  "Next.js",
  "TypeScript",
  "Web3",
  "Cosmos",
  "Node/Bun",
  "Hono",
];

const highlights = [
  {
    name: "Injective Trading Dashboard",
    description:
      "Built a responsive analytics dashboard with real-time market data visualizations and wallet-aware UX patterns for high-frequency crypto users.",
    stack: ["Nuxt", "TypeScript", "Tailwind", "WebSockets"],
  },
  {
    name: "Cross-Chain dApp Experience",
    description:
      "Implemented a multi-step transaction flow focused on clarity, error recovery, and execution confidence for Cosmos-based users.",
    stack: ["Vue", "Web3", "Cosmos", "Composable Architecture"],
  },
  {
    name: "Frontend Platform & UI System",
    description:
      "Created reusable design primitives and shared component guidelines that improved consistency and reduced delivery time across product squads.",
    stack: ["React", "Next.js", "Storybook", "Design Tokens"],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <div class="relative overflow-hidden bg-[#0a0a0a] text-[#e0e0e0]">
    <div class="pointer-events-none absolute inset-0 tech-grid opacity-50" />

    <div class="relative mx-auto min-h-screen w-full max-w-6xl px-6 pb-24 pt-8 md:px-10 scan-line">
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

      <section
        id="about"
        class="grid items-center gap-10 rounded-none border border-[#ff6b00]/40 bg-[#111111] p-8 md:grid-cols-[1.2fr_1fr] md:p-12 relative"
      >
        <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff6b00]" />
        <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff6b00]" />
        <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff6b00]" />
        <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff6b00]" />
        
        <div class="space-y-6">
          <div class="flex flex-wrap items-center gap-3">
            <span class="rounded-none border border-[#ff6b00] bg-[#ff6b00]/10 px-4 py-1.5 text-xs font-medium font-['Orbitron'] uppercase tracking-wider text-[#ff6b00] flicker">
              > Available for Projects
            </span>
            <span class="rounded-none border border-[#3a3a3a] bg-[#1a1a1a] px-4 py-1.5 text-xs font-medium font-['Orbitron'] uppercase tracking-wider text-[#888888]">
              Frontend Developer
            </span>
          </div>
          <h1 class="text-4xl font-bold font-['Orbitron'] leading-tight text-white md:text-5xl">
            <span class="text-[#ff6b00] cyber-glow">WEB</span>DEV<span class="text-[#ff6b00]">_</span>
          </h1>
          <p class="max-w-2xl text-lg leading-relaxed text-[#888888] font-['Share_Tech_Mono']">
            > I am a Frontend Developer at Injective Labs, focused on building polished,
            high-performance product experiences for modern web and Web3 users.<br/><br/>
            > 3 years shipping frontend features for crypto-native products<br/>
            > Based in North Macedonia
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              href="#projects"
              class="rounded-none border border-[#ff6b00] bg-[#ff6b00] px-6 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#0a0a0a] transition hover:bg-[#ff8c00] hover:shadow-[0_0_20px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
            >
              VIEW_PROJECTS
            </a>
            <a
              href="#contact"
              class="rounded-none border border-[#ff6b00]/50 bg-transparent px-6 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#ff6b00] transition hover:bg-[#ff6b00]/10 hover:shadow-[0_0_10px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
            >
              GET_IN_TOUCH
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-sm rounded-none border border-[#ff6b00]/40 bg-[#1a1a1a] p-6">
          <div class="flex items-center justify-between text-xs font-['Orbitron'] uppercase tracking-wider text-[#888888]">
            <span>> Quick Profile</span>
            <span class="text-[#ff6b00]">Details</span>
          </div>
          <div class="mt-6 space-y-3 text-sm font-['Share_Tech_Mono'] text-[#888888]">
            <p><strong class="text-[#ff6b00]">Name:</strong> Ivan Angjelkoski</p>
            <p><strong class="text-[#ff6b00]">Location:</strong> North Macedonia</p>
            <p><strong class="text-[#ff6b00]">Experience:</strong> 3+ Years</p>
            <p><strong class="text-[#ff6b00]">Role:</strong> Frontend Developer</p>
          </div>
          <div class="mt-6 rounded-none border border-[#ff6b00]/30 bg-[#0a0a0a] p-4 text-xs font-['Share_Tech_Mono'] text-[#888888]">
            <p class="font-['Orbitron'] font-semibold text-[#ff6b00] mb-2">> Core Technologies</p>
            <p class="ml-4">- React / Next.js</p>
            <p class="ml-4">- Vue / Nuxt</p>
            <p class="ml-4">- TypeScript</p>
            <p class="ml-4">- Web3 / Cosmos</p>
          </div>
          <div class="mt-6 flex items-center gap-4">
            <div class="h-16 w-16 overflow-hidden rounded-none border border-[#ff6b00]/30 bg-[#1a1a1a]">
              <img
                src="/ivan_angjelkoski.jpeg"
                alt="Portrait of Ivan Angjelkoski"
                class="h-full w-full object-cover object-top grayscale hover:grayscale-0 transition"
              >
            </div>
            <div>
              <p class="text-sm font-['Orbitron'] font-semibold text-[#e0e0e0]">Ivan Angjelkoski</p>
              <p class="text-xs font-['Share_Tech_Mono'] text-[#888888]">Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="mt-16 space-y-6">
        <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl">
          <span class="text-[#ff6b00]">></span> Skills <span class="text-[#ff6b00]">&</span> Technologies
        </h2>
        <p class="max-w-3xl text-[#888888] font-['Share_Tech_Mono']">
          > A practical frontend toolkit for building robust web apps, full-stack services, and
          blockchain-integrated products.
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-none border border-[#ff6b00]/50 bg-[#1a1a1a] px-4 py-2 text-sm font-['Share_Tech_Mono'] text-[#e0e0e0] hover:border-[#ff6b00] hover:text-[#ff6b00] hover:shadow-[0_0_10px_#ff6b00] transition"
          >
            [{{ skill }}]
          </span>
        </div>
      </section>

      <section id="experience" class="mt-16 space-y-6">
        <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl">
          <span class="text-[#ff6b00]">></span> Experience
        </h2>
        <article class="rounded-none border border-[#ff6b00]/30 bg-[#111111] p-7 transition duration-300 hover:border-[#ff6b00] hover:shadow-[0_0_20px_rgba(255,107,0,0.2)]">
          <div class="flex flex-wrap items-baseline justify-between gap-3">
            <h3 class="text-xl font-semibold font-['Orbitron'] text-white">
              <span class="text-[#ff6b00]">@</span> Injective Labs — Frontend Developer
            </h3>
            <p class="text-sm font-['Share_Tech_Mono'] text-[#888888]">2022 — Present | 3 years</p>
          </div>
          <ul class="mt-5 list-none space-y-2 pl-5 text-[#888888] font-['Share_Tech_Mono']">
            <li class="relative">
              <span class="absolute -left-5 text-[#ff6b00]">></span>
              Delivering production-grade UI for fast-moving trading and DeFi-focused workflows.
            </li>
            <li class="relative">
              <span class="absolute -left-5 text-[#ff6b00]">></span>
              Collaborating with product, design, and blockchain teams to ship clear and reliable transaction experiences.
            </li>
            <li class="relative">
              <span class="absolute -left-5 text-[#ff6b00]">></span>
              Improving frontend performance and maintainability using reusable architecture and typed development practices.
            </li>
          </ul>
        </article>
      </section>

      <section id="projects" class="mt-16 space-y-6">
        <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl">
          <span class="text-[#ff6b00]">></span> Selected Projects
        </h2>
        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="project in highlights"
            :key="project.name"
            class="rounded-none border border-[#ff6b00]/30 bg-[#111111] p-6 transition duration-300 hover:border-[#ff6b00] hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] group"
          >
            <h3 class="text-lg font-semibold font-['Orbitron'] text-white group-hover:text-[#ff6b00] transition">
              {{ project.name }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-[#888888] font-['Share_Tech_Mono']">{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-none border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-1 text-xs font-['Share_Tech_Mono'] text-[#888888] group-hover:border-[#ff6b00]/50 group-hover:text-[#ff6b00] transition"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="mt-16 rounded-none border border-[#ff6b00]/30 bg-[#111111] p-8 text-center relative">
        <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff6b00]" />
        <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff6b00]" />
        <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff6b00]" />
        <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff6b00]" />
        
        <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl">
          <span class="text-[#ff6b00]">></span> Let<span class="text-[#ff6b00]">'</span>s Build Something Together
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-[#888888] font-['Share_Tech_Mono']">
          > Open to collaborating on ambitious frontend and Web3 products.<br/>
          > Feel free to reach out for opportunities, consulting, or partnerships.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ivan@example.com"
            class="rounded-none border border-[#ff6b00] bg-[#ff6b00] px-5 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#0a0a0a] transition hover:bg-[#ff8c00] hover:shadow-[0_0_20px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
          >
            EMAIL_ME
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-none border border-[#ff6b00]/50 bg-transparent px-5 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#ff6b00] transition hover:bg-[#ff6b00]/10 hover:shadow-[0_0_10px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-none border border-[#ff6b00]/50 bg-transparent px-5 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#ff6b00] transition hover:bg-[#ff6b00]/10 hover:shadow-[0_0_10px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
          >
            LINKEDIN
          </a>
        </div>
      </section>

      <footer class="mt-24 border-t border-[#ff6b00]/20 pt-8 text-center">
        <p class="text-sm font-['Share_Tech_Mono'] text-[#888888]">
          <span class="text-[#ff6b00]">></span> Built with Vue + Nuxt | © 2026 Ivan Angjelkoski
        </p>
      </footer>
    </div>
  </div>
</template>
