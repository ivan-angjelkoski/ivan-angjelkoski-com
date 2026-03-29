<template>
  <footer class="footer-animate mt-20 space-y-6 pb-4">
    <div class="soft-divider" />

    <div class="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
      <div>
        <p class="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--text)]">Ivan Angjelkoski</p>
        <p class="text-sm text-[var(--text-muted)]">Frontend engineer crafting refined product experiences.</p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
        <a href="#home" class="nav-link !py-0">Home</a>
        <a href="#projects" class="nav-link !py-0">Projects</a>
        <a href="#contact" class="nav-link !py-0">Contact</a>
      </div>
    </div>

    <p class="text-center text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
      © 2026 · Built with Nuxt and TypeScript
    </p>
  </footer>
</template>
