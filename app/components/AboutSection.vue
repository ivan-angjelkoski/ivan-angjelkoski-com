<template>
  <section
    id="about"
    class="grid items-center gap-10 rounded-none border border-[#0077cc]/40 bg-[#ffffff] p-8 md:grid-cols-[1.2fr_1fr] md:p-12 relative about-animate"
  >
    <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#0077cc]" />
    <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#0077cc]" />
    <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#0077cc]" />
    <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#0077cc]" />
    
    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-none border border-[#0077cc] bg-[#0077cc]/10 px-4 py-1.5 text-xs font-medium font-['Orbitron'] uppercase tracking-wider text-[#0077cc] flicker">
          > Available for Projects
        </span>
        <span class="rounded-none border border-[#cccccc] bg-[#ebebeb] px-4 py-1.5 text-xs font-medium font-['Orbitron'] uppercase tracking-wider text-[#555555]">
          Frontend Developer
        </span>
      </div>
      <h1 class="text-4xl font-bold font-['Orbitron'] leading-tight text-[#1a1a1a] md:text-5xl">
        <span class="text-[#0077cc] cyber-glow">WEB</span>DEV<span class="text-[#0077cc]">_</span>
      </h1>
      <p class="max-w-2xl text-lg leading-relaxed text-[#555555] font-['Share_Tech_Mono']">
        > I am a Frontend Developer at Injective Labs, focused on building polished,
        high-performance product experiences for modern web and Web3 users.<br/><br/>
        > 3 years shipping frontend features for crypto-native products<br/>
        > Based in North Macedonia
      </p>
      <div class="flex flex-wrap gap-3">
        <a
          href="#projects"
          class="rounded-none border border-[#0077cc] bg-[#0077cc] px-6 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#ffffff] transition hover:bg-[#0099e6] hover:shadow-[0_0_20px_#0077cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]"
        >
          VIEW_PROJECTS
        </a>
        <a
          href="#contact"
          class="rounded-none border border-[#0077cc]/50 bg-transparent px-6 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#0077cc] transition hover:bg-[#0077cc]/10 hover:shadow-[0_0_10px_#0077cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077cc]"
        >
          GET_IN_TOUCH
        </a>
      </div>
    </div>

    <div class="relative mx-auto w-full max-w-sm rounded-none border border-[#0077cc]/40 bg-[#f5f5f5] p-6">
      <div class="flex items-center justify-between text-xs font-['Orbitron'] uppercase tracking-wider text-[#555555]">
        <span>> Quick Profile</span>
        <span class="text-[#0077cc]">Details</span>
      </div>
      <div class="mt-6 space-y-3 text-sm font-['Share_Tech_Mono'] text-[#555555]">
        <p><strong class="text-[#0077cc]">Name:</strong> Ivan Angjelkoski</p>
        <p><strong class="text-[#0077cc]">Location:</strong> North Macedonia</p>
        <p><strong class="text-[#0077cc]">Experience:</strong> 3+ Years</p>
        <p><strong class="text-[#0077cc]">Role:</strong> Frontend Developer</p>
      </div>
      <div class="mt-6 rounded-none border border-[#0077cc]/30 bg-[#ffffff] p-4 text-xs font-['Share_Tech_Mono'] text-[#555555]">
        <p class="font-['Orbitron'] font-semibold text-[#0077cc] mb-2">> Core Technologies</p>
        <p class="ml-4">- React / Next.js</p>
        <p class="ml-4">- Vue / Nuxt</p>
        <p class="ml-4">- TypeScript</p>
        <p class="ml-4">- Web3 / Cosmos</p>
      </div>
      <div class="mt-6 flex items-center gap-4">
        <div class="h-16 w-16 overflow-hidden rounded-none border border-[#0077cc]/30 bg-[#ebebeb]">
          <img
            src="/ivan_angjelkoski.jpeg"
            alt="Portrait of Ivan Angjelkoski"
            class="h-full w-full object-cover object-top grayscale hover:grayscale-0 transition"
          >
        </div>
        <div>
          <p class="text-sm font-['Orbitron'] font-semibold text-[#1a1a1a]">Ivan Angjelkoski</p>
          <p class="text-xs font-['Share_Tech_Mono'] text-[#555555]">Frontend Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>
