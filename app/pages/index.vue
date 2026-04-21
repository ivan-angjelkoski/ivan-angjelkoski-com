<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    return;
  }

  const reveal = (selector: string, trigger: string, opts: { stagger?: number; start?: string; duration?: number } = {}) => {
    const els = gsap.utils.toArray<HTMLElement>(selector);
    if (!els.length) return;
    gsap.set(els, { opacity: 0, y: 24 });
    gsap.to(els, {
      scrollTrigger: {
        trigger,
        start: opts.start ?? "top 84%",
        once: true,
      },
      y: 0,
      opacity: 1,
      duration: opts.duration ?? 0.8,
      ease: "power2.out",
      stagger: opts.stagger ?? 0,
    });
  };

  reveal(".skills-animate", "#skills", { stagger: 0.12 });
  reveal(".experience-animate", "#experience", { stagger: 0.12 });
  reveal(".projects-animate", "#projects", { stagger: 0.1 });
  reveal(".contact-animate", "#contact", { start: "top 86%", duration: 0.75 });
  reveal(".footer-animate", "footer", { start: "top 92%", duration: 0.7 });
});

useSeoMeta({
  title: "Ivan Angjelkoski — Frontend Developer",
  description:
    "Frontend Developer at Injective Labs crafting polished, high-performance web and Web3 interfaces with Vue, Nuxt, React, and TypeScript.",
  ogTitle: "Ivan Angjelkoski — Frontend Developer",
  ogDescription:
    "A premium editorial portfolio presenting frontend craftsmanship across modern web and Web3 products.",
  ogImage: "/ivan_angjelkoski.jpeg",
  twitterCard: "summary_large_image",
  twitterImage: "/ivan_angjelkoski.jpeg",
});
</script>

<template>
  <div id="home" class="relative min-h-[100dvh] overflow-x-clip text-[var(--text)]">
    <a href="#main" class="skip-link">Skip to content</a>
    <div class="page-shell mx-auto w-full max-w-[1120px] px-5 pb-20 pt-6 sm:px-8 lg:px-10">
      <AppHeader />

      <main id="main" class="mt-8 space-y-20 pb-12 sm:space-y-24">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
