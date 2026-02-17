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
  <section id="skills" class="mt-16 space-y-6">
    <h2 class="text-2xl font-bold font-['Orbitron'] md:text-3xl">
      <span class="text-[#ff6b00]">></span> Skills <span class="text-[#ff6b00]">&</span> Technologies
    </h2>
    <p class="max-w-3xl text-[#888888] font-['Share_Tech_Mono']">
      > A practical frontend toolkit for building robust web apps, full-stack services, and
      blockchain-integrated products.
    </p>
    <div class="flex flex-wrap gap-3">
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-none border border-[#ff6b00]/50 bg-[#1a1a1a] px-4 py-2 text-sm font-['Share_Tech_Mono'] text-[#e0e0e0] hover:border-[#ff6b00] hover:text-[#ff6b00] hover:shadow-[0_0_10px_#ff6b00] transition"
      >
        [{{ skill }}]
      </span>
    </div>
  </section>
</template>
