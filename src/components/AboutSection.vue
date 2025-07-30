<template>
  <!-- About Section -->
  <section id="about" class="about section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ value.title }}</h2>
      <p>{{ value.subtitle }}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row gy-3">

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <img v-bind:src="value.image" alt="" class="img-fluid">
        </div>

        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div class="about-content ps-0 ps-lg-3">
            <h3>{{ value.aboutTitle }}</h3>
            <p class="fst-italic">
              {{ value.aboutBody }}
            </p>
            <ul>
              <li v-for="about in value.abouts" v-bind:key="about.id">
                <i class="bi" v-bind:class="about.icon"></i>
                <div>
                  <h4>{{ about.heading }}</h4>
                  <p>{{ about.text }}</p>
                </div>
              </li>
            </ul>
            <p>
              {{ value.aboutEnding }}
            </p>
          </div>

        </div>
      </div>

    </div>

  </section><!-- /About Section -->
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    value: Object
  }
}
</script>