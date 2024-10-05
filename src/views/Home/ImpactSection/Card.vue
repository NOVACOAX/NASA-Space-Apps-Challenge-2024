<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({
  title: String,
  icon: String,
});
</script>

<template>
  <div class="p-6 rounded-md bg-secondary-container">
    <header class="flex items-center gap-4 text-primary mb-4">
      <Icon :icon="icon" height="28px" />
      <h4 class="font-semibold text-body-large">{{ title }}</h4>
    </header>

    <p class="text-label-medium leading-relaxed">
      <slot></slot>
    </p>
  </div>
</template>
