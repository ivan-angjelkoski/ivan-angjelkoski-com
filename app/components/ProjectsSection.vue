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
  <section id="projects" class="projects-animate space-y-8">
    <div class="space-y-4">
      <span class="editorial-label">Featured Work</span>
      <h2 class="section-heading">Selected projects presented as crafted case-study moments.</h2>
      <p class="section-intro">
        Each project balances functional clarity with visual polish, translating complex product
        requirements into interfaces that feel natural, reliable, and intentionally designed.
      </p>
    </div>

    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="(project, index) in projects"
        :key="project.name"
        class="project-shell projects-animate p-5"
      >
        <div class="media-frame h-44 p-4">
          <div class="flex h-full flex-col justify-between rounded-[0.75rem] border border-[rgba(140,111,90,0.2)] bg-[rgba(255,253,252,0.48)] p-4">
            <p class="muted-meta">Case {{ String(index + 1).padStart(2, '0') }}</p>
            <p class="font-['Cormorant_Garamond'] text-2xl leading-tight text-[var(--text)]">{{ project.name }}</p>
          </div>
        </div>

        <div class="mt-5 space-y-4">
          <div class="flex items-center justify-between gap-3">
            <h3 class="font-['Cormorant_Garamond'] text-[1.85rem] font-semibold leading-none text-[var(--text)]">
              {{ project.name }}
            </h3>
            <span
              v-if="project.featured"
              class="rounded-full border border-[color:color-mix(in_srgb,var(--accent-strong)_45%,transparent)] bg-[color:color-mix(in_srgb,var(--accent)_42%,white)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]"
            >
              Featured
            </span>
          </div>

          <p class="text-sm uppercase tracking-[0.13em] text-[var(--text-muted)]">{{ project.role }}</p>

          <p class="text-[0.95rem] leading-7 text-[var(--text-muted)]">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="chip"
            >
              {{ tech }}
            </span>
          </div>

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
                {{ link.label }} · On request
              </span>
            </template>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
