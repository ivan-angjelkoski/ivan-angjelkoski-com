<script setup lang="ts">
type ProjectLink = {
  label: "Live" | "Code" | "Case Study";
  href: string | null;
};

type Project = {
  name: string;
  description: string;
  role: string;
  stack: string[];
  featured?: boolean;
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    name: "Injective Trading Dashboard",
    role: "Frontend architecture and interaction design",
    description:
      "Crafted a responsive analytics dashboard with real-time market surfaces and wallet-aware interactions designed for fast, high-context decision making.",
    stack: ["Nuxt", "TypeScript", "Tailwind", "WebSockets"],
    featured: true,
    links: [
      { label: "Live", href: null },
      { label: "Code", href: null },
      { label: "Case Study", href: null },
    ],
  },
  {
    name: "Cross-Chain dApp Experience",
    role: "Transaction flow UX and implementation",
    description:
      "Designed and implemented a multi-step cross-chain transaction journey focused on clarity, confidence states, and graceful error recovery.",
    stack: ["Vue", "Cosmos", "Web3", "Composable architecture"],
    links: [
      { label: "Live", href: null },
      { label: "Code", href: null },
      { label: "Case Study", href: null },
    ],
  },
  {
    name: "Frontend Platform & UI System",
    role: "System design and shared component strategy",
    description:
      "Established reusable UI primitives, documentation patterns, and tokenized design foundations that improved consistency and delivery speed across teams.",
    stack: ["React", "Next.js", "Storybook", "Design tokens"],
    links: [
      { label: "Live", href: null },
      { label: "Code", href: null },
      { label: "Case Study", href: null },
    ],
  },
];
</script>

<template>
  <section id="projects" class="projects-animate space-y-10">
    <div class="space-y-4">
      <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span class="section-tag">// SECTION_04</span>
        <span class="hud-label">[ARCHIVE.DB]</span>
      </div>
      <h2 class="section-heading flicker max-w-3xl">Selected projects, presented as case-study modules.</h2>
      <p class="section-intro">
        Each project balances functional clarity with visual polish, translating complex
        requirements into interfaces that feel natural, reliable, and intentionally designed.
      </p>
    </div>

    <div class="space-y-10 sm:space-y-14">
      <article
        v-for="(project, index) in projects"
        :key="project.name"
        class="project-shell projects-animate chamfer-lg relative grid gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-8"
        :class="index % 2 === 1 ? 'lg:[&>.project-media]:order-2' : ''"
      >
        <div class="project-media lg:col-span-7">
          <div class="media-frame h-56 p-5 sm:h-72" style="background: var(--color-bg-slate);">
            <div
              class="relative flex h-full flex-col justify-between border border-[rgba(255,230,0,0.18)] bg-[rgba(5,5,5,0.55)] p-5"
              style="background-image: linear-gradient(rgba(255, 230, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 230, 0, 0.03) 1px, transparent 1px); background-size: 24px 24px;"
            >
              <span class="hud-cross" style="top: 0.5rem; left: 0.5rem;" aria-hidden="true" />
              <span class="hud-cross" style="bottom: 0.5rem; right: 0.5rem;" aria-hidden="true" />

              <div class="flex items-center justify-between">
                <p class="muted-meta tabular text-[var(--color-accent)]">CASE // {{ String(index + 1).padStart(2, "0") }}</p>
                <div class="flex gap-1.5" aria-hidden="true">
                  <span class="h-1.5 w-1.5 bg-[var(--color-red)]" style="box-shadow: 0 0 6px rgba(255, 45, 45, 0.6);" />
                  <span class="h-1.5 w-1.5 bg-[var(--color-amber)]" style="box-shadow: 0 0 6px rgba(255, 85, 0, 0.6);" />
                  <span class="h-1.5 w-1.5 bg-[var(--color-green)]" style="box-shadow: 0 0 6px rgba(61, 255, 154, 0.6);" />
                </div>
              </div>
              <p class="pr-6 text-2xl font-bold uppercase leading-[1.08] text-[var(--color-text)] sm:text-4xl" style="font-family: var(--font-display); letter-spacing: 0.02em; text-shadow: 0 0 28px rgba(255, 230, 0, 0.25);">
                {{ project.name }}
              </p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 lg:flex lg:flex-col lg:justify-between lg:gap-6">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span
                v-if="project.featured"
                class="inline-flex items-center gap-1.5 border border-[rgba(255,230,0,0.55)] bg-[rgba(255,230,0,0.08)] px-2 py-0.5 font-['JetBrains_Mono'] text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]"
                style="box-shadow: 0 0 12px rgba(255, 230, 0, 0.2);"
              >
                &#9733; Featured
              </span>
              <p class="muted-meta">{{ project.role }}</p>
            </div>

            <h3 class="text-[1.8rem] font-bold uppercase leading-[1.05] text-[var(--color-text)] sm:text-[2.1rem]" style="font-family: var(--font-ui); letter-spacing: 0.02em;">
              {{ project.name }}
            </h3>

            <p class="text-[0.92rem] leading-7 text-[var(--color-text-muted)]">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span v-for="tech in project.stack" :key="tech" class="chip">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="space-y-3 pt-4">
            <div class="soft-divider" />
            <div class="flex flex-wrap gap-2">
              <template v-for="link in project.links" :key="`${project.name}-${link.label}`">
                <a
                  v-if="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noreferrer"
                  class="link-chip"
                >
                  {{ link.label }}
                </a>
                <span
                  v-else
                  class="link-chip"
                  aria-disabled="true"
                  role="status"
                >
                  {{ link.label }} &middot; NDA
                </span>
              </template>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
