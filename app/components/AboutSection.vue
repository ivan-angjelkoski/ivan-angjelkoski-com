<template>
  <section
    id="about"
    class="grid items-center gap-10 rounded-none border border-[#ff6b00]/40 bg-[#111111] p-8 md:grid-cols-[1.2fr_1fr] md:p-12 relative about-animate"
  >
    <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff6b00]" />
    <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff6b00]" />
    <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff6b00]" />
    <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff6b00]" />
    
    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-none border border-[#ff6b00] bg-[#ff6b00]/10 px-4 py-1.5 text-xs font-medium font-['Orbitron'] uppercase tracking-wider text-[#ff6b00] flicker">
          > Available for Projects
        </span>
        <span class="rounded-none border border-[#3a3a3a] bg-[#1a1a1a] px-4 py-1.5 text-xs font-medium font-['Orbitron'] uppercase tracking-wider text-[#888888]">
          Frontend Developer
        </span>
      </div>
      <h1 class="text-4xl font-bold font-['Orbitron'] leading-tight text-white md:text-5xl">
        <span class="text-[#ff6b00] cyber-glow">WEB</span>DEV<span class="text-[#ff6b00]">_</span>
      </h1>
      <p class="max-w-2xl text-lg leading-relaxed text-[#888888] font-['Share_Tech_Mono']">
        > I am a Frontend Developer at Injective Labs, focused on building polished,
        high-performance product experiences for modern web and Web3 users.<br/><br/>
        > 3 years shipping frontend features for crypto-native products<br/>
        > Based in North Macedonia
      </p>
      <div class="flex flex-wrap gap-3">
        <a
          href="#projects"
          class="rounded-none border border-[#ff6b00] bg-[#ff6b00] px-6 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#0a0a0a] transition hover:bg-[#ff8c00] hover:shadow-[0_0_20px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
        >
          VIEW_PROJECTS
        </a>
        <a
          href="#contact"
          class="rounded-none border border-[#ff6b00]/50 bg-transparent px-6 py-2.5 text-sm font-semibold font-['Orbitron'] text-[#ff6b00] transition hover:bg-[#ff6b00]/10 hover:shadow-[0_0_10px_#ff6b00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00]"
        >
          GET_IN_TOUCH
        </a>
      </div>
    </div>

    <div class="relative mx-auto w-full max-w-sm rounded-none border border-[#ff6b00]/40 bg-[#1a1a1a] p-6">
      <div class="flex items-center justify-between text-xs font-['Orbitron'] uppercase tracking-wider text-[#888888]">
        <span>> Quick Profile</span>
        <span class="text-[#ff6b00]">Details</span>
      </div>
      <div class="mt-6 space-y-3 text-sm font-['Share_Tech_Mono'] text-[#888888]">
        <p><strong class="text-[#ff6b00]">Name:</strong> Ivan Angjelkoski</p>
        <p><strong class="text-[#ff6b00]">Location:</strong> North Macedonia</p>
        <p><strong class="text-[#ff6b00]">Experience:</strong> 3+ Years</p>
        <p><strong class="text-[#ff6b00]">Role:</strong> Frontend Developer</p>
      </div>
      <div class="mt-6 rounded-none border border-[#ff6b00]/30 bg-[#0a0a0a] p-4 text-xs font-['Share_Tech_Mono'] text-[#888888]">
        <p class="font-['Orbitron'] font-semibold text-[#ff6b00] mb-2">> Core Technologies</p>
        <p class="ml-4">- React / Next.js</p>
        <p class="ml-4">- Vue / Nuxt</p>
        <p class="ml-4">- TypeScript</p>
        <p class="ml-4">- Web3 / Cosmos</p>
      </div>
      <div class="mt-6 flex items-center gap-4">
        <div class="h-16 w-16 overflow-hidden rounded-none border border-[#ff6b00]/30 bg-[#1a1a1a]">
          <img
            src="/ivan_angjelkoski.jpeg"
            alt="Portrait of Ivan Angjelkoski"
            class="h-full w-full object-cover object-top grayscale hover:grayscale-0 transition"
          >
        </div>
        <div>
          <p class="text-sm font-['Orbitron'] font-semibold text-[#e0e0e0]">Ivan Angjelkoski</p>
          <p class="text-xs font-['Share_Tech_Mono'] text-[#888888]">Frontend Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>
