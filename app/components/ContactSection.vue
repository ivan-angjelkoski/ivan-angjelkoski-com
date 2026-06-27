<template>
  <section
    id="contact"
    class="contact-animate relative overflow-hidden border border-[var(--color-accent)] bg-[var(--color-bg-panel)] p-7 text-center sm:p-12"
    style="clip-path: polygon(0 16px, 16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%);"
  >
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,255,0,0.16),transparent_62%)]" />
    <div class="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen" style="background-image: linear-gradient(rgba(245,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,255,0,1) 1px, transparent 1px); background-size: 40px 40px;" />

    <div class="relative mx-auto max-w-3xl space-y-5">
      <p class="eyebrow mx-auto justify-center">// Initialize_Contact</p>
      <h2 class="section-heading">Open to product collaborations &amp; new opportunities.</h2>
      <p class="section-intro mx-auto">
        Hiring for frontend engineering, planning a product redesign, or exploring a
        polished Web3 experience? Let&rsquo;s connect and discuss how I can contribute.
      </p>

      <div class="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap">
        <!-- TODO: replace with real contact email -->
        <a href="mailto:ivan@example.com" class="btn btn-primary">
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true"><path d="M3 7l9 6 9-6" /><rect x="3" y="5" width="18" height="14" /></svg>
          Email
        </a>
        <!-- TODO: replace with real GitHub profile URL -->
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          class="btn btn-secondary"
        >
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg>
          GitHub
        </a>
        <!-- TODO: replace with real LinkedIn profile URL -->
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          class="btn btn-secondary"
        >
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22H7.62V8z" /></svg>
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
