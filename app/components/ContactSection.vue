<script setup lang="ts">
const handle = ref("");
const message = ref("");
const formRef = ref<HTMLFormElement | null>(null);

const transmit = () => {
  const name = handle.value.trim() || "anonymous";
  const body = message.value.trim() || "// empty transmission";
  const subject = encodeURIComponent(`[PORTAL] Transmission from ${name}`);
  const mailBody = encodeURIComponent(`${body}\n\n— ${name} via ivanangjelkoski.com`);
  window.location.href = `mailto:ivan@example.com?subject=${subject}&body=${mailBody}`;
};

const resetTerminal = () => {
  formRef.value?.reset();
  handle.value = "";
  message.value = "";
};
</script>

<template>
  <section
    id="contact"
    class="contact-animate chamfer-lg relative overflow-hidden border border-[rgba(255,230,0,0.35)] bg-[var(--color-bg-panel)]"
    style="filter: drop-shadow(0 0 24px rgba(255, 230, 0, 0.1));"
  >
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,230,0,0.06),transparent_62%)]" />
    <div
      class="pointer-events-none absolute inset-0 opacity-60"
      style="background-image: linear-gradient(rgba(255, 230, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 230, 0, 0.03) 1px, transparent 1px); background-size: 40px 40px;"
    />

    <div class="relative mx-auto grid max-w-5xl gap-10 p-7 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <div class="space-y-5 text-left">
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span class="section-tag">// SECTION_05</span>
          <span class="hud-label">[UPLINK]</span>
        </div>
        <h2 class="section-heading flicker">Open to product collaborations &amp; new opportunities.</h2>
        <p class="section-intro">
          Hiring for frontend engineering, planning a product redesign, or exploring a
          polished Web3 experience? Open a channel and let&rsquo;s discuss how I can contribute.
        </p>

        <p class="font-['JetBrains_Mono'] text-[0.8rem] tracking-[0.06em] text-[var(--color-accent)]">
          &gt; guest@ivan:~$ awaiting input<span class="blink-block ml-1" aria-hidden="true" />
        </p>

        <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
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
            class="btn btn-ghost"
          >
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg>
            GitHub
          </a>
          <!-- TODO: replace with real LinkedIn profile URL -->
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            class="btn btn-ghost"
          >
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22H7.62V8z" /></svg>
            LinkedIn
          </a>
        </div>
      </div>

      <form ref="formRef" class="terminal-window chamfer-md self-start" @submit.prevent="transmit">
        <div class="terminal-bar">
          <span class="flex items-center gap-1.5" aria-hidden="true">
            <span class="h-2 w-2 bg-[var(--color-red)]" style="box-shadow: 0 0 6px rgba(255, 45, 45, 0.7);" />
            <span class="h-2 w-2 bg-[var(--color-amber)]" style="box-shadow: 0 0 6px rgba(255, 85, 0, 0.7);" />
            <span class="h-2 w-2 bg-[var(--color-green)]" style="box-shadow: 0 0 6px rgba(61, 255, 154, 0.7);" />
          </span>
          <span class="tabular">guest@ivan:~/transmit.sh</span>
        </div>

        <div class="space-y-5 p-5 sm:p-6">
          <div class="space-y-2">
            <label for="terminal-handle" class="hud-label block text-[var(--color-accent)]">&gt; handle / name_</label>
            <input
              id="terminal-handle"
              v-model="handle"
              type="text"
              name="handle"
              autocomplete="name"
              class="terminal-input"
              placeholder="enter_your_name"
            >
          </div>

          <div class="space-y-2">
            <label for="terminal-message" class="hud-label block text-[var(--color-accent)]">&gt; message / payload_</label>
            <textarea
              id="terminal-message"
              v-model="message"
              name="message"
              rows="5"
              class="terminal-input resize-none"
              placeholder="describe_the_mission..."
            />
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <button type="submit" class="btn btn-primary flex-1">Transmit_</button>
            <button type="button" class="btn btn-ghost flex-1" @click="resetTerminal">Wipe</button>
          </div>

          <p class="hud-label">// opens your mail client — no data stored on this node</p>
        </div>
      </form>
    </div>
  </section>
</template>
