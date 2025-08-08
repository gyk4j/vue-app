<template>
  <div class="col-lg-4 col-md-6 portfolio-item isotope-item" v-bind:class="filterClass(value)">
    <img v-bind:src="value.img" class="img-fluid" alt="">
    <div class="portfolio-info">
      <h4>{{ value.name }}</h4>
      <p>{{ value.description }}</p>
      <a v-bind:href="value.img" v-bind:title="value.name" data-gallery="dataGallery(value)" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
      <a v-bind:href="value.url" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
    </div>
  </div><!-- End Portfolio Item -->
</template>

<script>
export default {
  name: 'PortfolioIsotopeItem',
  props: {
    // Project object
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    filterClass: function(project) {
      return 'filter-' + project.filter
    },
    dataGallery: function(project) {
      return 'portfolio-gallery-' + project.filter
    }
  },
}
</script>
