<template>
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
</template>

<script>
export default {
  name: 'ContactInfo',
  props: {
    value: {
      type: Object,
      required: true,
    }
  }
}
</script>
