<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  totalAmount: Number,
  partialAmount: Number,
});

const percentage = computed(() => {
  return Math.round(props.partialAmount / props.totalAmount * 100)
  
});
</script>

<template>
  <div>
    <header class="flex justify-between mb-2 font-semibold">
      <div>{{ title }}</div>
      <div>{{ percentage }}%</div>
    </header>

    <div class="h-2 overflow-auto rounded-full bg-primary-container">
      <div
        :class="`h-full bg-primary rounded-full`"
        :style="`width: ${percentage}%`"
      ></div>
    </div>
  </div>
</template>
