<template>
  <main class="main">
    <HeroSection v-bind:value="app.hero"></HeroSection>
    <WhatWeDoSection v-bind:value="app.whatWeDo"></WhatWeDoSection>
    <AboutSection v-bind:value="app.aboutUs"></AboutSection>
    <SkillsSection v-bind:value="app.skills"></SkillsSection>
    <StatsSection v-bind:value="app.stats"></StatsSection>
    <ServicesSection v-bind:value="app.services"></ServicesSection>
    <PortfolioSection v-bind:value="app.portfolio"></PortfolioSection>
    <TestimonialsSection v-bind:value="app.testimonials"></TestimonialsSection>
    <TeamSection v-bind:value="app.team"></TeamSection>
    <ContactSection v-bind:value="app.contact"></ContactSection>
  </main>
</template>

<script>
import AOS from 'aos'

import HeroSection from './HeroSection.vue';
import WhatWeDoSection from './WhatWeDoSection.vue';
import AboutSection from './AboutSection.vue';
import SkillsSection from './SkillsSection.vue';
import StatsSection from './StatsSection.vue';
import ServicesSection from './ServicesSection.vue';
import PortfolioSection from './PortfolioSection.vue';
import TestimonialsSection from './TestimonialsSection.vue';
import TeamSection from './TeamSection.vue';
import ContactSection from './ContactSection.vue';

export default {
  name: 'PageBody',
  components: {
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
  },
  props: {
    app: Object
  },
  mounted() {
    /**
     * Animation on scroll function and init
     */
    this.aosInit();
  },
  methods: {
    aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    },
  }
}

</script>