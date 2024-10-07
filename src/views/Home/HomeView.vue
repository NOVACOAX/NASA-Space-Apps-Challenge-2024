<template>
  <main>
    <HeaderComponent />
    <HeroSection />
    <WelcomeSectionVue />
    
    <!-- * Main Map -->
    <MainMap />

    <!-- * sub Map -->
    <SubMap />

    <!-- * Services -->
    <ServicesView />

    <FooterComponent />
  </main>
</template>

<script setup>
import HeroSection from './HeroSection/HeroSection.vue';
import WelcomeSectionVue from './WelcomeSection.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';
import MainMap from './MainMap.vue';
import SubMap from './subMap.vue';
import ServicesView from './ServicesView.vue';
</script>
