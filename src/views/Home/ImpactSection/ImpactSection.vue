<script setup>
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import Card from './Card.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';

</script>

<template>
  <CustomSection
    class="flex flex-col md:flex-row items-center gap-x-12 gap-y-8"
  >
    <div class="flex flex-col flex-1 order-last gap-6 md:order-first">
      <CustomSectionHeader
        heading="Our Impact"
        title="Let Us Come Together To Make a Difference​"
      />
      <p class="leading-relaxed">
        We celebrate the collective power of the This Is Me community to create
        positive change. Through our unwavering support and love, we make a
        significant impact in the lives of those in need. Together, we strive to
        uplift, empower, and bring hope to vulnerable communities, making a
        lasting difference. Our mission is to foster a brighter future, where no
        one is left behind, and compassion prevails. Join us in our journey to
        create a world filled with love and transformation.
      </p>

      <div class="flex flex-wrap gap-4">
        <Card class="flex-1" title="Our Mission" icon="mdi:shield-check">
          To extend unconditional love and support to all individuals, fostering
          a sense of belonging and empowerment in their journey to a better
          life.
        </Card>
        <Card class="flex-1" title="Our Vision" icon="ph:scroll-duotone">
          To create a world where compassion, kindness, and support are at the
          core of every community, uplifting those in need and fostering a sense
          of unity and love among all.</Card
        >

        <ProgressBar
          class="w-full"
          title="Donations"
          :total-amount="10"
          :partial-amount="4"
        />
      </div>
    </div>

    <!-- Right side images -->
    <div class="relative w-full sm:w-7/12 md:w-1/2 flex flex-col gap-3">
      <!-- Need to replace these with the original images from the design  -->
      <div
        class="p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-full lg:w-2/3"
      >
        <img src="@/assets/salute.jpg" alt="" class="w-full h-full aspect-square" />
      </div>

      <div
        class="hidden md:block relative lg:absolute lg:translate-y-[60%] lg:bottom-0 lg:left-1/3 lg:right-0 z-10 border-[.75rem] rounded-md bg-white border-[rgba(255_180_172_/_0.30)] p-8 h-fit"
      >
        <ul class="list-disc text-label-medium lg:text-label-large text-outline ">
          <li class="text-primary">
            Your support can transform lives.
          </li>
          <li>Join us in illuminating paths with love.</li>
          <li>Together, we create safe spaces in adversity.</li>
          <li>Be a part of our positive ripple in the community.</li>
          <li>Your support fosters hope and embodies kindness.</li>
        </ul>
      </div>
    </div>
  </CustomSection>
</template>
