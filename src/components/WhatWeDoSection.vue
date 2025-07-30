<template>
  <!-- What We Do Section -->
  <section id="what-we-do" class="what-we-do section">

  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <h2>{{ value.title }}</h2>
    <p>{{  value.subtitle }}</p>
  </div><!-- End Section Title -->

  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div class="why-box">
          <h3>{{ value.whyTitle }}</h3>
          <p>
            {{ value.whyBody }}
          </p>
          <div class="text-center">
            <a v-bind:href="value.actionUrl" class="more-btn"><span>{{ value.actionText }}</span> <i class="bi bi-chevron-right"></i></a>
          </div>
        </div>
      </div><!-- End Why Box -->

      <div class="col-lg-8 d-flex align-items-stretch">

        <div class="row gy-4">

          <div v-for="reason in value.reasons" v-bind:key="reason.id" class="col-xl-4" data-aos="fade-up" v-bind:data-aos-delay="reason.delay">
            <div class="icon-box d-flex flex-column justify-content-center align-items-center">
              <i class="bi" v-bind:class="reason.icon"></i>
              <h4>{{ reason.title }}</h4>
              <p>{{ reason.description }}</p>
            </div>
          </div><!-- End Icon Box -->

        </div>
      </div>

    </div>

  </div>

</section><!-- /What We Do Section -->
</template>

<script>
export default {
  name: 'WhatWeDoSection',
  props: {
    value: Object   
  }
}
</script>