<script setup lang="ts">
type NavLink = {
  label: string;
  href: `#${string}`;
  index: string;
};

const navLinks: NavLink[] = [
  { index: "01", label: "Home", href: "#home" },
  { index: "02", label: "About", href: "#about" },
  { index: "03", label: "Skills", href: "#skills" },
  { index: "04", label: "Experience", href: "#experience" },
  { index: "05", label: "Projects", href: "#projects" },
  { index: "06", label: "Contact", href: "#contact" },
];

const isMenuOpen = ref(false);
const shouldRestoreFocus = ref(false);
const menuButtonRef = ref<HTMLButtonElement | null>(null);
const mobileMenuRef = ref<HTMLElement | null>(null);
const activeHash = ref<string>("#home");
let scrollObserver: IntersectionObserver | null = null;

const openMenu = () => {
  shouldRestoreFocus.value = true;
  isMenuOpen.value = true;
};

const closeMenu = (restoreFocus = false) => {
  shouldRestoreFocus.value = restoreFocus;
  isMenuOpen.value = false;
};

const onEscape = (event: KeyboardEvent) => {
  if (event.key !== "Escape" || !isMenuOpen.value) {
    return;
  }

  event.preventDefault();
  closeMenu(true);
};

const onResize = () => {
  if (window.innerWidth >= 1024 && isMenuOpen.value) {
    closeMenu(false);
  }
};

const onHashChange = () => {
  if (isMenuOpen.value) {
    closeMenu(false);
  }
};

watch(isMenuOpen, async (open) => {
  document.body.style.overflow = open ? "hidden" : "";

  if (open) {
    await nextTick();
    const firstLink = mobileMenuRef.value?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
    return;
  }

  if (shouldRestoreFocus.value) {
    menuButtonRef.value?.focus();
  }
});

onMounted(() => {
  window.addEventListener("keydown", onEscape);
  window.addEventListener("resize", onResize);
  window.addEventListener("hashchange", onHashChange);

  const sectionIds = navLinks.map((l) => l.href.slice(1));
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  if (sections.length && "IntersectionObserver" in window) {
    scrollObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          activeHash.value = `#${visible.target.id}`;
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => scrollObserver!.observe(s));
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onEscape);
  window.removeEventListener("resize", onResize);
  window.removeEventListener("hashchange", onHashChange);
  document.body.style.overflow = "";
  scrollObserver?.disconnect();
});
</script>

<template>
  <header class="sticky top-3 z-40">
    <div
      class="chamfer-md border border-[rgba(255,230,0,0.22)] bg-[rgba(8,8,10,0.72)] px-4 py-3 backdrop-blur-xl sm:px-6"
      style="filter: drop-shadow(0 0 18px rgba(255, 230, 0, 0.08));"
    >
      <nav class="flex items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#home" class="group inline-flex min-w-0 items-center gap-3">
          <span
            class="inline-flex h-8 w-8 items-center justify-center bg-[var(--color-accent)] font-['JetBrains_Mono'] text-[0.7rem] font-bold text-[#060606]"
            style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%); filter: drop-shadow(0 0 8px rgba(255, 230, 0, 0.45));"
          >
            IA
          </span>
          <span class="hidden items-center gap-2.5 sm:inline-flex">
            <span
              class="font-['Space_Grotesk'] text-[1rem] font-bold uppercase tracking-[0.08em] text-[var(--color-text)]"
              style="font-family: var(--font-ui);"
            >
              Ivan Angjelkoski
            </span>
            <span class="hud-label hidden xl:inline">[SYS.VER_2.04]</span>
          </span>
        </a>

        <ul class="hidden items-center gap-5 lg:flex" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="nav-link"
              :class="{ 'is-active': activeHash === link.href }"
              :aria-current="activeHash === link.href ? 'page' : undefined"
            >
              <span class="text-[0.6rem] text-[var(--color-text-subtle)]">{{ link.index }}</span>
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="hidden items-center gap-4 xl:flex">
          <span class="status-badge">
            <span class="status-dot" aria-hidden="true" />
            Status: Online
          </span>
        </div>

        <button
          ref="menuButtonRef"
          class="chamfer-sm inline-flex h-10 w-10 items-center justify-center border border-[rgba(255,230,0,0.35)] bg-[rgba(255,230,0,0.04)] text-[var(--color-accent)] lg:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          @click="openMenu"
        >
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="square"
              stroke-linejoin="miter"
              stroke-width="1.8"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </nav>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          class="absolute inset-0 h-full w-full bg-[rgba(5,5,5,0.78)] backdrop-blur-[3px]"
          aria-label="Close navigation menu"
          @click="closeMenu(true)"
        />

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-4 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-4 opacity-0"
        >
          <aside
            v-if="isMenuOpen"
            id="mobile-menu"
            ref="mobileMenuRef"
            class="chamfer-md panel panel-notch absolute left-4 right-4 top-4 p-5"
            style="filter: drop-shadow(0 0 26px rgba(255, 230, 0, 0.14));"
            @click.stop
          >
            <div class="mb-4 flex items-center justify-between">
              <p class="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                // MENU
              </p>
              <button
                class="inline-flex h-9 w-9 items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="Close navigation menu"
                @click="closeMenu(true)"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    stroke-width="1.8"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul class="space-y-1" role="list">
              <li v-for="link in navLinks" :key="`mobile-${link.href}`">
                <a
                  :href="link.href"
                  class="group flex items-center gap-3 border border-transparent px-4 py-3 font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)] hover:border-[rgba(255,230,0,0.4)] hover:bg-[rgba(255,230,0,0.06)] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  @click="closeMenu(false)"
                >
                  <span class="text-[0.68rem] text-[var(--color-text-subtle)]">{{ link.index }}</span>
                  {{ link.label }}
                </a>
              </li>
            </ul>

            <div class="mt-4 flex items-center justify-between border-t border-dashed border-[var(--color-border-strong)] pt-4">
              <span class="status-badge">
                <span class="status-dot" aria-hidden="true" />
                Status: Online
              </span>
              <span class="hud-label">[SYS.VER_2.04]</span>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </header>
</template>
