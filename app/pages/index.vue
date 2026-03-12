<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".header-animate", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
  });

  gsap.from(".about-animate", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
  });

  gsap.from(".skills-animate", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
  });

  gsap.from(".experience-animate", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
  });

  gsap.from(".projects-animate", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
  });

  gsap.from(".contact-animate", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
  });

  gsap.from(".footer-animate", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  });
});

useSeoMeta({
  title: "Ivan Angjelkoski — Frontend Developer",
  description:
    "Frontend Developer at Injective Labs with 3 years of experience building performant web and Web3 products with Vue, Nuxt, React, and TypeScript from North Macedonia.",
  ogTitle: "Ivan Angjelkoski — Frontend Developer",
  ogDescription:
    "Frontend Developer at Injective Labs building modern interfaces for Web2 and Web3 products.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="relative overflow-hidden bg-[#f5f5f5] text-[#1a1a1a]">
    <div class="pointer-events-none absolute inset-0 tech-grid opacity-50" />

    <div
      class="relative mx-auto min-h-screen w-full max-w-6xl px-6 pb-24 pt-8 md:px-10 scan-line"
    >
      <AppHeader v-bind="{ bar: 1 }" />

      <main>
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
