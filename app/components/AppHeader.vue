<script setup lang="ts">
type NavLink = {
  label: string;
  href: `#${string}`;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
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
  if (window.innerWidth >= 768 && isMenuOpen.value) {
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
  <header class="sticky top-4 z-40">
    <div
      class="rounded-3xl border border-[var(--border)] bg-[rgba(10,10,10,0.65)] px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:px-6"
    >
      <nav class="flex items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#home" class="group inline-flex min-w-0 items-center gap-2">
          <span
            class="hidden text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)] sm:inline"
          >
            Portfolio
          </span>
          <span
            class="truncate font-['Cormorant_Garamond'] text-[1.15rem] font-semibold tracking-[0.03em] text-[var(--text)] sm:text-[1.25rem]"
          >
            Ivan Angjelkoski
          </span>
        </a>

        <ul class="hidden items-center gap-6 md:flex" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="nav-link"
              :class="{ 'is-active': activeHash === link.href }"
              :aria-current="activeHash === link.href ? 'page' : undefined"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <button
          ref="menuButtonRef"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] md:hidden"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </nav>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          class="absolute inset-0 h-full w-full bg-[rgba(0,0,0,0.65)] backdrop-blur-[2px]"
          aria-label="Close navigation menu"
          @click="closeMenu(true)"
        />

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-5 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-4 opacity-0"
        >
          <aside
            id="mobile-menu"
            ref="mobileMenuRef"
            class="absolute left-4 right-4 top-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            @click.stop
          >
            <div class="mb-4 flex items-center justify-between">
              <p class="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--text)]">Menu</p>
              <button
                class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)]"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  class="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-[var(--text-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,169,127,0.4)]"
                  @click="closeMenu(false)"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </aside>
        </Transition>
      </div>
    </Transition>
  </header>
</template>
