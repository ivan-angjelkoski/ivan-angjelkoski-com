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
      <span class="editorial-label">Featured Work</span>
      <h2 class="section-heading max-w-3xl">Selected projects, presented as crafted case-study moments.</h2>
      <p class="section-intro">
        Each project balances functional clarity with visual polish, translating complex product
        requirements into interfaces that feel natural, reliable, and intentionally designed.
      </p>
    </div>

    <div class="space-y-10 sm:space-y-14">
      <article
        v-for="(project, index) in projects"
        :key="project.name"
        class="project-shell projects-animate grid gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-8"
        :class="index % 2 === 1 ? 'lg:[&>.project-media]:order-2' : ''"
      >
        <div class="project-media lg:col-span-7">
          <div class="media-frame h-56 p-5 sm:h-72">
            <div class="flex h-full flex-col justify-between rounded-[0.85rem] border border-[var(--border-strong)] bg-[rgba(0,0,0,0.35)] p-5 backdrop-blur-sm">
              <p class="muted-meta tabular">Case {{ String(index + 1).padStart(2, "0") }}</p>
              <p class="font-['Cormorant_Garamond'] text-3xl leading-[1.05] tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
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
                class="font-['Cormorant_Garamond'] text-[0.95rem] italic text-[var(--accent-strong)]"
              >
                &#9733; Featured
              </span>
              <p class="muted-meta">{{ project.role }}</p>
            </div>

            <h3 class="font-['Cormorant_Garamond'] text-[1.95rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text)] sm:text-[2.2rem]">
              {{ project.name }}
            </h3>

            <p class="text-[0.95rem] leading-7 text-[var(--text-muted)]">
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
                  {{ link.label }} &middot; On request
                </span>
              </template>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
