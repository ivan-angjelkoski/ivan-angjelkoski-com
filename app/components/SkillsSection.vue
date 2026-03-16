<script setup lang="ts">
const skills = [
  "Vue",
  "Nuxt",
  "React",
  "Next.js",
  "TypeScript",
  "Web3",
  "Cosmos",
  "Node/Bun",
  "Hono",
];
</script>

<template>
  <section id="skills" class="mt-16 space-y-6 skills-animate">
    <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl text-[#1a1a1a] dark:text-[#e5e5e5]">
      <span class="text-[#0077cc]">></span> Skills <span class="text-[#0077cc]">&</span> Technologies
    </h2>
    <p class="max-w-3xl text-[#555555] dark:text-[#999999] font-['Share_Tech_Mono']">
      > A practical frontend toolkit for building robust web apps, full-stack services, and
      blockchain-integrated products.
    </p>
    <div class="flex flex-wrap gap-3">
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-none border border-[#0077cc]/50 bg-[#f5f5f5] dark:bg-[#1a1a1a] px-4 py-2 text-sm font-['Share_Tech_Mono'] text-[#1a1a1a] dark:text-[#e5e5e5] hover:border-[#0077cc] hover:text-[#0077cc] hover:shadow-[0_0_10px_#0077cc] transition"
      >
        [{{ skill }}]
      </span>
    </div>
  </section>
</template>
