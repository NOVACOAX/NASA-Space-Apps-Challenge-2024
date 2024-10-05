<template>
  <main>
    <HeaderComponent />
    <HeroSectionComponent>
      <template #default>
        <div class="flex flex-col items-center min-w-full sm:my-4">
          <h1
            class="text-headline-medium md:text-headline-large font-display mb-1"
          >
            {{ param }}
          </h1>
          <p class="text-label-medium underline underline-offset-2">
            <RouterLink to="/">home</RouterLink>/<RouterLink to="/about"
              >Regions/ {{ param }}</RouterLink
            >
          </p>
        </div>
      </template>
    </HeroSectionComponent>
    <CustomSection
      class="flex flex-col-reverse items-center md:flex-row gap-x-12 gap-y-8"
    >
      <div class="flex flex-col flex-1 gap-6 text-body-medium">
        <CustomSectionHeader
          title="Building Stronger, Resilient Communities​"
        />
        <p class="text-body-large">
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
        </p>
      </div>
      <div class="w-full sm:w-7/12 md:w-1/2">
        <!-- Need to replace these with the original images from the design  -->
        <div class="p-2 md:p-3 rounded-md w-11/12 mx-auto">
          <img
            src="@/assets/region1.png"
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
            <Icon icon="fa-solid:hand-holding-usd" width="40px" height="40px" />
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
              <li>
                Tailoring initiatives to meet the unique needs and preferences
                of those we serve.
              </li>
              <li>
                Working closely with community leaders and stakeholders for
                maximum impact.
              </li>
              <li>Ensuring openness and responsibility in all our projects.</li>
              <li>
                Creating inclusive spaces where everyone feels valued and heard.
              </li>
            </ol>
          </div>
        </div>
        <div
          class="bg-[#C5302C] bg-opacity-[8%] text-surface-on-variant py-5 px-6 flex flex-col gap-4 rounded-md grow h-fit"
        >
          <div class="bg-white rounded-full p-4 text-primary w-fit">
            <Icon icon="ion:diamond-sharp" width="40px" height="40px" />
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
              <li>
                Empowering individuals to conquer adversities and build better
                futures.
              </li>
              <li>
                Providing avenues for growth, progress, and new possibilities.
              </li>
              <li>Touching lives with genuine care and optimism.</li>
              <li>Enabling a ripple effect of positive change in society.</li>
            </ol>
          </div>
        </div>
      </div>
    </CustomSection>
  </main>
</template>

<!-- eslint-disable no-unused-vars -->
<script setup>
import HeroSectionComponent from '@/components/HeroSectionComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const param = route.params.region;

document.title = `${param} | Her Climate`;

import img1 from '@/assets/region.png';
import img2 from '@/assets/kenya2.png';

const regionData = ref([
  {
    image: img1,
    title: 'Region 1',
    id: '',
    content:
      'This Is Me Community is a loving and empowering community of young people dedicated to creating positive change.\n\n We strive to make a difference in our communities and uplift each other, fostering a brighter future where everyone feels a sense of belonging and empowerment.',
  },
  {
    image: img2,
    title: 'Region 2',
    content: `Getting involved is easy! You can join our events and initiatives,\n volunteer your time, or support us through donations. Visit our website\'s "Projects" section to explore various opportunities and find the best way for you to contribute.`,
  },
]);
</script>

<style lang="scss" scoped></style>
