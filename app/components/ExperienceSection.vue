<script setup lang="ts">
type ExperienceEntry = {
  company: string;
  role: string;
  timeline: string;
  summary: string;
  impacts: string[];
  technologies: string[];
};

const experience: ExperienceEntry[] = [
  {
    company: "Injective Labs",
    role: "Frontend Developer",
    timeline: "2022 — Present · 3 years",
    summary:
      "Leading frontend delivery for trading and DeFi product surfaces where usability and execution confidence are critical.",
    impacts: [
      "Built high-fidelity interfaces for market workflows, account operations, and transaction-heavy states.",
      "Partnered across product, design, and blockchain teams to simplify complex transaction journeys.",
      "Improved maintainability with reusable component patterns, typed contracts, and performance-first implementation.",
    ],
    technologies: ["Nuxt", "Vue", "TypeScript", "Web3", "Cosmos ecosystem"],
  },
];
</script>

<template>
  <section id="experience" class="experience-animate space-y-8">
    <div class="space-y-4">
      <span class="editorial-label">Experience</span>
      <h2 class="section-heading">Product impact shaped through thoughtful frontend execution.</h2>
    </div>

    <div class="space-y-6">
      <article
        v-for="item in experience"
        :key="`${item.company}-${item.role}`"
        class="premium-card experience-animate relative overflow-hidden p-6 sm:p-8"
      >
        <div class="absolute left-0 top-0 h-full w-1 bg-[color:color-mix(in_srgb,var(--accent-strong)_55%,transparent)]" />

        <div class="ml-2 space-y-6 sm:ml-4">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p class="muted-meta">{{ item.company }}</p>
              <h3 class="mt-1 font-['Cormorant_Garamond'] text-3xl font-semibold text-[var(--text)]">
                {{ item.role }}
              </h3>
            </div>
            <p class="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] tabular text-[var(--text-muted)]">
              {{ item.timeline }}
            </p>
          </div>

          <p class="text-[0.98rem] leading-8 text-[var(--text-muted)]">
            {{ item.summary }}
          </p>

          <ul class="space-y-3 text-[0.95rem] leading-7 text-[var(--text-muted)]">
            <li
              v-for="impact in item.impacts"
              :key="impact"
              class="relative pl-5"
            >
              <span class="absolute left-0 top-[0.75rem] h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
              {{ impact }}
            </li>
          </ul>

          <div class="soft-divider" />

          <div class="flex flex-wrap gap-2">
            <span
              v-for="technology in item.technologies"
              :key="technology"
              class="chip"
            >
              {{ technology }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
