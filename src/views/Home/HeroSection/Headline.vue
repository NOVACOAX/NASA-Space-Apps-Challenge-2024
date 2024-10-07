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
        Her Climate
      </h1>

      <!-- <img class="" src="@/assets/community.svg" alt="Community" /> -->

      <img
        src="@/assets/archs.svg"
        alt="arcs"
        :class="[
          'max-sm:hidden absolute right-0 z-20 scale-50 -top-[83%]' /* Mobile and below */,
          'sm:scale-[70%] sm:-top-[90%] sm:-right-[35%]',
          'lg:scale-[90%]',
        ]"
      />
    </div>

    <p class="leading-normal text-white md:max-w-lg">
      A gender-climate model focused on leveraging available resources to
      empower the girl-child against a backdrop of uncertainties posed by
      climate change. Her empowerment is our empowerment!
    </p>

    <!-- Link to Donate page -->
    <!-- <CustomButton class="w-full md:max-w-[15rem] min-w-max"
      >Donate</CustomButton
    > -->
  </div>
</template>
