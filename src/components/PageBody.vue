<template>
  <main class="main">
    <HeroSection v-bind:value="app.hero"></HeroSection>
    <WhatWeDoSection v-bind:value="app.whatWeDo"></WhatWeDoSection>
    <AboutSection v-bind:value="app.aboutUs"></AboutSection>
    <SkillsSection></SkillsSection>
    <StatsSection></StatsSection>
    <ServicesSection></ServicesSection>
    <PortfolioSection></PortfolioSection>
    <TestimonialsSection></TestimonialsSection>
    <TeamSection></TeamSection>
    <ContactSection></ContactSection>
  </main>
</template>

<script>
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
    // hero: Object,
    // whatWeDo: Object,
    // aboutUs: Object,
  },
  mounted() {
    /**
     * Animation on scroll function and init
     */
    this.aosInit();
  },
  methods: {
    aosInit() {
      // eslint-disable-next-line
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