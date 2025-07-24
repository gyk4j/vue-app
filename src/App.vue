<template>
  <div v-scroll="onScroll">
    <PageHeader></PageHeader>
    <PageBody></PageBody>
    <PageFooter></PageFooter>
    <ScrollTopButton v-bind:scrollY="scrollY"></ScrollTopButton>
    <PreloaderOverlay></PreloaderOverlay>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageBody from './components/PageBody.vue';
import PageFooter from './components/PageFooter.vue';
import ScrollTopButton from './components/ScrollTopButton.vue';
import PreloaderOverlay from './components/PreloaderOverlay.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageBody,
    PageFooter,
    ScrollTopButton,
    PreloaderOverlay
  },
  mounted() {
    /**
     * Template Name: Lumia
     * Template URL: https://bootstrapmade.com/lumia-bootstrap-business-template/
     * Updated: Aug 07 2024 with Bootstrap v5.3.3
     * Author: BootstrapMade.com
     * License: https://bootstrapmade.com/license/
     */

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    this.toggleScrolled();

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  },
  methods: {
    onScroll() {
      // Update vertical position.
      // Replaces toggleScrollTop() in ScrollTopButton.vue using bound data.
      this.scrollY = window.scrollY;

      this.toggleScrolled()
    },
    toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      this.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    },
  },
  data() {
    return {
      // Replaces toggleScrollTop() in ScrollTopButton.vue using bound data.
      scrollY: window.scrollY
    }
  }
}
</script>
