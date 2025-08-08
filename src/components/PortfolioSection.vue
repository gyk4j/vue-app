<template>
  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ value.title }}</h2>
      <p>{{  value.subtitle }}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <PortfolioIsotopeLayout v-bind:value="isotope"></PortfolioIsotopeLayout>

    </div>

  </section><!-- /Portfolio Section -->
</template>

<script>
import PortfolioIsotopeLayout from './PortfolioIsotopeLayout.vue';

export default {
  name: 'PortfolioSection',
  components: {
    PortfolioIsotopeLayout
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    isotope: function() {
      return {
        filters: this.value.filters,
        projects: this.value.projects
      }
    }
  }
}
</script>