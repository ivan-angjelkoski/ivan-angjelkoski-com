<script setup lang="ts">
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
  <div class="relative overflow-hidden bg-white text-gray-900">
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-gray-50 to-white" />

    <div class="relative mx-auto min-h-screen w-full max-w-6xl px-6 pb-24 pt-8 md:px-10">
      <header class="sticky top-0 z-20 mb-14 bg-white/90 backdrop-blur">
        <nav
          class="mx-auto flex w-full flex-wrap items-center justify-between gap-3 border-b border-blue-200/50 pb-4 md:w-fit md:border-0 md:pb-0"
          aria-label="Page sections"
        >
          <div class="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span class="text-blue-600">Ivan Angjelkoski</span>
          </div>
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="transition hover:text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {{ link.label }}
            </a>
          </div>
        </nav>
      </header>

      <section
        id="about"
        class="grid items-center gap-10 rounded-2xl border border-blue-200 bg-white p-8 shadow-lg md:grid-cols-[1.2fr_1fr] md:p-12"
      >
        <div class="space-y-6">
          <div class="flex flex-wrap items-center gap-3">
            <span class="rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-700">
              Available for Projects
            </span>
            <span class="rounded-full border border-blue-200 bg-gray-50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-600">
              Frontend Developer
            </span>
          </div>
          <h1 class="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            I build modern web applications
          </h1>
          <p class="max-w-2xl text-lg leading-relaxed text-gray-600">
            I am a Frontend Developer at Injective Labs, focused on building polished,
            high-performance product experiences for modern web and Web3 users. I have spent
            3 years shipping frontend features and interfaces for crypto-native products, and I am
            based in North Macedonia.
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              href="#projects"
              class="rounded-lg border border-blue-600 bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="rounded-lg border border-blue-300 bg-gray-50 px-6 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-sm rounded-2xl border border-blue-200 bg-gray-50 p-6 shadow-lg">
          <div class="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-gray-500">
            <span>Quick Profile</span>
            <span class="text-blue-600">Details</span>
          </div>
          <div class="mt-6 space-y-3 text-sm text-gray-600">
            <p><strong class="text-gray-900">Name:</strong> Ivan Angjelkoski</p>
            <p><strong class="text-gray-900">Location:</strong> North Macedonia</p>
            <p><strong class="text-gray-900">Experience:</strong> 3+ Years</p>
            <p><strong class="text-gray-900">Role:</strong> Frontend Developer</p>
          </div>
          <div class="mt-6 rounded-xl border border-blue-200 bg-white p-4 text-xs text-gray-600">
            <p class="font-semibold text-gray-900 mb-2">Core Technologies</p>
            <p class="ml-4">• React / Next.js</p>
            <p class="ml-4">• Vue / Nuxt</p>
            <p class="ml-4">• TypeScript</p>
            <p class="ml-4">• Web3 / Cosmos</p>
          </div>
          <div class="mt-6 flex items-center gap-4">
            <div class="h-16 w-16 overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
              <img
                src="/ivan_angjelkoski.jpeg"
                alt="Portrait of Ivan Angjelkoski"
                class="h-full w-full object-cover object-top"
              >
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-900">Ivan Angjelkoski</p>
              <p class="text-xs text-gray-600">Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="mt-16 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">Skills & Technologies</h2>
        <p class="max-w-3xl text-gray-600">
          A practical frontend toolkit for building robust web apps, full-stack services, and
          blockchain-integrated products.
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-gray-900"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <section id="experience" class="mt-16 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">Experience</h2>
        <article class="rounded-2xl border border-blue-200 bg-white p-7 shadow-lg transition duration-300 hover:shadow-xl hover:border-blue-300">
          <div class="flex flex-wrap items-baseline justify-between gap-3">
            <h3 class="text-xl font-semibold text-gray-900">Injective Labs — Frontend Developer</h3>
            <p class="text-sm font-medium text-gray-600">2022 — Present · 3 years</p>
          </div>
          <ul class="mt-5 list-disc space-y-2 pl-5 text-gray-600">
            <li>Delivering production-grade UI for fast-moving trading and DeFi-focused workflows.</li>
            <li>Collaborating with product, design, and blockchain teams to ship clear and reliable transaction experiences.</li>
            <li>Improving frontend performance and maintainability using reusable architecture and typed development practices.</li>
          </ul>
        </article>
      </section>

      <section id="projects" class="mt-16 space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">Selected Projects</h2>
        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="project in highlights"
            :key="project.name"
            class="rounded-2xl border border-blue-200 bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl hover:border-blue-300"
          >
            <h3 class="text-lg font-semibold text-gray-900">{{ project.name }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="mt-16 rounded-2xl border border-blue-200 bg-white p-8 text-center shadow-lg">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">Let's Build Something Together</h2>
        <p class="mx-auto mt-3 max-w-2xl text-gray-600">
          Open to collaborating on ambitious frontend and Web3 products.
          Feel free to reach out for opportunities, consulting, or partnerships.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ivan@example.com"
            class="rounded-lg border border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Email Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-lg border border-blue-300 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-lg border border-blue-300 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
