<template>
  <div
    class="isotope-layout"
    v-bind:data-default-filter="filter"
    v-bind:data-layout="layout"
    v-bind:data-sort="sort">

    <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
      <li
        v-for="f in value.filters" 
        v-bind:key="f.id" 
        v-bind:data-filter="f.filter" 
        v-bind:class="{ 'filter-active': f.filter===filter }"
        v-on:click="onClickFilter(f)">
        {{ f.text }}
      </li>
    </ul><!-- End Portfolio Filters -->

    <div class="row gy-4 isotope-container" ref="isotopeContainer" data-aos="fade-up" data-aos-delay="200">

      <PortfolioIsotopeItem v-for="project in value.projects" v-bind:key="project.id" v-bind:value="project"></PortfolioIsotopeItem>

    </div><!-- End Portfolio Container -->

  </div>
</template>

<script>
import GLightbox from 'glightbox'
import imagesLoaded from 'imagesloaded'
import Isotope from 'isotope-layout'

import PortfolioIsotopeItem from './PortfolioIsotopeItem.vue';

export default {
  name: 'PortfolioIsotopeLayout',
  components: {
    PortfolioIsotopeItem
  },
  data() {
    return {
      layout: 'masonry',
      filter: '*',
      sort: 'original-order',
      initIsotope: null,
    }
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  mounted() {

    /**
     * Initiate glightbox
     */
    /* const glightbox = */ GLightbox({
      selector: '.glightbox'
    });

    /**
     * Init isotope layout and filters
     */
    imagesLoaded(this.$refs.isotopeContainer, this.onImagesLoaded);
  },
  methods: {
    onImagesLoaded: function() {
      this.initIsotope = new Isotope(this.$refs.isotopeContainer, {
        itemSelector: '.isotope-item',
        layoutMode: this.layout,
        filter: this.filter,
        sortBy: this.sort
      });
    },
    onClickFilter: function(filter) {
      this.filter = filter.filter
      
      this.initIsotope.arrange({
        filter: this.filter
      });
      if (typeof aosInit === 'function') {
        this.aosInit();
      }
    }
  }
}
</script>
