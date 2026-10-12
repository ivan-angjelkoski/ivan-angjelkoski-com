<template>
  <footer class="footer-animate panel panel-notch mt-20 space-y-6 p-6 pb-4 sm:p-8 sm:pb-4">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <p class="eyebrow-muted">
        &gt; currently building DeFi tooling @ Injective Labs // based in Skopje, MK
      </p>
      <span class="hud-label tabular">41.9981&deg;N 21.4254&deg;E // [SYS.VER_2.04]</span>
    </div>

    <div class="soft-divider" />

    <div class="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
      <div class="flex items-center gap-4">
        <span
          class="inline-flex h-9 w-9 items-center justify-center bg-[var(--color-accent)] font-['JetBrains_Mono'] text-[0.7rem] font-bold text-[#060606]"
          style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%); filter: drop-shadow(0 0 8px rgba(255, 230, 0, 0.4));"
          aria-hidden="true"
        >
          IA
        </span>
        <div>
          <p class="text-lg font-bold uppercase tracking-[0.04em] text-[var(--color-text)]" style="font-family: var(--font-ui);">Ivan Angjelkoski</p>
          <p class="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">// Frontend engineer crafting refined product experiences</p>
        </div>
      </div>

      <nav class="flex flex-wrap items-center gap-4 font-['JetBrains_Mono'] text-[0.7rem] font-medium uppercase tracking-[0.14em]" aria-label="Footer navigation">
        <a href="#home" class="nav-link !py-0">Home</a>
        <a href="#projects" class="nav-link !py-0">Projects</a>
        <a href="#contact" class="nav-link !py-0">Contact</a>
      </nav>
    </div>

    <div class="flex flex-col items-center justify-between gap-4 border-t border-dashed border-[var(--color-border-strong)] pt-4 sm:flex-row">
      <span class="barcode" style="color: rgba(255, 230, 0, 0.45);" aria-hidden="true" />
      <p class="tabular font-['JetBrains_Mono'] text-center text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
        &copy; 2026 // BUILT WITH NUXT + TS
      </p>
      <span class="status-badge">
        <span class="status-dot" aria-hidden="true" />
        Status: Online
      </span>
    </div>
  </footer>
</template>
