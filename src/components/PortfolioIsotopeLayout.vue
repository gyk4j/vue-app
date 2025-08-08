<template>
  <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

    <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
      <template v-for="f in value.filters">
        <li v-bind:key="f.id" v-bind:data-filter="f.filter" v-bind:class="{ 'filter-active': f.filter==='*' }">{{ f.text }}</li>
      </template>
    </ul><!-- End Portfolio Filters -->

    <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

      <PortfolioIsotopeItem v-for="project in value.projects" v-bind:key="project.id" v-bind:value="project"></PortfolioIsotopeItem>

    </div><!-- End Portfolio Container -->

  </div>
</template>

<script>
import PortfolioIsotopeItem from './PortfolioIsotopeItem.vue';

export default {
  name: 'PortfolioIsotopeLayout',
  components: {
    PortfolioIsotopeItem
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
    // eslint-disable-next-line
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      // eslint-disable-next-line
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        // eslint-disable-next-line
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      // eslint-disable-next-line
      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            this.aosInit();
          }
        }, false);
      });

    });
  }
}
</script>
