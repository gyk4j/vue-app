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

        <ContactInfo v-bind:value="value.info"></ContactInfo>
        <ContactForm v-bind:value="value.form"></ContactForm>

      </div>

    </div>

  </section><!-- /Contact Section -->
</template>

<script>
import ContactInfo from './ContactInfo.vue';
import ContactForm from './ContactForm.vue';

export default {
  name: 'ContactSection',
  components: {
    ContactInfo,
    ContactForm,
  },
  props: {
    value: {
      type: Object,
      required: true,
    }
  }
}
</script>
