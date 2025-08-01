<template>
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <img src="../assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div class="container text-center" data-aos="fade-up" data-aos-delay="100">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2>{{ value.title }}</h2>
            <p>{{ value.subtitle }}</p>
            <a v-bind:href="value.actionUrl" class="btn-get-started">{{ value.actionText }}</a>
          </div>
        </div>
      </div>

    </section><!-- /Hero Section -->
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    value: {
      type: Object,
      required: true, 
    }
  }
}
</script>