<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{ error: NuxtError }>();

const handleHome = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="relative min-h-[100dvh] overflow-x-clip text-[var(--text)]">
    <div class="page-shell mx-auto flex w-full max-w-[1120px] flex-col items-start justify-center gap-8 px-5 py-24 sm:px-8 lg:px-10">
      <section class="section-shell cyber-bg w-full space-y-7 p-7 sm:p-12">
        <span class="eyebrow">ERROR // {{ error?.statusCode ?? 404 }}</span>
        <h1 class="section-title max-w-2xl">
          {{ error?.statusCode === 404 ? "Page not found." : "System fault." }}
        </h1>
        <p class="eyebrow-muted">
          {{ error?.statusCode === 404 ? "&gt; the link may be old, mistyped, or moved." : "&gt; an unexpected error interrupted the request." }}
        </p>
        <p class="section-intro">
          {{ error?.message || "Please return to the homepage and try again. If you arrived here from a link on this site, the path may have changed." }}
        </p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <button type="button" class="btn btn-primary" @click="handleHome">Back to home</button>
          <a href="#contact" class="btn btn-secondary" @click="handleHome">Get in touch</a>
        </div>
      </section>
    </div>
  </div>
</template>
