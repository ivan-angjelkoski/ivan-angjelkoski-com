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
  <div class="relative overflow-x-clip bg-zinc-950 text-zinc-50">
    <div class="pointer-events-none absolute -left-28 top-8 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
    <div class="pointer-events-none absolute -right-28 top-64 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

    <div class="mx-auto min-h-screen w-full max-w-6xl px-6 pb-20 pt-8 md:px-10">
      <header class="sticky top-4 z-20 mb-14">
        <nav
          class="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center gap-1 rounded-3xl border border-zinc-800/90 bg-zinc-900/80 px-2 py-2 shadow-lg shadow-black/30 backdrop-blur sm:w-fit sm:rounded-full sm:px-3"
          aria-label="Page sections"
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="rounded-full px-2.5 py-1.5 text-xs text-zinc-300 transition hover:bg-zinc-800 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:px-3 sm:text-sm"
          >
            {{ link.label }}
          </a>
        </nav>
      </header>

      <section id="about" class="grid items-center gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-xl shadow-black/30 backdrop-blur md:grid-cols-[1.3fr_1fr] md:p-12">
        <div class="space-y-6">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Frontend Engineer</p>
          <h1 class="text-4xl font-bold leading-tight text-balance md:text-6xl">Ivan Angjelkoski</h1>
          <p class="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I am a Frontend Developer at Injective Labs, focused on building polished,
            high-performance product experiences for modern web and Web3 users. I have spent
            3 years shipping frontend features and interfaces for crypto-native products, and I am
            based in North Macedonia.
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              href="#projects"
              class="rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div class="mx-auto w-fit rounded-3xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg shadow-black/30">
          <img
            src="/ivan_angjelkoski.jpeg"
            alt="Portrait of Ivan Angjelkoski"
            class="h-72 w-64 rounded-2xl object-cover object-top md:h-80 md:w-72"
          >
        </div>
      </section>

      <section id="skills" class="mt-16 space-y-6">
        <h2 class="text-2xl font-semibold md:text-3xl">Skills & Technologies</h2>
        <p class="max-w-3xl text-zinc-300">
          A practical frontend toolkit for building robust web apps, full-stack services, and
          blockchain-integrated products.
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-100 shadow-md shadow-black/20"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <section id="experience" class="mt-16 space-y-6">
        <h2 class="text-2xl font-semibold md:text-3xl">Experience</h2>
        <article class="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-7 shadow-xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-zinc-700">
          <div class="flex flex-wrap items-baseline justify-between gap-3">
            <h3 class="text-xl font-semibold text-zinc-50">Injective Labs — Frontend Developer</h3>
            <p class="text-sm font-medium text-emerald-300">2022 — Present · 3 years</p>
          </div>
          <ul class="mt-5 list-disc space-y-2 pl-5 text-zinc-300">
            <li>Delivering production-grade UI for fast-moving trading and DeFi-focused workflows.</li>
            <li>Collaborating with product, design, and blockchain teams to ship clear and reliable transaction experiences.</li>
            <li>Improving frontend performance and maintainability using reusable architecture and typed development practices.</li>
          </ul>
        </article>
      </section>

      <section id="projects" class="mt-16 space-y-6">
        <h2 class="text-2xl font-semibold md:text-3xl">Selected Projects</h2>
        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="project in highlights"
            :key="project.name"
            class="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-zinc-700"
          >
            <h3 class="text-lg font-semibold">{{ project.name }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-zinc-300">{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-200"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 text-center shadow-xl shadow-black/25">
        <h2 class="text-2xl font-semibold md:text-3xl">Let’s build something great</h2>
        <p class="mx-auto mt-3 max-w-2xl text-zinc-300">
          Open to collaborating on ambitious frontend and Web3 products.
          Feel free to reach out for opportunities, consulting, or partnerships.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ivan@example.com"
            class="rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
          >
            Email Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
