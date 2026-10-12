<script setup lang="ts">
type SkillGroup = {
  index: string;
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    index: "01",
    category: "Frontend",
    items: ["Vue", "Nuxt", "React", "Next.js", "TypeScript"],
  },
  {
    index: "02",
    category: "Backend",
    items: ["Node.js", "Bun", "Hono", "REST APIs"],
  },
  {
    index: "03",
    category: "Design / UI",
    items: ["Design systems", "Component architecture", "Interaction polish"],
  },
  {
    index: "04",
    category: "Tooling",
    items: ["Tailwind CSS", "Storybook", "ESLint", "GitHub Actions"],
  },
  {
    index: "05",
    category: "Performance / A11y",
    items: ["Core Web Vitals", "A11y-first markup", "Progressive enhancement"],
  },
  {
    index: "06",
    category: "Deployment",
    items: ["Static deployment", "CI/CD pipelines", "Environment strategy"],
  },
];
</script>

<template>
  <section id="skills" class="skills-animate space-y-10">
    <div class="space-y-4">
      <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span class="section-tag">// SECTION_02</span>
        <span class="hud-label">[MOD.LIST]</span>
      </div>
      <h2 class="section-heading flicker max-w-3xl">Capabilities compiled into operational modules.</h2>
      <p class="section-intro">
        A curated toolkit spanning interface architecture, implementation quality, and
        maintainable delivery &mdash; combining engineering rigor with design sensitivity.
      </p>
    </div>

    <div class="panel panel-notch overflow-hidden">
      <ul role="list" class="divide-y divide-[var(--color-border)]">
        <li
          v-for="group in skillGroups"
          :key="group.category"
          class="skills-animate group relative grid gap-3 border-l-2 border-l-transparent px-6 py-5 transition-[background-color,border-color,box-shadow] duration-150 hover:border-l-[var(--color-accent)] hover:bg-[rgba(255,230,0,0.03)] hover:shadow-[inset_24px_0_36px_-28px_rgba(255,230,0,0.35)] sm:grid-cols-[minmax(13rem,0.4fr)_1fr] sm:items-center sm:gap-8 sm:px-8 sm:py-6"
        >
          <div class="flex items-baseline gap-3">
            <span class="font-['JetBrains_Mono'] text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--color-accent)]">
              MOD_{{ group.index }}
            </span>
            <h3 class="text-[1.35rem] font-bold uppercase leading-tight text-[var(--color-text)]" style="font-family: var(--font-ui); letter-spacing: 0.03em;">
              {{ group.category }}
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in group.items" :key="item" class="chip">
              {{ item }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
