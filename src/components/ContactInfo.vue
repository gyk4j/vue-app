<template>
  <div class="col-lg-5">
    <div v-for="(contact, idx) in value" v-bind:key="idx" class="info-item d-flex" data-aos="fade-up" v-bind:data-aos-delay="contact.delay">
      <i class="bi flex-shrink-0" v-bind:class="contact.icon"></i>
      <div>
        <h3>{{ contact.key }}</h3>
        <p>{{ contact.value }}</p>
      </div>
    </div><!-- End Info Item -->

  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  props: {
    value: {
      type: Array,
      required: true,
    }
  }
}
</script>
