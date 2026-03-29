<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".skills-animate", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 84%",
      once: true,
    },
    y: 24,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.12,
  });

  gsap.from(".experience-animate", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 84%",
      once: true,
    },
    y: 24,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.12,
  });

  gsap.from(".projects-animate", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 84%",
      once: true,
    },
    y: 24,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
  });

  gsap.from(".contact-animate", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 86%",
      once: true,
    },
    y: 24,
    opacity: 0,
    duration: 0.75,
    ease: "power2.out",
  });

  gsap.from(".footer-animate", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 92%",
      once: true,
    },
    y: 16,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });
});

useSeoMeta({
  title: "Ivan Angjelkoski — Frontend Developer",
  description:
    "Frontend Developer at Injective Labs crafting polished, high-performance web and Web3 interfaces with Vue, Nuxt, React, and TypeScript.",
  ogTitle: "Ivan Angjelkoski — Frontend Developer",
  ogDescription:
    "A premium editorial portfolio presenting frontend craftsmanship across modern web and Web3 products.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div id="home" class="relative min-h-screen overflow-x-clip text-[var(--text)]">
    <div class="page-shell mx-auto w-full max-w-[1120px] px-5 pb-20 pt-6 sm:px-8 lg:px-10">
      <AppHeader />

      <main class="mt-8 space-y-20 pb-12 sm:space-y-24">
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
