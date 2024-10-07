<template>
  <section class="px-4 mx-auto sm:px-[2%] md:px-[3%] w-full my-8">
    <CustomSectionHeader
      heading="Understanding the Numbers"
      title="A Deeper Look at Data to Drive Informed Action"
    />
    <div
      class="flex flex-col-reverse md:flex-row gap-10 md:gap-6 py-10 items-center"
    >
      <div class="w-full md:w-5/12">
        <TransitionGroup mode="out-in">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="p-6 border-y border-b-0 border-outline-variant cursor-pointer bg-surface"
            :class="[
              openedIndex === index ? '' : '',
              index === faqs.length - 1 ? '!border-b' : '',
            ]"
            @click="openedIndex = index"
          >
            <div class="flex justify-between gap-1 items-center">
              <p
                class="text-title-medium font-display cursor-pointer text-surface-on"
                :class="
                  openedIndex === index ? 'text-secondary-on-container' : ''
                "
              >
                {{ faq.question }}
              </p>
              <Icon
                :icon="
                  openedIndex === index
                    ? 'ic:baseline-minus'
                    : 'ic:baseline-plus'
                "
                width="20px"
                height="20px"
              />
            </div>
            <p class="mt-3 text-surface-inverse" v-if="openedIndex === index">
              {{ faq.answer }}
            </p>
          </div>
        </TransitionGroup>
      </div>
      <div class="grow flex w-full md:w-7/12 justify-center items-center">
        <img
          :src="faqs[openedIndex].image"
          alt="map"
          class="max-w-[90%] md:h-screen"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import img1 from '@/assets/kenya1.png';
import img2 from '@/assets/gender-inequality.png';
import img3 from '@/assets/female-employment.png'
import img4 from '@/assets/women-leadership.png'
import img5 from '@/assets/disaster-programmes.png'

const faqs = ref([
{
    image: img1,
  "question": "What is Her Climate and what does it aim to achieve?",
  "answer": "Her Climate is a platform dedicated to raising awareness about the intersections of gender and climate change in Kenya. The website provides educational resources, insights, and data on how climate change disproportionately affects women and marginalized groups. By highlighting these challenges, Her Climate aims to empower communities to take action, promote gender equality in environmental policies, and advocate for sustainable solutions that benefit all."
},
  {
    image: img2,
    question: 'What is the Gender Inequality Index (GII) and why is it important?',
  answer: 'The Gender Inequality Index (GII) is a measure that reflects gender-based disparities in areas such as health, education, and economic participation. It highlights how unequal access to resources and opportunities affects women compared to men. The GII is important because it helps identify where progress is needed to achieve gender equality and improve the overall well-being of society.',
  },
  {
    image: img3,
    question: 'What is the Female Employment Rate and why does it matter?',
  answer: 'The Female Employment Rate represents the percentage of women actively participating in the labor market, either by being employed or seeking employment. It matters because it reflects women\s economic empowerment and their access to opportunities. A higher female employment rate indicates greater gender equality in the workforce and can lead to economic growth and improved living standards for families.',
  },
  {
    image: img4,
    question: 'What does the Women in Leadership (%) indicator represent?',
  answer: 'The Women in Leadership (%) indicator represents the proportion of women holding leadership positions in various sectors, including government, business, and civil society. It reflects the level of gender equality in decision-making roles and is an important measure of women\'s empowerment in shaping policies and strategies at all levels.',
  },
  {
    image: img5,
    question: 'What are Disaster Programs and why are they important?',
  answer: 'Disaster Programs are organized efforts by governments, organizations, and communities to prepare for, respond to, and recover from natural or man-made disasters. These programs are crucial because they help reduce the impact of disasters, protect lives and property, and promote resilience by ensuring communities are better equipped to handle emergencies.',
  },
  
]);

const openedIndex = ref(1);
</script>

<style lang="scss" scoped></style>
