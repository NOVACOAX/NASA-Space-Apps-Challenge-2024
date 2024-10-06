<template>
  <LightBox
    :showLightbox="showLightbox"
    :imageList="images"
    :currentImageSrc="currentImageSrc"
    :downloadable="true"
    :carousel="true"
    @closeLightbox="hideLightbox"
  />
  <main>
    <HeaderComponent />
    <HeroSectionComponent>
      <template #default>
        <div class="flex flex-col items-center min-w-full sm:my-4">
          <h1
            class="text-headline-medium md:text-headline-large font-display mb-1"
          >
            Gender and Climate
          </h1>
          <p class="text-label-medium underline underline-offset-2">
            <RouterLink to="/">home</RouterLink>/<RouterLink to="/about"
              >Gender and Climate</RouterLink
            >
          </p>
        </div>
      </template>
    </HeroSectionComponent>

    <!-- * Gender -->
    <CustomSection
      class="flex flex-col-reverse items-center md:flex-row gap-x-12 gap-y-8"
    >
      <div class="flex flex-col flex-1 gap-6 text-body-medium">
        <CustomSectionHeader title="Gender Equality" />
        <p class="text-body-large">
          Gender equality refers to the state in which access to rights and
          opportunities is unaffected by one’s gender. The UNDP, in its 2015
          proposition for Vision 2030, outlined gender equality as a key area of
          concern. The disparities that exist between males and their female
          counterparts are vast.
        </p>
        <p class="">
          Gender equality empowers everyone to break harmful stereotypes and
          pursue their dreams regardless of societal expectations and
          limitations. This goal seeks to end all forms of discrimination
          against women, emancipate them from all forms of violence, end harmful
          practices like FGM and early marriages, enhance the use of ICT to
          empower women and girls, and ensure full and active participation of
          women in leadership positions at all levels of society.
        </p>
        <p class="">
          Achieving gender equality fosters an environment where everyone feels
          safe, respected, and valued, and subsequently helps to improve the
          economic growth and development of a country.
        </p>
      </div>
      <div class="w-full sm:w-7/12 md:w-1/2">
        <!-- Need to replace these with the original images from the design  -->
        <div
          class="p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-9/12"
        >
          <img
            src="@/assets/sdg5.png"
            alt=""
            class="rounded-md w-full h-full aspect-square"
          />
        </div>

        <div
          class="ms-auto mt-[-28%] z-10 p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-[3/2] w-7/12"
        >
          <img
            src="@/assets/hands-in-circle.jpg"
            alt=""
            class="rounded-md w-full h-full aspect-[3/2]"
          />
        </div>
      </div>
    </CustomSection>

    <!-- * Climate -->
    <CustomSection
      class="flex flex-col items-center md:flex-row gap-x-12 gap-y-8"
    >
      <div class="w-full sm:w-7/12 md:w-1/2">
        <!-- Need to replace these with the original images from the design  -->
        <div
          class="ms-auto p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-9/12"
        >
          <img
            src="@/assets/sdg13.png"
            alt=""
            class="rounded-md w-full h-full aspect-square"
          />
        </div>

        <div
          class="me-auto mt-[-28%] z-10 p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-[3/2] w-7/12"
        >
          <img
            src="@/assets/climate2.png"
            alt=""
            class="rounded-md w-full h-full aspect-[3/2]"
          />
        </div>
      </div>
      <div class="flex flex-col flex-1 gap-6 text-body-medium">
        <CustomSectionHeader title="Climate Change" />
        <p class="text-body-large">
          Climate change refers to long-term shifts in temperature and weather
          patterns due to natural variability or human activities. While change
          is a natural part of Earth's variability over time, human activities
          have recently posed a significant hazard to the future of the planet
          by exacerbating climate changes.
        </p>
        <p class="">
          Human activities such as burning fossil fuels, deforestation, and
          intensive agriculture release greenhouse gases like carbon dioxide and
          methane into the upper atmosphere. These gases form a blanket-like
          layer, trapping heat in the lower atmosphere, leading to global
          temperature rises—commonly referred to as global warming. This warming
          results in melting glaciers, rising sea levels, and adverse weather
          conditions like droughts, floods, and heat waves.
        </p>
        <p class="">
          These extreme conditions affect agricultural yields, which heavily
          depend on climate. Africa, with its economy largely reliant on
          agriculture, faces significant impacts from these changes, affecting
          human lives at both national and global levels.
        </p>
      </div>
    </CustomSection>

    <!-- * combination -->
    <div
      class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <!-- Left Section -->
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-primary">
                Correlation between Gender and Climate
              </p>
              <h1
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                How Climate Change Affects Vulnerability
              </h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">
                Climate change affects people differently, based on
                vulnerability factors such as gender, social status, poverty
                levels, and livelihood options. Women, especially in regions
                like Kenya, are particularly affected due to their dependence on
                natural resources for productive activities.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Section with Image -->
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="@/assets/vulnarability.png"
            alt=""
          />
        </div>

        <!-- Bottom Left Section -->
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                In Kenya, women make up 75% of small-scale agricultural farmers,
                and their dependence on natural resources highlights their
                vulnerability amidst climatic uncertainty. As primary
                caregivers, they are responsible for securing food, water, and
                fuel for cooking and heating. Despite doing much of the
                agricultural work and contributing to production, women only
                earn a fraction of the income and own a small percentage of
                assets.
              </p>

              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <Icon
                    icon="mdi:lock-outline"
                    class="mt-1 h-8 w-8 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <span
                    ><strong class="font-semibold text-gray-900"
                      >Limited Access to Resources.</strong
                    >
                    Women face barriers to information, technologies, and
                    financial services, limiting their ability to adapt to and
                    mitigate climate challenges.</span
                  >
                </li>
                <li class="flex gap-x-3">
                  <Icon
                    icon="mdi:account-off-outline"
                    class="mt-1 h-8 w-8 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <span
                    ><strong class="font-semibold text-gray-900"
                      >Underrepresentation in Leadership.</strong
                    >
                    Women are often excluded from decision-making processes and
                    leadership roles, which hinders the development of new ideas
                    and strategies to tackle climate change.</span
                  >
                </li>
                <li class="flex gap-x-3">
                  <Icon
                    icon="mdi:hand-heart-outline"
                    class="mt-1 h-8 w-8 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <span
                    ><strong class="font-semibold text-gray-900"
                      >Empowering Women.</strong
                    >
                    Providing women with education, access to resources, and
                    decision-making roles can create more sustainable,
                    community-driven solutions to climate change.</span
                  >
                </li>
              </ul>

              <p class="mt-8">
                A more equitable society where women’s contributions and
                perspectives are valued ensures more effective solutions for
                climate change, leading to equal outcomes and greater prosperity
                for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </main>
</template>

<script setup>
import HeroSectionComponent from '@/components/HeroSectionComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';
import Testimonials from '@/components/Testimonials.vue';
import SocialProof from '@/components/SocialProof.vue';
import LightBox from '@/components/LightBox.vue';
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import Card from '@/views/Home/ImpactSection/Card.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const imgUrl = (image) => {
  return new URL(`../assets/${image}`, import.meta.url).href;
};
const showLightbox = ref(false);
const currentImageSrc = ref('');
const openLightbox = (currentImg) => {
  currentImageSrc.value = currentImg;
  showLightbox.value = true;
};

const hideLightbox = () => {
  showLightbox.value = false;
};
const images = ref([
  { src: 'https://source.unsplash.com/ztpUS4N1xhY' },
  { src: 'https://source.unsplash.com/mPFSPqZOO7s' },
  { src: 'https://source.unsplash.com/xoTt2fjs7d0' },
  { src: 'https://source.unsplash.com/uPEnxrdSKIw' },
  { src: 'https://source.unsplash.com/hFKZ5-OT9Ys' },
  { src: 'https://source.unsplash.com/NTGg2rtWDwg' },
  { src: 'https://source.unsplash.com/hqnQWmIt3cY' },
  { src: 'https://source.unsplash.com/uyX3qAQhZVA' },
  { src: 'https://source.unsplash.com/Vc2dD4l57og' },
]);

const members = [
  {
    image:
      'https://images.unsplash.com/photo-1678346496584-e81410d1e697?auto=format&fit=crop&q=80&w=1349&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Cyntia Nkania',
    role: 'Founder & Chair',
    ig: 'https://www.instagram.com/_nkanai/',
  },
  {
    image:
      'https://images.unsplash.com/photo-1697660981480-f55beb296193?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Jonathan Githire',
    role: 'Creative Director & Chair',
    ig: 'https://www.instagram.com/_jonnaahhh/',
  },
  {
    image:
      'https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Cyntia Mukuria',
    role: 'Manager',
    ig: 'https://www.instagram.com/itsmemukuria/',
  },
  {
    image:
      'https://images.unsplash.com/photo-1697725351522-7d63b2e64698?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Lisa Wanjiku',
    role: 'Creative Manager',
    ig: 'https://www.instagram.com/lisa__wanjiku/',
  },
  {
    image:
      'https://images.unsplash.com/photo-1697472925037-e38438b132b0?auto=format&fit=crop&q=80&w=1365&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Hugh Herschell',
    role: 'IT Lead',
    ig: 'https://www.instagram.com/novacoax/',
  },
];
</script>

<style scoped lang="scss"></style>
