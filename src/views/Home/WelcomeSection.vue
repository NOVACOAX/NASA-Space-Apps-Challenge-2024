<script setup>
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import CustomButton from '@/components/CustomButton.vue';
</script>

<template>
  <CustomSection
    class="flex flex-col items-center md:flex-row gap-x-12 gap-y-8"
  >
    <!-- Left side images -->
    <div class="w-full sm:w-7/12 md:w-1/2">
      <!-- Need to replace these with the original images from the design  -->
      <div
        class="p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-8/12"
      >
        <img
          src="@/assets/sdg5.png"
          alt=""
          class="rounded-md w-full h-full aspect-square"
        />
      </div>

      <div
        class="ms-auto mt-[-28%] z-10 p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-7/12"
      >
        <img
          src="@/assets/sdg13.png"
          alt=""
          class="rounded-md w-full h-full aspect-square"
        />
      </div>
    </div>

    <div class="flex flex-col flex-1 gap-6">
      <CustomSectionHeader
        heading="Welcome to Her Climate"
        title="Empowering Women, Building Resilience."
      />

      <p class="leading-relaxed">
        At Her Climate, we recognize the deep connection between gender equality
        and climate action. Women, especially in vulnerable communities, are at
        the forefront of both the impacts and solutions to climate change. We
        strive to create an inclusive space where women can lead the charge
        towards a more sustainable and equitable future.
      </p>
      <p class="leading-relaxed">
        Through education, access to resources, and leadership opportunities, we
        empower women to shape climate solutions that benefit everyone. Join us
        as we work together to build stronger communities and a more resilient
        planet for all.
      </p>
      <RouterLink
        class="md:w-fit flex items-center justify-center gap-4 px-5 py-2 font-semibold rounded-lg bg-primary text-primary-on"
        to="/about"
        >Read more</RouterLink
      >
    </div>
  </CustomSection>
</template>
