<template>
  <!-- <ModalComponent>
    <template v-slot:button>
      <div ref="modalRef"></div>
    </template>
    <template v-slot:content>
      <div
        class="w-[300px] sm:w-[500px] md:w-[550px] lg:w-[700px] overflow-y-scroll max-h-full flex max-md:flex-col gap-4 items-center"
      >
        <div class="md:w-4/12">
          <img
            :src="regionData[openedRegion].image"
            alt="region"
            class="rounded-md"
          />
        </div>
        <div class="md:w-8/12 flex flex-col gap-2">
          <h3 class="text-title-large text-primary">
            {{ regionData[openedRegion].title }}
          </h3>
          <div v-html="regionData[openedRegion].content"></div>
        </div>
      </div>
    </template>
  </ModalComponent> -->
  <section class="relative px-4 mx-auto sm:px-[2%] md:px-[3%] w-full my-8">
    <CustomSectionHeader
      heading="Regional Impact Insights"
      title="Kenya Climate Justice Map: A Woman's Perspective"
    />

    <!-- Relative container for the map -->
    <div class="relative max-w-[90%] max-h-dvh md:w-[43%] mx-auto py-9 max-md:pb-[86px]">
      <!-- The map image -->
      <img src="@/assets/kenya3.png" alt="Kenya" class="w-full" />

      <!-- Absolute pins (example) -->
      <!-- <RouterLink
        to="region/western"
        class="pin"
        :style="{ top: '40%', left: '50%' }"
      >
        <Icon icon="line-md:my-location-loop" width="40px" height="40px" />
      </RouterLink> -->
      <RouterLink
        to="region/central"
        class="pin text-green-600"
        :style="{ top: '56%', left: '42%' }"
      >
        <Icon icon="mdi:location" width="40px" height="40px" />
      </RouterLink>
      <RouterLink
        to="region/western"
        class="pin text-orange-400"
        :style="{ top: '51%', left: '4%' }"
      >
        <Icon icon="mdi:location" width="40px" height="40px" />
      </RouterLink>
      <RouterLink
        to="region/northern"
        class="pin text-green-600"
        :style="{ top: '30%', left: '50%' }"
      >
        <img src="@/assets/location-gif.gif" class="w-14 h-14" alt="img" />
        <!-- <Icon icon="mdi:location" width="40px" height="40px" /> -->
      </RouterLink>
      <RouterLink
        to="region/eastern"
        class="pin text-orange-400"
        :style="{ top: '68%', left: '53%' }"
      >
        <Icon icon="mdi:location" width="40px" height="40px" />
      </RouterLink>
      <RouterLink
        to="region/coastal"
        class="pin text-red-800"
        :style="{ top: '83%', left: '60%' }"
      >
        <img src="@/assets/location-gif.gif" class="w-14 h-14" alt="img" />
        <!-- <Icon icon="mdi:location" width="40px" height="40px" /> -->
      </RouterLink>
    </div>
    <div class="absolute bottom-0 md:bottom-[10%] left-5">
      <h3 class="text-title-medium">Levels of Women's Disproportionality</h3>
      <div class="rounded-lg border border-neutral-300 bg-white p-3 flex gap-2">
        <div class="flex flex-row gap-2">
          <div
            class="bg-red-500 w-6 h-6 rounded-md border border-neutral-600"
          ></div>
          <p>High</p>
        </div>
        <div class="flex flex-row gap-2">
          <div
            class="bg-orange-400 w-6 h-6 rounded-md border border-neutral-600"
          ></div>
          <p>Medium</p>
        </div>
        <div class="flex flex-row gap-2">
          <div
            class="bg-green-600 w-6 h-6 rounded-md border border-neutral-600"
          ></div>
          <p>Low</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import { Icon } from '@iconify/vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
/* Optional: Styling for pins */
.pin {
  @apply cursor-pointer absolute;
  transform: translate(
    -50%,
    -100%
  ); /* Center the pin at the exact coordinates */
}
</style>
<!-- I would like to visualise some data values in this excel sheet. What is to be done is to show  -->