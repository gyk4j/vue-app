<template>
  <div>
    <HeaderNavBar></HeaderNavBar>
    <main class="main">
      <HeroSection></HeroSection>
      <WhatWeDoSection></WhatWeDoSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <StatsSection></StatsSection>
      <ServicesSection></ServicesSection>
      <PortfolioSection></PortfolioSection>
      <TestimonialsSection></TestimonialsSection>
      <TeamSection></TeamSection>
      <ContactSection></ContactSection>
    </main>
    <FooterNavMenu></FooterNavMenu>
    <ScrollTopButton></ScrollTopButton>
    <PreloaderOverlay></PreloaderOverlay>
  </div>
</template>

<script>
import HeaderNavBar from './components/HeaderNavBar.vue';

import HeroSection from './components/HeroSection.vue';
import WhatWeDoSection from './components/WhatWeDoSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import StatsSection from './components/StatsSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import TeamSection from './components/TeamSection.vue';
import ContactSection from './components/ContactSection.vue';

import FooterNavMenu from './components/FooterNavMenu.vue';
import ScrollTopButton from './components/ScrollTopButton.vue';
import PreloaderOverlay from './components/PreloaderOverlay.vue';

export default {
  name: 'App',
  components: {
    HeaderNavBar,
    HeroSection,
    WhatWeDoSection,
    AboutSection,
    SkillsSection,
    StatsSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    TeamSection,
    ContactSection,
    FooterNavMenu,
    ScrollTopButton,
    PreloaderOverlay
  }
}
</script>
