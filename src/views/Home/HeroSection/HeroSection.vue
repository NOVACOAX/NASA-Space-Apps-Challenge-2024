<script setup>
import HeroSectionComponent from '../../../components/HeroSectionComponent.vue';
import Image from './Image.vue';
import Headline from './Headline.vue';
import Background from './Background.vue';
</script>

<template>
  <HeroSectionComponent class="min-h-[100vh]">
    <div
      class="container z-10 grid min-h-full w-fit md:grid-cols-[minmax(auto,_30rem)_25rem] lg:grid-cols-[minmax(auto,_30rem)_30rem] gap-16 mx-auto mt-8 max-w-6x"
    >
      <Headline class="drop-shadow-md" />

      <Image />
      
      <div class="absolute inset-0 bg-black opacity-80 md:hidden"></div>
    </div>

    <template #background>
      <Background class="hidden md:block" />
    </template>
  </HeroSectionComponent>
</template>
