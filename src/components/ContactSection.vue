<template>
  <!-- Contact Section -->
  <section id="contact" class="contact section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ value.title }}</h2>
      <p>{{ value.subtitle }}</p>
    </div><!-- End Section Title -->

    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-5">
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>{{ value.address }}</p>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>{{ value.phone }}</p>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>{{ value.email }}</p>
            </div>
          </div><!-- End Info Item -->

        </div>

        <div class="col-lg-7">
          <form v-bind:action="value.formAction" v-bind:method="value.formMethod" class="php-email-form" data-aos="fade-up" data-aos-delay="500">
            <div class="row gy-4">

              <div class="col-md-6">
                <input type="text" name="name" class="form-control" v-bind:placeholder="value.formName" required="">
              </div>

              <div class="col-md-6 ">
                <input type="email" class="form-control" name="email" v-bind:placeholder="value.formEmail" required="">
              </div>

              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" v-bind:placeholder="value.formSubject" required="">
              </div>

              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" v-bind:placeholder="value.formMessage" required=""></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>

                <button type="submit">Send Message</button>
              </div>

            </div>
          </form>
        </div><!-- End Contact Form -->

      </div>

    </div>

  </section><!-- /Contact Section -->
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    value: {
      type: Object,
      required: true,
    }
  }
}
</script>
