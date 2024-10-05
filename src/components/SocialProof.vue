<template>
  <div class="flex gap-6 max-md:flex-wrap  w-full justify-center max-md:items-center">
    <div v-for="stat in stats" :key="stat" class="flex flex-col gap-3 bg-[#C5302C] bg-opacity-[0.08] rounded-md items-center justify-center py-8 px-10 w-48">
      <div class="bg-white border-primary border-[6px] rounded-full p-3">
        <Icon :icon="stat.icon" class="text-primary" width="46px" height="46px" />
      </div>
      <p class="text-title-large font-semibold text-shadow">{{stat.title}}</p>
      <p class="text-label-large text-[#555555] text-center">{{ stat.label}}</p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const stats = [
  {
    icon: 'lucide:heart-handshake',
    title: '27',
    label: 'Projects'
  },
  {
    icon: 'fa-solid:people-carry',
    title: '500+',
    label: 'Volunteers'
  },
  {
    icon: 'fa6-solid:dove',
    title: '10000+',
    label: 'Lives Touched'
  },
  {
    icon: 'bx:calendar-heart',
    title: '2018',
    label: 'Registration Year'
  },
]

</script>

<style lang="scss" scoped></style>