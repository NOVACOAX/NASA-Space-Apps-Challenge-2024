<template>
  <section
    class="relative flex items-center p-4 pt-20 overflow-x-hidden overflow-y-visible text-white"
  >
    <!-- Front layers -->
    <slot></slot>

    <!-- Background layers -->
    <div
      class="absolute -z-10 inset-0 overflow-hidden bg-[rgba(37_42_52_/_0.90)]"
    >
      <!-- Diagonal dark red background -->
      <svg
        class="relative min-w-auto min-h-full object-cover -translate-x-[50%] z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 955 940"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 0H954.298L628.743 940H0V0Z" fill="#560102" />
      </svg>

      <!-- Bottom right gray  wavy path -->
      <img
        src="@/assets/_Path_.svg"
        class="absolute bottom-0 right-0 z-0 w-auto h-1/2"
        alt=""
      />

      <!-- Other background content here -->
      <slot name="background"></slot>
    </div>
  </section>
</template>
