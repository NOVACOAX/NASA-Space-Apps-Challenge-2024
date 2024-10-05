<script setup>
import { ref } from 'vue';
import CustomButton from './CustomButton.vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isNavShown = ref(false);
function toggleNav(bool) {
  isNavShown.value = bool ?? !isNavShown.value;
}

router.afterEach(() => toggleNav(false));
</script>

<template>
  <header
    :class="[
      'flex justify-between items-center p-4 container left-0 right-0 max-w-[800px] mx-auto absolute z-40 flex-wrap',
      `${isNavShown && 'max-md:bg-primary-container'}`,
    ]"
  >
    <!-- Logo -->
    <RouterLink to="/">
      <img class="h-11 sm:h-12 md:h-16" src="@/assets/Mother Nature.svg" alt="Logo" />
    </RouterLink>

    <CustomButton @click="() => toggleNav()" class="md:hidden">
      <Icon :icon="`${isNavShown ? 'bx:x' : 'bx:menu'}`" />
    </CustomButton>

    <nav
      :class="[
        `gap-6 font-semibold text-${$route.meta.headerFontColor ?? 'white'}`,
        `${
          isNavShown
            ? 'flex max-md:flex-col max-md:items-end max-md:mt-4 max-md:w-full max-md:text-primary'
            : 'hidden md:flex'
        }`,
      ]"
    >
      <!-- <RouterLink class="w-fit" to="/about">Who We Are</RouterLink>
      <RouterLink class="w-fit" to="/causes">How We Help</RouterLink> -->
      <RouterLink class="w-fit" to="/contact">Contact Us</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss"></style>
