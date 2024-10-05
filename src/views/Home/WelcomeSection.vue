<script setup>
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import CustomButton from '@/components/CustomButton.vue';
import hands from '@/assets/hands-in-circle.jpg';
</script>

<template>
  <CustomSection
    class="flex flex-col items-center md:flex-row gap-x-12 gap-y-8"
  >
    <!-- Left side images -->
    <div
      class="w-full sm:w-7/12 md:w-1/2"
    >
      <!-- Need to replace these with the original images from the design  -->
      <div
        class="p-2 md:p-3 rounded-md  bg-[rgba(255_180_172_/_0.30)] aspect-square w-9/12"
      >
        <img
          src="https://unsplash.com/photos/4LunKr1gTd8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8Y2hpbGQlMjBzbWlsaW5nfGVufDB8fHx8MTY5NDExMjUwNXww&force=true&w=1920"
          alt=""
          class="rounded-md w-full h-full aspect-square"
        />
      </div>

      <div
        class="ms-auto mt-[-28%] z-10 p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-7/12"
      >
        <img :src="hands" alt="" class="rounded-md w-full h-full aspect-square" />
      </div>
    </div>

    <div class="flex flex-col flex-1 gap-6">
      <CustomSectionHeader
        heading="Welcome to This Is Me"
        title="Your Support is Our Strength.​"
      />

      <p class="leading-relaxed">
        At This Is Me, we are a loving and empowering community of young people.
        Together, we create a positive loop of support and growth, striving to
        make a difference in our communities and uplift each other to reach new
        heights.
      </p>
      <RouterLink class="md:w-fit flex items-center justify-center gap-4 px-5 py-2 font-semibold rounded-lg bg-primary text-primary-on" to="/about">Read more</RouterLink>
    </div>
  </CustomSection>
</template>
