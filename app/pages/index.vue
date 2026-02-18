<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline()

  tl.from('#about .text-4xl', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
  })
  .from('#about .space-y-6 > *', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
  }, '-=0.4')
  .from('#about .rounded-none', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.6')

  gsap.utils.toArray<HTMLElement>('#skills .rounded-none.border').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.08,
      ease: 'power2.out',
    })
  })

  gsap.utils.toArray<HTMLElement>('#experience article').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
    })
  })

  gsap.utils.toArray<HTMLElement>('#projects .group').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
    })
  })

  gsap.from('#contact', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
  })
})

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
  <div class="relative overflow-hidden bg-[#0a0a0a] text-[#e0e0e0]">
    <div class="pointer-events-none absolute inset-0 tech-grid opacity-50" />

    <div class="relative mx-auto min-h-screen w-full max-w-6xl px-6 pb-24 pt-8 md:px-10 scan-line">
      <AppHeader />

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
