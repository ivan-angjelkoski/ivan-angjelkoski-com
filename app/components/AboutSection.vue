<template>
  <section
    id="about"
    class="section-shell cyber-bg grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12 lg:p-12"
  >
    <div class="relative z-[1] space-y-7">
      <p class="eyebrow">System Online // 2026 Interface</p>

      <h1 class="section-title max-w-3xl">
        Frontend<br>Engineer<br>
        <span class="text-[var(--color-accent)]">[ 0x01 ]</span>
      </h1>

      <p class="section-intro">
        I am Ivan Angjelkoski &mdash; a frontend developer at Injective Labs shipping
        premium product experiences for web and Web3. For the past three years I have
        built high-impact interfaces where interaction quality, reliability, and
        performance all matter.
      </p>

      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Start_Conversation</a>
      </div>

      <div class="grid grid-cols-1 gap-0 border border-[var(--color-border)] bg-[var(--color-bg-inset)] sm:grid-cols-3">
        <article class="stat-cell">
          <p class="muted-meta">// Experience</p>
          <p class="mt-3 font-['Space_Grotesk'] text-4xl font-bold tabular text-[var(--color-accent)]">03+</p>
          <p class="mt-1 font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Years in prod</p>
        </article>
        <article class="stat-cell">
          <p class="muted-meta">// Specialty</p>
          <p class="mt-3 font-['Space_Grotesk'] text-xl font-bold leading-tight text-[var(--color-text)]">Frontend<br>Systems</p>
          <p class="mt-2 font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Arch &amp; polish</p>
        </article>
        <article class="stat-cell">
          <p class="muted-meta">// Locale</p>
          <p class="mt-3 font-['Space_Grotesk'] text-xl font-bold leading-tight text-[var(--color-text)]">Skopje<br>MK</p>
          <p class="mt-2 font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Global remote</p>
        </article>
      </div>
    </div>

    <aside class="relative z-[1] flex flex-col gap-5 border border-[var(--color-border)] bg-[var(--color-bg-panel)] p-6 sm:p-7">
      <div class="media-frame h-[22rem] w-full overflow-hidden sm:h-[24rem]">
        <img
          src="/ivan_angjelkoski.jpeg"
          alt="Portrait of Ivan Angjelkoski"
          class="h-full w-full object-cover object-top grayscale-[35%] contrast-[1.1]"
        >
      </div>

      <div class="space-y-4">
        <div>
          <p class="muted-meta">// Profile.dat</p>
          <h2 class="mt-2 font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tight text-[var(--color-text)]">Ivan Angjelkoski</h2>
          <p class="mt-1 font-['JetBrains_Mono'] text-xs uppercase tracking-[0.12em] text-[var(--color-accent)]">Frontend Dev @ Injective Labs</p>
        </div>

        <div class="soft-divider" />

        <dl class="space-y-2.5 font-['JetBrains_Mono'] text-[0.78rem] text-[var(--color-text-muted)]">
          <div class="flex items-center justify-between gap-3">
            <dt class="text-[var(--color-text-subtle)]">focus</dt>
            <dd class="text-right">Product-grade web &amp; Web3 UX</dd>
          </div>
          <div class="flex items-center justify-between gap-3">
            <dt class="text-[var(--color-text-subtle)]">stack</dt>
            <dd class="text-right">Vue &middot; Nuxt &middot; React &middot; TS</dd>
          </div>
          <div class="flex items-center justify-between gap-3">
            <dt class="text-[var(--color-text-subtle)]">team</dt>
            <dd class="text-right">Product / design / protocol</dd>
          </div>
        </dl>
      </div>
    </aside>
  </section>
</template>
