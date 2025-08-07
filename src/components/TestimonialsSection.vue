<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section light-background">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ value.title }}</h2>
      <p>{{ value.subtitle }}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="swiper init-swiper">
        <script type="application/json" class="swiper-config">
          {
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
        </script>
        <div class="swiper-wrapper">

          <div v-for="t in value.testimonials" v-bind:key="t.id" class="swiper-slide">
            <div class="testimonial-item">
              <img v-bind:src="t.img" class="testimonial-img" alt="">
              <h3>{{ t.name }}</h3>
              <h4>{{ t.role }}</h4>
              <div class="stars">
                <i v-for="(r, idx) in t.rating" v-bind:key="'f'+idx" class="bi bi-star-fill"></i>
                <i v-for="(r, idx) in 5-t.rating" v-bind:key="'e'+idx" class="bi bi-star"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>{{ t.quote }}</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div><!-- End testimonial item -->

        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>

  </section><!-- /Testimonials Section -->
</template>

<script>
export default {
  name: 'TestimonialsSection',
  props: {
    value: {
      type: Object,
      required: true,
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
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
          // eslint-disable-next-line
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          // eslint-disable-next-line
          new Swiper(swiperElement, config);
        }
      });
    },
  }
}
</script>