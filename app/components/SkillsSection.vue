<script setup lang="ts">
type SkillGroup = {
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Vue", "Nuxt", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Bun", "Hono", "REST APIs"],
  },
  {
    category: "Design / UI",
    items: ["Design systems", "Component architecture", "Interaction polish"],
  },
  {
    category: "Tooling",
    items: ["Tailwind CSS", "Storybook", "ESLint", "GitHub Actions"],
  },
  {
    category: "Performance / Accessibility",
    items: ["Core Web Vitals", "A11y-first markup", "Progressive enhancement"],
  },
  {
    category: "Deployment",
    items: ["Static deployment", "CI/CD pipelines", "Environment strategy"],
  },
];
</script>

<template>
  <section id="skills" class="skills-animate space-y-10">
    <div class="space-y-4">
      <span class="editorial-label">Capabilities</span>
      <h2 class="section-heading max-w-3xl">A curated toolkit for building polished digital products.</h2>
      <p class="section-intro">
        My work spans interface architecture, implementation quality, and maintainable delivery.
        I combine engineering rigor with design sensitivity to produce reliable product experiences.
      </p>
    </div>

    <div class="section-shell overflow-hidden">
      <ul role="list" class="divide-y divide-[var(--border)]">
        <li
          v-for="group in skillGroups"
          :key="group.category"
          class="skills-animate grid gap-3 px-6 py-5 sm:grid-cols-[minmax(11rem,0.45fr)_1fr] sm:items-baseline sm:gap-8 sm:px-8 sm:py-6"
        >
          <h3 class="font-['Cormorant_Garamond'] text-[1.55rem] font-semibold leading-tight text-[var(--text)]">
            {{ group.category }}
          </h3>
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
