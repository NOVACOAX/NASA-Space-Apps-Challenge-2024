<script setup>
import CustomButton from '../../../components/CustomButton.vue';
</script>

<template>
  <!-- Headline and call-to-action -->
  <div
    class="relative z-20 flex flex-col justify-center flex-1 max-w-lg gap-8 md:gap-12"
  >
    <div class="relative z-20 w-fit">
      <h1
        class="text-display-small font-extrabold leading-relaxed uppercase sm:mb-4 sm:text-5xl text-primary-inverse w-max"
      >
        This is Me
      </h1>

      <img class="" src="@/assets/community.svg" alt="Community" />

      <img
        src="@/assets/archs.svg"
        alt="arcs"
        :class="[
          'max-xs:hidden absolute right-0 z-20 scale-50 -top-[73%]' /* Mobile and below */,
          'sm:scale-[70%] sm:-top-[70%] sm:-right-[35%]',
          'lg:scale-[90%]',
        ]"
      />
    </div>

    <p class="leading-normal text-white md:max-w-lg">
      A community challenging the way we exist by finding ways to leverage
      humanity for good and achieve sustainable development goals.
    </p>

    <!-- Link to Donate page -->
    <CustomButton class="w-full md:max-w-[15rem] min-w-max"
      >Donate</CustomButton
    >
  </div>
</template>
