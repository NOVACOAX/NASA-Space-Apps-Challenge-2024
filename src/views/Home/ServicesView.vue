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
                <Icon icon="ri:service-fill" class="w-11 h-11" />
              </div>
            </div>
            <div>
              <h6 class="mb-2 font-semibold leading-5">{{ service.title }}</h6>
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

const services = ref([
  {
    title: 'Climate News',
    img: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content:
      'Our website development service offers end-to-end solutions for creating and launching professional and visually appealing websites.',
    bullets: ['Computers', 'Reference', 'Health'],
  },
]);
</script>

<style lang="scss" scoped></style>
