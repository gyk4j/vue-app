<template>
  <!-- Team Section -->
  <section class="team-15 team section" id="team">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ value.title }}</h2>
      <p>{{ value.subtitle }}</p>
    </div><!-- End Section Title -->

    <div class="content">
      <div class="container">

        <div class="row">

          <div v-for="m in value.members" v-bind:key="m.id" class="col-lg-3 col-md-6 mb-4">
            <div class="person">
              <figure>
                <img v-bind:src="m.img" alt="Image" class="img-fluid">
                <div class="social">
                  <a v-bind:href="m.facebook"><span class="bi bi-facebook"></span></a>
                  <a v-bind:href="m.x"><span class="bi bi-twitter-x"></span></a>
                  <a v-bind:href="m.linkedin"><span class="bi bi-linkedin"></span></a>
                </div>
              </figure>
              <div class="person-contents">
                <h3>{{ m.name }}</h3>
                <span class="position">{{ m.role }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section><!-- /Team Section -->
</template>

<script>
export default {
  name: 'TeamSection',
  props: {
    value: {
      type: Object,
      required: true,
    }
  }
}
</script>
