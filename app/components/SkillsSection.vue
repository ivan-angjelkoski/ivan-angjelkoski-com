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
  <section id="skills" class="skills-animate space-y-8">
    <div class="space-y-4">
      <span class="editorial-label">Capabilities</span>
      <h2 class="section-heading">A curated toolkit for building polished digital products.</h2>
      <p class="section-intro">
        My work spans interface architecture, implementation quality, and maintainable delivery.
        I combine engineering rigor with design sensitivity to produce reliable product experiences.
      </p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="group in skillGroups"
        :key="group.category"
        class="premium-card skills-animate p-5"
      >
        <h3 class="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--text)]">
          {{ group.category }}
        </h3>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="chip"
          >
            {{ item }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
