<template>
  <!-- Stats Section -->
  <section id="stats" class="stats section">

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div v-for="stat in value.stats" v-bind:key="stat.id" class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" v-bind:data-purecounter-end="stat.value" data-purecounter-duration="1" class="purecounter"></span>
            <p>{{ stat.name }}</p>
          </div>
        </div><!-- End Stats Item -->

      </div>

    </div>

  </section><!-- /Stats Section -->
</template>

<script>
export default {
  name: 'StatsSection',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  mounted() {
    /**
     * Initiate Pure Counter
     */
    // eslint-disable-next-line
    new PureCounter();
  }
}
</script>