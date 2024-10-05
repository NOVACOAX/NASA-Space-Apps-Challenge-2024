<template>
  <footer class="pt-1 xs:pt-4 bg-tertiary-on-container text-tertiary-container">
    <CustomSection class="flex flex-wrap justify-between max-w-md gap-6 md:max-w-full">
      <LogoDescription class="w-full lg:w-56" />
      <QuickLinks class="" />
      <LegalLinks class="" />
      <Newsletter class="w-full md:max-w-fit" />
    </CustomSection>

    <div class="container p-4 mx-auto text-label-small text-center border-t border-tertiary">
      Designed and developed by
      <a class="underline text-outline-variant" href="https://github.com/NOVACOAX">Novacoax</a>
    </div>
  </footer>
</template>

<script setup>
import CustomSection from '../CustomSection/CustomSection.vue';
import { RouterLink } from 'vue-router';
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '@/../node_modules/vue3-marquee-slider/dist/style.css'

import LogoDescription from './LogoDescription.vue';
import QuickLinks from './QuickLinks.vue';
import LegalLinks from './LegalLinks.vue';
import Newsletter from './Newsletter.vue';
import { computed, ref } from 'vue';

const props = defineProps({
  showSponsors: {
    type: Boolean,
    default: true,
  },
});

const sponsors = ref([
  {
    img: 'https://cdn.freebiesupply.com/logos/large/2x/nike-3-logo-png-transparent.png',
    id: '',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/youtube-logo-png-images-0.png',
    id: '',
  },
  {
    img: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png',
    id: '',
  },
  {
    img: 'https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-Black.png',
    id: '',
  },
  {
    img: 'https://seeklogo.com/images/B/bmw-logo-B2F1DD0D82-seeklogo.com.png?v=638133579310000000',
    id: '',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    id: '',
  },
  // {
  //   img: 'https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png',
  //   id: '',
  // },
  // {
  //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1024px-Samsung_Logo.svg.png',
  //   id: '',
  // },
]);

const splitSponsors = computed(() => {
  const originalSponsors = sponsors.value;
  const sponsorsArray1 = originalSponsors.slice(
    0,
    Math.ceil(originalSponsors.length / 2)
  );
  const sponsorsArray2 = originalSponsors.slice(
    Math.ceil(originalSponsors.length / 2)
  );

  return [sponsorsArray1, sponsorsArray2];
});
</script>
<style lang="scss" scoped>

  img:hover {
    transform: scale(1.1) translateZ(90px) !important;
  }


</style>
