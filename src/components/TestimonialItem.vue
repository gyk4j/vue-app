<template>
  <div class="swiper-slide">
    <div class="testimonial-item">
      <img v-bind:src="value.img" class="testimonial-img" alt="">
      <h3>{{ value.name }}</h3>
      <h4>{{ value.role }}</h4>
      <div class="stars">
        <i v-for="(r, idx) in value.rating" v-bind:key="'f'+idx" class="bi bi-star-fill"></i>
        <i v-for="(r, idx) in 5-value.rating" v-bind:key="'e'+idx" class="bi bi-star"></i>
      </div>
      <p>
        <i class="bi bi-quote quote-icon-left"></i>
        <span>{{ value.quote }}</span>
        <i class="bi bi-quote quote-icon-right"></i>
      </p>
    </div>
  </div><!-- End testimonial item -->
</template>

<script>
export default {
  name: 'TestimonialItem',
  props: {
    value: {
      type: Object,
      required: true,
    }
  }
}
</script>
