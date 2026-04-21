<template>
  <section
    id="about"
    class="section-shell grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12 lg:p-12"
  >
    <div class="space-y-7">
      <span class="editorial-label">Frontend Engineer</span>

      <h1 class="section-title max-w-3xl">
        Design-forward interfaces built with precision, clarity, and modern web craft.
      </h1>

      <p class="eyebrow-italic max-w-2xl">
        a portfolio in progress &mdash; written, shipped, and refined from Skopje.
      </p>

      <p class="section-intro">
        I am Ivan Angjelkoski, a frontend developer at Injective Labs focused on premium product
        experiences for web and Web3. For the past three years, I have shipped high-impact
        features where interaction quality, reliability, and performance all matter.
      </p>

      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Start a Conversation</a>
      </div>

      <div class="grid gap-4 pt-2 sm:grid-cols-3">
        <article class="premium-card p-4">
          <p class="muted-meta">Experience</p>
          <p class="mt-2 font-['Cormorant_Garamond'] text-3xl font-semibold tabular text-[var(--text)]">3+</p>
          <p class="mt-1 text-sm text-[var(--text-muted)]">Years delivering production UI</p>
        </article>
        <article class="premium-card p-4">
          <p class="muted-meta">Specialty</p>
          <p class="mt-2 font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--text)]">Frontend Systems</p>
          <p class="mt-1 text-sm text-[var(--text-muted)]">Architecture and polish</p>
        </article>
        <article class="premium-card p-4">
          <p class="muted-meta">Based In</p>
          <p class="mt-2 font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--text)]">North Macedonia</p>
          <p class="mt-1 text-sm text-[var(--text-muted)]">Collaborating globally</p>
        </article>
      </div>
    </div>

    <aside class="premium-card flex flex-col gap-5 p-6 sm:p-7">
      <div class="media-frame h-[26rem] w-full overflow-hidden sm:h-[28rem]">
        <img
          src="/ivan_angjelkoski.jpeg"
          alt="Portrait of Ivan Angjelkoski"
          class="h-full w-full object-cover object-top"
        >
      </div>

      <div class="space-y-4">
        <div>
          <p class="muted-meta">Profile</p>
          <h2 class="mt-1 font-['Cormorant_Garamond'] text-3xl font-semibold text-[var(--text)]">Ivan Angjelkoski</h2>
          <p class="mt-1 text-sm text-[var(--text-muted)]">Frontend Developer at Injective Labs</p>
        </div>

        <div class="soft-divider" />

        <dl class="space-y-3 text-sm text-[var(--text-muted)]">
          <div class="flex items-center justify-between gap-3">
            <dt class="muted-meta">Focus</dt>
            <dd>Product-grade web and Web3 UX</dd>
          </div>
          <div class="flex items-center justify-between gap-3">
            <dt class="muted-meta">Core Stack</dt>
            <dd>Vue, Nuxt, React, TypeScript</dd>
          </div>
          <div class="flex items-center justify-between gap-3">
            <dt class="muted-meta">Collaboration</dt>
            <dd>Product, design, and protocol teams</dd>
          </div>
        </dl>
      </div>
    </aside>
  </section>
</template>
