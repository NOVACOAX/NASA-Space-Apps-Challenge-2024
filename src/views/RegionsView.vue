<template>
  <main v-if="currentRegion">
    <HeaderComponent />
    <HeroSectionComponent>
      <template #default>
        <div class="flex flex-col items-center min-w-full sm:my-4">
          <h1
            class="text-headline-medium md:text-headline-large font-display mb-1"
          >
            {{ currentRegion.title }}
          </h1>
          <p class="text-label-medium underline underline-offset-2">
            <RouterLink to="/">home</RouterLink>/<RouterLink to="/about"
              >Regions/ {{ currentRegion.title }}</RouterLink
            >
          </p>
        </div>
      </template>
    </HeroSectionComponent>
    <CustomSection
      class="flex flex-col-reverse items-center md:flex-row gap-x-12 gap-y-8"
    >
      <div
        class="flex flex-col flex-1 gap-6 text-body-medium"
        v-html="currentRegion.content"
      ></div>
      <div class="w-full sm:w-7/12 md:w-1/2">
        <!-- Need to replace these with the original images from the design  -->
        <div class="p-2 md:p-3 rounded-md w-11/12 mx-auto">
          <img
            :src="currentRegion.image"
            alt=""
            class="rounded-md m-auto w-fit h-fit"
          />
        </div>
      </div>
    </CustomSection>
    <!--  * How we help section -->
    <CustomSection>
      <CustomSectionHeader title="How We Help​" />
      <div class="flex gap-5 max-lg:flex-wrap mt-6">
        <div
          class="bg-[#C5302C] bg-opacity-[8%] text-surface-on-variant py-5 px-6 flex flex-col gap-4 rounded-md grow h-fit"
        >
          <div class="bg-white rounded-full p-4 text-primary w-fit">
            <Icon icon="ion:diamond-sharp" width="40px" height="40px" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <h4 class="text-title-medium text-surface-on font-display">
              Reasons
            </h4>
            <ol
              class="text-surface-on text-label-large list-inside flex flex-col gap-1 list-decimal"
              start="1"
              type="1"
            >
              <li v-for="(reason, index) in currentRegion.reasons" :key="index">
                {{ reason }}
              </li>
            </ol>
          </div>
        </div>
        <div
          class="bg-[#C5302C] bg-opacity-[8%] text-surface-on-variant py-5 px-6 flex flex-col gap-4 rounded-md grow h-fit"
        >
          <div class="bg-white rounded-full p-4 text-primary w-fit">
            <Icon icon="fa-solid:hand-holding-usd" width="40px" height="40px" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <h4 class="text-title-medium text-surface-on font-display">
              What is done
            </h4>
            <ol
              class="text-surface-on text-label-large list-inside flex flex-col gap-1 list-decimal"
              start="1"
              type="1"
            >
              <li v-for="(action, index) in currentRegion.actions" :key="index">
                {{ action }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </CustomSection>
  </main>
  <main v-else></main>
</template>

<!-- eslint-disable no-unused-vars -->
<script setup>
import HeroSectionComponent from '@/components/HeroSectionComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import { onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const param = route.params.region;

document.title = `${param} | Her Climate`;

import northernArea from '@/assets/northernArea.png';
import easternArea from '@/assets/easternArea.png';
import centralArea from '@/assets/centralArea.png';
import coastalArea from '@/assets/coastalArea.png';
import westernArea from '@/assets/westernArea.png';

const regionData = ref([
  {
    image: northernArea,
    title: 'Northern Area',
    id: 'northern',
    content: `<p class="text-body-large">
          At This Is Me, we understand that there are countless challenges faced
          by different groups in society. These range from socio-economic
          struggles to mental health issues, and even include the challenge of
          feeling disconnected and unsupported.
        </p>
        <p class="">
          Our mission is to counteract these issues by creating a loving and
          empowering community where young people can find support,
          companionship, and empowerment. Our initiatives aim to provide relief
          where it's needed most, extending a hand to those who are struggling,
          while also creating a platform for individuals to make a difference in
          the lives of others. We believe that through collective efforts,
          empathy, and a shared vision, we can build stronger and more resilient
          communities.
        </p>
        <p class="">
          By joining forces, we strive not only to alleviate the burdens of
          those in need but also to catalyze a positive societal change that
          endures.
        </p>`,
    reasons: [
      'Creating inclusive spaces where everyone feels valued and heard.',
      'Ensuring openness and responsibility in all our projects.',
    ],
    actions: [
      'Creating inclusive spaces where everyone feels valued and heard.',
      'Ensuring openness and responsibility in all our projects.',
    ],
  },
  {
    image: easternArea,
    title: 'Eastern Area',
    id: 'eastern',
    content: '...',
    reasons: ['...', '...'],
    actions: ['...', '...'],
  },
  {
    image: centralArea,
    title: 'Central Area',
    id: 'central',
    content: '...',
    reasons: ['...', '...'],
    actions: ['...', '...'],
  },
  {
    image: coastalArea,
    title: 'Coastal Area',
    id: 'coastal',
    content: '...',
    reasons: ['...', '...'],
    actions: ['...', '...'],
  },
  {
    image: westernArea,
    title: 'Western Area',
    id: 'western',
    content: '...',
    reasons: ['...', '...'],
    actions: ['...', '...'],
  },
]);

// Define the currentRegion constant
const currentRegion = ref(null);

// Update currentRegion on mount based on the param
onMounted(() => {
  currentRegion.value =
    regionData.value.find((region) => region.id === param) || null;
});
</script>

<style lang="scss" scoped></style>
