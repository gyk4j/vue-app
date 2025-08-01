<template>
  <!-- Services Section -->
  <section id="services" class="services section light-background">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ value.title }}</h2>
      <p>{{ value.subtitle }}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-4">

        <div v-for="service in value.services" v-bind:key="service.id" class="col-lg-4 col-md-6" data-aos="fade-up" v-bind:data-aos-delay="(service.id+1) * 100">
          <div class="service-item  position-relative">
            <div class="icon">
              <i class="bi" v-bind:class="service.icon"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>{{ service.title }}</h3>
            </a>
            <p>{{ service.description }}</p>
          </div>
        </div><!-- End Service Item -->

      </div>

    </div>

  </section><!-- /Services Section -->
</template>

<script>
export default {
  name: 'ServicesSection',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>