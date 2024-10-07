<template>
  <section class="px-4 mx-auto sm:px-[2%] md:px-[3%] w-full my-8">
    <CustomSectionHeader
      heading="Our Services, Your Solutions"
      title="Empowering Communities with Comprehensive Support and Resources"
    />
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3"
      >
        <div
          class="rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-lg shadow-neutral-600"
          v-for="(service, index) in services"
          :key="index"
        >
          <img :src="service.img" alt="news" class="aspect-video w-full" />
          <div class="flex flex-col sm:flex-row p-5">
            <div class="sm:mr-4">
              <div
                class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-container text-primary"
              >
                <Icon :icon="service.icon" class="w-11 h-11" />
              </div>
            </div>
            <div>
              <h6 class="mb-2 text-title-large font-medium">
                {{ service.title }}
              </h6>
              <p class="mb-3 text-sm text-gray-900">
                {{ service.content }}
              </p>
              <ul class="mb-4 -ml-1 space-y-2">
                <li
                  class="flex items-start"
                  v-for="(bullet, index) in service.bullets"
                  :key="index"
                >
                  <span class="mr-1">
                    <Icon
                      icon="fa6-solid:hand-point-right"
                      class="w-5 h-5 mt-px text-primary"
                    />
                  </span>
                  {{ bullet }}
                </li>
              </ul>
              <!-- <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:text-red-900"
              >Learn more
            </a> -->
            </div>
          </div>
        </div>
        <!-- * More services here -->
      </div>
    </div>
  </section>
</template>

<!-- eslint-disable no-unused-vars -->
<script setup>
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import { Icon } from '@iconify/vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { ref } from 'vue';

import img1 from '@/assets/jiwezeshe.jpeg';
import img2 from '@/assets/innovation.jpeg';
import img3 from '@/assets/forecast.jpeg';

const services = ref([
  {
    title: 'Jiwezeshe Educational Training and Climate Awareness Program',
    img: img1,
    icon: 'ri:service-fill',
    content:
      "Education is key to building climate resilience, and our solution provides women with tailored training programs on climate change and sustainable practices. Through a comprehensive curriculum and community-based trainings, we equip women with the knowledge to tackle environmental challenges. The impact doesn't stop there—each trained woman becomes an ambassador, sharing her skills and knowledge with others. This ripple effect empowers entire communities, fostering a cycle of education, action, and climate resilience.",
    bullets: [],
  },
  {
    title: 'Inovation For You',
    img: img2,
    icon: 'streamline:ai-science-spark',
    content:
      'Our platform connects women with transformative ideas and solutions that address both gender inequality and climate change. By providing access to resources like smart agriculture tools, clean energy solutions, and climate adaptation strategies, we empower women to drive change in their communities. Whether it’s through innovations like MySmartFarm, sustainable energy sources, or climate-smart agriculture practices, we ensure women are at the forefront of innovation and environmental action, fostering gender equality and stronger climate resilience.',
    bullets: [],
  },
  {
    title: 'Climate News and Weather Advisor',
    img: img3,
    icon: 'fluent:weather-blowing-snow-20-filled',
    content:
      'Staying informed is vital in the face of climate change. Our platform provides up-to-date weather forecasts and expert climate advisories tailored for women and their communities. Through both digital channels and a simple USSD service, we ensure that even those without internet access can receive accurate, localized information on extreme weather events and climate trends. With timely news and preparedness strategies delivered directly to mobile phones, we empower communities to prepare, respond, and adapt, reducing vulnerabilities and fostering resilience.',
    bullets: [],
  },
]);
</script>

<style lang="scss" scoped></style>
