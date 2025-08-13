<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section light-background">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ value.title }}</h2>
      <p>{{ value.subtitle }}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="swiper init-swiper" v-bind:class="{ 'swiper-tab': swiperTab }" ref="initSwiper">        
        <div class="swiper-wrapper">

          <TestimonialItem v-for="t in value.testimonials" v-bind:key="t.id" v-bind:value="t"></TestimonialItem>

        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>

  </section><!-- /Testimonials Section -->
</template>

<script>
import Swiper from 'swiper/bundle'
import initSwiperWithCustomPagination from 'swiper/bundle'

import TestimonialItem from './TestimonialItem.vue';

export default {
  name: 'TestimonialsSection',
  components: {
     TestimonialItem
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    swiperTab: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    /**
     * Init swiper sliders
     */
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      const swiperElement = this.$refs.initSwiper // ... ref="initSwiper"

      const config = {
        "loop": true,
        "speed": 600,
        "autoplay": {
          "delay": 5000
        },
        "slidesPerView": "auto",
        "pagination": {
          "el": ".swiper-pagination",
          "type": "bullets",
          "clickable": true
        },
        "breakpoints": {
          "320": {
            "slidesPerView": 1,
            "spaceBetween": 40
          },
          "1200": {
            "slidesPerView": 3,
            "spaceBetween": 10
          }
        }
      }       

      if (this.swiperTab) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    },
  }
}
</script>