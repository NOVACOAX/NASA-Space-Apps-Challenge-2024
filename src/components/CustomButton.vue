<script setup>
const emit = defineEmits(['click']);

function handleClick($event) {
  return emit('click', $event);
}
</script>

<template>
  <button
    class="flex items-center justify-center gap-4 px-5 py-2 font-semibold rounded-lg bg-primary text-primary-on"
    @click="handleClick($event)"
  >
    <slot>Button text</slot>
  </button>
</template>
