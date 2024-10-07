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

    <!-- * Reasons -->
    <CustomSection>
      <CustomSectionHeader
        :title="`Why ​Women Are Vulnerable In ${currentRegion.title} `"
      />
      <div class="py-5 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          v-for="(reason, index) in currentRegion.reasons"
          :key="index"
          class="rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-lg shadow-neutral-600"
        >
          <img
            v-if="reason.img"
            :src="reason.img"
            alt="region"
            class="aspect-video w-full"
          />
          <div class="p-3 flex gap-2 flex-col">
            <h5 class="text-title-large font-display font-medium">{{ reason.title }}</h5>
            <h5 class="text-body-medium">{{ reason.content }}</h5>
          </div>
        </div>
      </div>
    </CustomSection>

    <!-- * Actions -->
    <CustomSection>
      <CustomSectionHeader
        :title="`Actions Taken`"
      />
      <div class="py-5 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          v-for="(action, index) in currentRegion.actions"
          :key="index"
          class="rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-lg shadow-neutral-600"
        >
          <img
            v-if="action.img"
            :src="action.img"
            alt="region"
            class="aspect-video w-full"
          />
          <div class="p-3 flex gap-2 flex-col">
            <h5 class="text-title-large font-display font-medium">{{ action.title }}</h5>
            <h5 class="text-body-medium">{{ action.content }}</h5>
          </div>
        </div>
      </div>
    </CustomSection>

    <!--  * How we help section -->
    <!-- <CustomSection>
      <div class="flex gap-5 max-lg:flex-wrap mt-6">
        <div
          class="bg-[#C5302C] bg-opacity-[8%] text-surface-on-variant py-5 px-6 flex flex-col gap-4 rounded-md grow h-fit"
        >
          <div class="bg-white rounded-full p-4 text-primary w-fit">
            <Icon icon="ion:diamond-sharp" width="40px" height="40px" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <h4 class="text-title-medium text-surface-on font-display">
              Women Are More Vulnerable In {{ currentRegion.title }} Because Of;
            </h4>
            <ol
              class="text-surface-on text-label-large list-inside flex flex-col gap-1 list-decimal"
              start="1"
              type="1"
            >
              <li v-for="(reason, index) in currentRegion.reasons" :key="index">
                {{ reason.content }}
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
                {{ action.content }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </CustomSection> -->
  </main>
  <main v-else></main>
</template>

<!-- eslint-disable no-unused-vars -->
<script setup>
import HeroSectionComponent from '@/components/HeroSectionComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
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
import literacy from '@/assets/literacy.jpeg';
import early from '@/assets/early.jpeg';
import lack from '@/assets/lack.jpeg';
import acdi from '@/assets/acdi.jpeg';
import NDMA from '@/assets/NDMA.jpeg';

const regionData = ref([
  {
    image: northernArea,
    title: 'Northern Area',
    id: 'northern',
    content:
      'This is a region that is characterized by very erratic rainfall, high temperatures of about 29°C, and adverse winds. This leads the region to be characteristically dry, and have inadequate agricultural advancement.',
    reasons: [
      {
        img: literacy, // Add your image here
        title: 'Low Literacy Rates',
        content:
          'As much as the area has the lowest literacy rate in the country at 32.5%, the females are at a lower rate of education. And they are the workforce, hence more susceptible to climate change.',
      },
      {
        img: early,
        title: 'Early Marriages',
        content:
          'Early marriages hinder young women from education, which leaves them ill-prepared to cope with climatic changes and their adverse effects.',
      },
      {
        img: lack,
        title: 'Lack of Resources',
        content:
          'Due to limited resources and low literacy levels, they rely on traditional production methods, leading to food insecurity exacerbated by a high population growth rate.',
      },
    ],
    actions: [
      {
        img: NDMA, // Add your image here
        title: 'NDMA - Fighting Drought',
        content:
          'NDMA focuses on curbing drought and its effects in the region to reduce vulnerabilities caused by climate change.',
      },
      {
        img: acdi, // Add your image here
        title: 'ACDI/VOCA - Empowering Women',
        content:
          'ACDI/VOCA empowers women to improve their food security by providing training and resources.',
      },
    ],
  },
  {
    image: easternArea,
    title: 'Eastern Area',
    id: 'eastern',
    content:
      'Various areas of Eastern Kenya like Mwingi experience extended periods of drought that have highly affected agricultural activities in the region. Women, who are the majority that engage in agriculture, often have lower crop yields, translating to high poverty levels.',
    reasons: [
      {
        img: '', // Add your image here
        title: 'Minimal Support from Male Counterparts',
        content:
          'Women receive minimal support from male counterparts, both financially and physically, compounding their workload and problems.',
      },
      {
        img: '',
        title: 'Primary Caregivers',
        content:
          'As primary caregivers in most households, women are burdened with providing food, water, and fuel, making them vulnerable both physically and mentally.',
      },
      {
        img: '',
        title: 'Limited Access to Land and Resources',
        content:
          'Women have little to no access to land, credit, and financial services, hindering their ability to invest in adaptive agricultural methods.',
      },
      {
        img: '',
        title: 'Limited Access to Information',
        content:
          'In areas like Changoli, women have limited access to information and technology, making them highly susceptible to disasters posed by climate change.',
      },
    ],
    actions: [
      {
        img: '', // Add your image here
        title: 'Community Empowerment Programs',
        content:
          'Community empowerment programs uplift women by providing knowledge and resources to mitigate the effects of climate change.',
      },
      {
        img: '',
        title: 'Kenya Women Finance Trust Support',
        content:
          'Kenya Women Finance Trust provides financial loans, seedlings, and chicks for rearing to help women remain resilient.',
      },
      {
        img: '',
        title: 'Government Crop Resilience Research',
        content:
          'The government has invested in research and development to create drought-resilient crop species for areas in Eastern Kenya.',
      },
    ],
  },
  {
    image: centralArea,
    title: 'Central Area',
    id: 'central',
    content:
      'The central part of Kenya experiences high rainfall annually. However, some areas suffer from prolonged rains leading to landslides, displacing women who often own the assets in these regions. These landslides damage homes and strain livelihoods.',
    reasons: [
      {
        img: '', // Add your image here
        title: 'Women as Primary Asset Owners',
        content:
          'Women, as the primary asset owners, face greater livelihood strain when displaced by landslides, which damage their homes.',
      },
      {
        img: '',
        title: 'Loss of Agricultural Land',
        content:
          'Landslides destroy fertile land that women depend on, leaving them displaced and furthering their vulnerability.',
      },
    ],
    actions: [
      {
        img: '', // Add your image here
        title: 'Education on Rainfall Effects',
        content:
          'Women are being educated on the effects of increased rainfall, allowing them to make informed decisions in times of flash flooding.',
      },
      {
        img: '',
        title: 'Government Relocation Initiative',
        content:
          'The government has relocated people living in landslide-prone areas, showing a commitment to reducing the risks associated with living in danger zones.',
      },
    ],
  },
  {
    image: coastalArea,
    title: 'Coastal Area',
    id: 'coastal',
    content:
      'The coastal region experiences high humidity and temperatures year-round. The southern coast receives moderate rainfall, making it viable for agriculture, but the rest of the coast faces increasing drought and sea levels, leading to displacement.',
    reasons: [
      {
        img: '', // Add your image here
        title: 'Rising Sea Levels',
        content:
          'Increased sea levels cause higher precipitation during rainy months and increased drought during dry months, leading to intimate partner violence (IPV) and psychological stress for women.',
      },
      {
        img: '',
        title: 'Displacement Risk',
        content:
          'According to the UN, 80% of women are at risk of displacement as the ocean level rises, forcing them to relocate to safer areas.',
      },
      {
        img: '',
        title: 'Food Insecurity',
        content:
          'Low food production in the coastal region leads to food insecurity, further straining women’s ability to support their families.',
      },
    ],
    actions: [
      {
        img: '', // Add your image here
        title: 'Government Promoting Alternative Income',
        content:
          'The government is promoting alternative income-generating activities such as mining, tourism, and the blue economy to help locals.',
      },
      {
        img: '',
        title: 'Women Self-Help Groups',
        content:
          'NGOs and international organizations are forming women-only self-help groups to empower women and provide financial and emotional support.',
      },
    ],
  },
  {
    image: westernArea,
    title: 'Western Area',
    id: 'western',
    content:
      'Western Kenya has seen shifting rainfall patterns, with some areas experiencing flooding and others drought. These changes disrupt agricultural production, particularly for women engaged in subsistence farming.',
    reasons: [
      {
        img: '', // Add your image here
        title: 'Lack of Resources',
        content:
          'Women lack the necessary resources and finances to adapt to either drought or floods, impeding their farming activities.',
      },
      {
        img: '',
        title: 'Limited Support from Male Counterparts',
        content:
          'Women often lack support from male counterparts during climate-related disasters, further increasing their vulnerability.',
      },
      {
        img: '',
        title: 'Social Roles and Agriculture',
        content:
          'Traditional social roles place women as primary subsistence farmers but with little access to resources or decision-making power in the household and community.',
      },
      {
        img: '',
        title: 'Limited Decision-Making Influence',
        content:
          'Women have less influence in household and community decisions, limiting their ability to respond effectively to climate change.',
      },
    ],
    actions: [
      {
        img: '', // Add your image here
        title: 'One Acre Fund',
        content:
          'The One Acre Fund provides education, financing, and access to resources like seedlings, primarily helping women farmers adapt to climate change.',
      },
      {
        img: '',
        title: 'Women Chamas',
        content:
          'Women have formed Chamas (self-help groups) that support one another in improving their agricultural knowledge and resilience.',
      },
    ],
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
