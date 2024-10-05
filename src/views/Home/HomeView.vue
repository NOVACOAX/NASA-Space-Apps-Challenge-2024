<template>
  <main>
    <HeaderComponent />
    <HeroSection />
    <WelcomeSectionVue />

    <!-- * sub Map -->
     <SubMap/>

    <!-- * Main Map -->
     <MainMap/>

    <FooterComponent/>
  </main>
</template>

<script setup>
import HeroSection from './HeroSection/HeroSection.vue';
import WelcomeSectionVue from './WelcomeSection.vue';
import ImpactSection from './ImpactSection/ImpactSection.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import CustomButton from '../../components/CustomButton.vue';
import { Icon } from '@iconify/vue';
import MainMap from './MainMap.vue';
import SubMap from './subMap.vue';
</script>
