<template>
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
  }
}

</script>