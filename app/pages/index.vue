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
  <div class="relative overflow-hidden bg-[#12060d] text-rose-50">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.2),_transparent_55%)]" />
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(244,63,94,0.18),_transparent_50%)]" />
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[size:140px_140px] opacity-15" />
    <div class="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-rose-400/30 blur-[150px]" />
    <div class="pointer-events-none absolute -right-32 top-72 h-72 w-72 rounded-full bg-pink-400/30 blur-[170px]" />
    <div class="pointer-events-none absolute left-1/2 top-24 flex -translate-x-1/2 gap-8 text-5xl text-rose-300/60">
      <span>❤</span>
      <span>♡</span>
      <span>❤</span>
    </div>

    <div class="relative mx-auto min-h-screen w-full max-w-6xl px-6 pb-24 pt-8 md:px-10">
      <header class="sticky top-4 z-20 mb-14">
        <nav
          class="mx-auto flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-rose-950/70 px-4 py-3 shadow-[0_0_24px_rgba(248,113,113,0.25)] backdrop-blur sm:w-fit"
          aria-label="Page sections"
        >
          <div class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">
            <span class="text-pink-300">&lt;love/&gt;</span>
            <span class="hidden sm:inline">Ivan</span>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-rose-100/80">
            <a
              v-for="(link, index) in navLinks"
              :key="link.href"
              :href="link.href"
              class="rounded-full border border-transparent px-3 py-1 transition hover:border-rose-300/60 hover:text-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              {{ String(index + 1).padStart(2, "0") }} // {{ link.label }}
            </a>
          </div>
        </nav>
      </header>

      <section
        id="about"
        class="grid items-center gap-10 rounded-3xl border border-white/10 bg-rose-950/70 p-8 shadow-[0_0_35px_rgba(244,63,94,0.18)] backdrop-blur md:grid-cols-[1.2fr_1fr] md:p-12"
      >
        <div class="space-y-6">
          <div class="flex flex-wrap items-center gap-3">
            <span class="rounded-full border border-rose-400/50 bg-rose-400/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-rose-200">
              System Status: Smitten
            </span>
            <span class="rounded-full border border-pink-400/50 bg-pink-400/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-pink-200">
              Frontend Dev
            </span>
          </div>
          <h1 class="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Hello Love — I am <span class="text-rose-300">Ivan_Dev</span>
          </h1>
          <p class="max-w-2xl text-base leading-relaxed text-rose-100/80 md:text-lg">
            I am a Frontend Developer at Injective Labs, focused on building polished,
            high-performance product experiences for modern web and Web3 users. I have spent
            3 years shipping frontend features and interfaces for crypto-native products, and I am
            based in North Macedonia.
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              href="#projects"
              class="rounded-full border border-rose-400/60 bg-rose-400/20 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-rose-100 transition hover:-translate-y-0.5 hover:bg-rose-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="rounded-full border border-pink-300/60 bg-pink-300/10 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-pink-100 transition hover:-translate-y-0.5 hover:bg-pink-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200"
            >
              Initiate Contact
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-sm rounded-3xl border border-rose-400/40 bg-rose-950/70 p-6 shadow-[0_0_30px_rgba(244,63,94,0.25)]">
          <div class="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-rose-200">
            <span>root@portfolio:~</span>
            <span class="text-pink-200">zsh</span>
          </div>
          <div class="mt-4 space-y-3 text-sm text-rose-100/80">
            <p><span class="text-pink-200">&gt; initializing core...</span></p>
            <p><span class="text-rose-200">&gt; loading modules: [HTML, CSS, JS]</span></p>
            <p><span class="text-rose-200">&gt; connecting to database...</span></p>
            <p><span class="text-rose-300">&gt; success.</span></p>
          </div>
          <div v-pre class="mt-5 rounded-2xl border border-white/10 bg-rose-950/80 p-4 text-xs text-rose-50/90">
            <p>const developer = {{</p>
            <p class="ml-4">name: "Ivan Angjelkoski",</p>
            <p class="ml-4">location: "North Macedonia",</p>
            <p class="ml-4">coffeeLevel: "Sweet",</p>
            <p class="ml-4">skills: ["React", "Nuxt", "Web3"],</p>
            <p>}};</p>
          </div>
          <div class="mt-6 flex items-center gap-4">
            <div class="h-16 w-16 overflow-hidden rounded-2xl border border-pink-300/50">
              <img
                src="/ivan_angjelkoski.jpeg"
                alt="Portrait of Ivan Angjelkoski"
                class="h-full w-full object-cover object-top"
              >
            </div>
            <div class="text-xs text-rose-100/80">
              <p class="uppercase tracking-[0.3em] text-pink-200">Identity Verified</p>
              <p class="text-sm text-white">Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="mt-16 space-y-6">
        <h2 class="text-2xl font-semibold text-white md:text-3xl">Skills & Technologies</h2>
        <p class="max-w-3xl text-rose-100/80">
          A practical frontend toolkit for building robust web apps, full-stack services, and
          blockchain-integrated products.
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-rose-100 shadow-[0_0_18px_rgba(244,63,94,0.2)]"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <section id="experience" class="mt-16 space-y-6">
        <h2 class="text-2xl font-semibold text-white md:text-3xl">Experience</h2>
        <article class="rounded-3xl border border-white/10 bg-rose-950/70 p-7 shadow-[0_0_30px_rgba(244,63,94,0.18)] transition duration-300 hover:-translate-y-1 hover:border-rose-300/60">
          <div class="flex flex-wrap items-baseline justify-between gap-3">
            <h3 class="text-xl font-semibold text-white">Injective Labs — Frontend Developer</h3>
            <p class="text-sm font-medium uppercase tracking-[0.3em] text-rose-200">2022 — Present · 3 years</p>
          </div>
          <ul class="mt-5 list-disc space-y-2 pl-5 text-rose-100/80">
            <li>Delivering production-grade UI for fast-moving trading and DeFi-focused workflows.</li>
            <li>Collaborating with product, design, and blockchain teams to ship clear and reliable transaction experiences.</li>
            <li>Improving frontend performance and maintainability using reusable architecture and typed development practices.</li>
          </ul>
        </article>
      </section>

      <section id="projects" class="mt-16 space-y-6">
        <h2 class="text-2xl font-semibold text-white md:text-3xl">Selected Projects</h2>
        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="project in highlights"
            :key="project.name"
            class="rounded-3xl border border-white/10 bg-rose-950/70 p-6 shadow-[0_0_25px_rgba(244,63,94,0.2)] transition duration-300 hover:-translate-y-1 hover:border-rose-300/60"
          >
            <h3 class="text-lg font-semibold text-white">{{ project.name }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-rose-100/80">{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-rose-200"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="mt-16 rounded-3xl border border-white/10 bg-rose-950/70 p-8 text-center shadow-[0_0_35px_rgba(244,63,94,0.25)]">
        <h2 class="text-2xl font-semibold text-white md:text-3xl">Let’s build something great</h2>
        <p class="mx-auto mt-3 max-w-2xl text-rose-100/80">
          Open to collaborating on ambitious frontend and Web3 products.
          Feel free to reach out for opportunities, consulting, or partnerships.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ivan@example.com"
            class="rounded-full border border-rose-400/60 bg-rose-400/20 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-rose-100 transition hover:-translate-y-0.5 hover:bg-rose-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          >
            Email Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-pink-300/60 bg-pink-300/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-pink-100 transition hover:-translate-y-0.5 hover:bg-pink-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-pink-300/60 bg-pink-300/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-pink-100 transition hover:-translate-y-0.5 hover:bg-pink-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
