<template>
  <section class="w-full bg-[rgb(37,42,52)] bg-opacity-90 flex flex-col gap-7 items-center py-10 px-3 text-surface">
    <div class="flex flex-col gap-1 items-center">
      <div class="flex items-center gap-3 font-medium">
        <hr class="flex-1 max-w-[5rem] border-[1.5px] border-tertiary-container rounded-full opacity-75 w-28" />
        <h2 class="text-surface-on-inverse text-label-large">Our Testimonials</h2>
        <hr class="flex-1 max-w-[5rem] border-[1.5px] border-tertiary-container rounded-full opacity-75" />
      </div>
      <h3 class="text-title-large sm:text-display-small font-display">What People Say</h3>
    </div>
    <div class="flex w-full gap-1 max-w-[1000px] sm:px-10">
      <div class="text-tertiary-container bg-tertiary-on-container md:p-1 rounded-full h-fit" @click="prev">
        <Icon icon="material-symbols:chevron-left-rounded" height="2rem" />
      </div>
      <div class="grow flex flex-col items-center gap-3 relative">
        <img class="w-20 md:w-24 h-20 md:h-24 rounded-full border-2 border-tertiary-container"
          :src="testimonials[currentTestimonial].image" />
        <div class="flex flex-col gap-1 items-center">
          <p class="font-display text-title-medium">{{ testimonials[currentTestimonial].name }}</p>
          <p class="text-title-small">{{ testimonials[currentTestimonial].job }}</p>
        </div>
        <p class="text-center">{{ testimonials[currentTestimonial].testimonial }}</p>
        <img class="absolute bottom-[20%] sm:-bottom-1" src="@/assets/left-quotes-sign.png" alt=".">
      </div>
      <div class="text-tertiary-container bg-tertiary-on-container md:p-1 rounded-full h-fit" @click="next">
        <Icon icon="material-symbols:chevron-right-rounded" height="2rem" />
      </div>
    </div>
    <div class="flex gap-2">
      <div v-for="testimonial in testimonials" :key="testimonial" class="bg-tertiary-container rounded-full h-1 w-6" 
      :class="{ '!bg-tertiary-on-container': testimonials.indexOf(testimonial) === currentTestimonial }"></div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const testimonials = [
  {
    name: 'Cameron Williamson 1',
    job: 'Founder',
    testimonial: `Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. 
    Minnow snoek icefish velvet-belly shark, Californiahalibut round stingray northern sea robin. 
    Southern grayling trout-perchSharksucker sea toad candiru rocket danio tilefish stingray deepwater 
    stingray Sacramento splittail, Canthigaster rostrata.`,
    image: `https://images.unsplash.com/photo-1680392383212-da9f0012fff8?auto=format&fit=crop&q=80&w=1327&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    name: 'Cameron Williamson 2',
    job: 'Founder',
    testimonial: `Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. 
    Minnow snoek icefish velvet-belly shark, Californiahalibut round stingray northern sea robin. 
    Southern grayling trout-perchSharksucker sea toad candiru rocket danio tilefish stingray deepwater 
    stingray Sacramento splittail, Canthigaster rostrata.`,
    image: `https://images.unsplash.com/photo-1689997665293-c798b812a244?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    name: 'Cameron Williamson 3',
    job: 'Founder',
    testimonial: `Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. 
    Minnow snoek icefish velvet-belly shark, Californiahalibut round stingray northern sea robin. 
    Southern grayling trout-perchSharksucker sea toad candiru rocket danio tilefish stingray deepwater 
    stingray Sacramento splittail, Canthigaster rostrata.`,
    image: `https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
]
const currentTestimonial = ref(0);

const next = () => {
  if (currentTestimonial.value === (testimonials.length - 1)) {
    currentTestimonial.value = 0;
  } else {
    currentTestimonial.value = currentTestimonial.value + 1;
  }
}

const prev = () => {
  if (currentTestimonial.value === 0) {
    currentTestimonial.value = testimonials.length - 1;
  } else {
    currentTestimonial.value = currentTestimonial.value - 1;
  }
}

</script>

<style lang="scss" scoped></style>