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
  <section id="projects" class="mt-16 space-y-6">
    <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl">
      <span class="text-[#ff6b00]">></span> Selected Projects
    </h2>
    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="project in highlights"
        :key="project.name"
        class="rounded-none border border-[#ff6b00]/30 bg-[#111111] p-6 transition duration-300 hover:border-[#ff6b00] hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] group"
      >
        <h3 class="text-lg font-semibold font-['Orbitron'] text-white group-hover:text-[#ff6b00] transition">
          {{ project.name }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-[#888888] font-['Share_Tech_Mono']">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="rounded-none border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-1 text-xs font-['Share_Tech_Mono'] text-[#888888] group-hover:border-[#ff6b00]/50 group-hover:text-[#ff6b00] transition"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
