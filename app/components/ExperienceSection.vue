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
    timeline: "2022 — Present · 3 yrs",
    summary:
      "Leading frontend delivery for trading and DeFi product surfaces where usability and execution confidence are critical.",
    impacts: [
      "Built high-fidelity interfaces for market workflows, account operations, and transaction-heavy states.",
      "Partnered across product, design, and blockchain teams to simplify complex transaction journeys.",
      "Improved maintainability with reusable component patterns, typed contracts, and performance-first implementation.",
    ],
    technologies: ["Nuxt", "Vue", "TypeScript", "Web3", "Cosmos"],
  },
];
</script>

<template>
  <section id="experience" class="experience-animate space-y-8">
    <div class="space-y-4">
      <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span class="section-tag">// SECTION_03</span>
        <span class="hud-label">[LOG.RECORD]</span>
      </div>
      <h2 class="section-heading flicker">Product impact shaped through frontend execution.</h2>
    </div>

    <div class="space-y-6">
      <article
        v-for="item in experience"
        :key="`${item.company}-${item.role}`"
        class="premium-card experience-animate chamfer-md relative overflow-hidden p-6 sm:p-8"
      >
        <div
          class="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-accent)]"
          style="box-shadow: 0 0 16px rgba(255, 230, 0, 0.55);"
        />

        <div class="ml-3 space-y-6 sm:ml-5">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p class="step-number">// {{ item.company }}</p>
              <h3 class="mt-2 text-2xl font-bold uppercase text-[var(--color-text)] sm:text-3xl" style="font-family: var(--font-ui); letter-spacing: 0.03em;">
                {{ item.role }}
              </h3>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="inline-flex items-center gap-1.5 border border-[rgba(0,240,255,0.4)] bg-[rgba(0,240,255,0.06)] px-2.5 py-1 font-['JetBrains_Mono'] text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-cyan)]"
              >
                <span class="status-dot" aria-hidden="true" />
                Active
              </span>
              <p class="inline-flex border border-[var(--color-border-strong)] bg-[var(--color-bg-inset)] px-3 py-1 font-['JetBrains_Mono'] text-[0.7rem] font-medium uppercase tracking-[0.12em] tabular text-[var(--color-accent)]">
                {{ item.timeline }}
              </p>
            </div>
          </div>

          <p class="font-['JetBrains_Mono'] text-[0.92rem] leading-7 text-[var(--color-text-muted)]">
            {{ item.summary }}
          </p>

          <ul class="space-y-3 text-[0.92rem] leading-7 text-[var(--color-text-muted)]">
            <li
              v-for="impact in item.impacts"
              :key="impact"
              class="relative pl-6"
            >
              <span
                class="absolute left-0 top-[0.6rem] h-[0.6rem] w-[0.6rem] border border-[var(--color-amber)] bg-[rgba(255,85,0,0.15)]"
                style="transform: rotate(45deg); box-shadow: 0 0 8px rgba(255, 85, 0, 0.4);"
              />
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
