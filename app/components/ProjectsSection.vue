<script setup lang="ts">
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
</script>

<template>
  <section id="projects" class="mt-16 space-y-6 projects-animate">
    <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl text-[#1a1a1a]">
      <span class="text-[#0077cc]">></span> Selected Projects
    </h2>
    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="project in highlights"
        :key="project.name"
        class="rounded-none border border-[#0077cc]/30 bg-[#ffffff] p-6 transition duration-300 hover:border-[#0077cc] hover:shadow-[0_0_20px_rgba(0,119,204,0.2)] group"
      >
        <h3 class="text-lg font-semibold font-['Orbitron'] text-[#1a1a1a] group-hover:text-[#0077cc] transition">
          {{ project.name }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-[#555555] font-['Share_Tech_Mono']">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="rounded-none border border-[#cccccc] bg-[#f5f5f5] px-3 py-1 text-xs font-['Share_Tech_Mono'] text-[#555555] group-hover:border-[#0077cc]/50 group-hover:text-[#0077cc] transition"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
