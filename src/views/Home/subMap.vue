<template>
  <section class="px-4 mx-auto sm:px-[2%] md:px-[3%] w-full my-8">
    <CustomSectionHeader
      heading="Understanding the Numbers"
      title="A Deeper Look at Data to Drive Informed Action"
    />
    <div class="flex flex-col-reverse md:flex-row gap-10 md:gap-6 py-10 items-center">
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
            @click="
              openedIndex = index
            "
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
        <img :src="faqs[openedIndex].image" alt="map" class="max-w-[90%] md:h-screen" />
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import img1 from '@/assets/kenya1.png'
import img2 from '@/assets/kenya2.png'

const faqs = ref([
  {
    image: img1,
    question: 'What is This Is Me Community?',
    answer:
      'This Is Me Community is a loving and empowering community of young people dedicated to creating positive change. We strive to make a difference in our communities and uplift each other, fostering a brighter future where everyone feels a sense of belonging and empowerment.',
  },
  {
    image: img2,
    question: 'How can I get involved in This Is Me Community?',
    answer:
      'Getting involved is easy! You can join our events and initiatives, volunteer your time, or support us through donations. Visit our website\'s "Projects" section to explore various opportunities and find the best way for you to contribute.',
  },
  {
    image: img2,
    question: "What impact does This Is Me Community have on children's lives?",
    answer:
      "This Is Me Community has a profound impact on children's lives. Through our unwavering support and love, we create safe spaces for children, protect them from challenges they face, and provide them with the resources they need to thrive in a world filled with compassion and kindness.",
  },
  {
    image: img2,
    question: 'Is This Is Me Community a registered nonprofit organization?',
    answer:
      ' Yes, This Is Me Community is a registered nonprofit organization. We are committed to transparency and accountability, and our mission is to bring positive change to communities while adhering to ethical standards and legal requirements.',
  },
  {
    image: img2,
    question: "How can I support This Is Me Community's mission?",
    answer:
      'You can support our mission in several ways. You can make a one-time or recurring donation, become a volunteer, spread awareness about our initiatives on social media, or participate in our fundraising events. Your support, no matter how small, plays a significant role in making a difference in the lives of those in need.',
  },
]);

const openedIndex = ref(0);
</script>

<style lang="scss" scoped></style>
