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
        <div
          class="p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-9/12"
        >
          <img
            src="https://unsplash.com/photos/4LunKr1gTd8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8Y2hpbGQlMjBzbWlsaW5nfGVufDB8fHx8MTY5NDExMjUwNXww&force=true&w=1920"
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

    <CustomSection
      class="flex flex-col items-center md:flex-row gap-x-12 gap-y-8"
    >
      <div class="w-full sm:w-7/12 md:w-1/2">
        <!-- Need to replace these with the original images from the design  -->
        <div
          class="ms-auto p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-square w-9/12"
        >
          <img
            src="https://unsplash.com/photos/4LunKr1gTd8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8Y2hpbGQlMjBzbWlsaW5nfGVufDB8fHx8MTY5NDExMjUwNXww&force=true&w=1920"
            alt=""
            class="rounded-md w-full h-full aspect-square"
          />
        </div>

        <div
          class="me-auto mt-[-28%] z-10 p-2 md:p-3 rounded-md bg-[rgba(255_180_172_/_0.30)] aspect-[3/2] w-7/12"
        >
          <img
            src="@/assets/hands-in-circle.jpg"
            alt=""
            class="rounded-md w-full h-full aspect-[3/2]"
          />
        </div>
      </div>
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
    </CustomSection>

    <div class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-primary">Deploy faster</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</p>
          </div>
        </div>
      </div>
      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" alt="" />
      </div>
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <Icon icon="line-md:cloud-up" class="mt-1 h-8 w-8 flex-none text-primary" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
              </li>
              <li class="flex gap-x-3">
                <Icon icon="mdi:lock" class="mt-1 h-8 w-8 flex-none text-primary" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
              </li>
              <li class="flex gap-x-3">
                <Icon icon="mdi:usb-flash-drive-outline" class="mt-1 h-8 w-8 flex-none text-primary" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
              </li>
            </ul>
            <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
            <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
            <p class="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
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
