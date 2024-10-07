<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <div class="mb-4 font-display">Quick Links</div>

    <div class="flex flex-col gap-2 text-[#D0E4FFB2]">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <!-- <RouterLink to="/causes">Causes</RouterLink>
      <RouterLink to="/events">Events</RouterLink>
      <RouterLink to="">Blog Posts</RouterLink>
      <RouterLink to="/faqs">FAQs</RouterLink> -->
      <RouterLink to="/contact">Contact Us</RouterLink>
    </div>
  </nav>
</template>
