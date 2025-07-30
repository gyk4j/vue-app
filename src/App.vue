<template>
  <div v-scroll="onScroll">
    <PageHeader v-bind:scrollY="scrollY"></PageHeader>
    <PageBody
      v-bind:hero="hero"
      v-bind:whatWeDo="whatWeDo"
      v-bind:aboutUs="aboutUs">
    </PageBody>
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

import about from './assets/img/about.jpg';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageBody,
    PageFooter,
    ScrollTopButton,
    PreloaderOverlay
  },
  data() {
    return {
      // Replaces toggleScrollTop() in ScrollTopButton.vue using bound data.
      scrollY: window.scrollY,
      hero: {
        title: 'Welcome to Our Lumia',
        subtitle: 'We are team of talented designers making websites with Bootstrap',
        actionText: 'Get Started',
        actionUrl: '#about'
      },
      whatWeDo: {
        title: 'What We Do',
        subtitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        whyTitle: 'Why Choose Our Products?',
        whyBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.',
        actionText: 'Learn More',
        actionUrl: '#',
        reasons: [
          {
            id: 0,
            delay: 0,
            icon: 'bi-clipboard-data',
            title: 'Corporis voluptates officia eiusmod',
            description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
          },
          {
            id: 1,
            delay: 300,
            icon: 'bi-gem',
            title: 'Ullamco laboris ladore pan',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
          },
          {
            id: 2,
            delay: 400,
            icon: 'bi-inboxes',
            title: 'Labore consequatur incidid dolore',
            description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
          },
        ]
      },
      aboutUs: {
        image: about,
        title: 'About Us',
        subtitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        aboutTitle: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
        aboutBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        abouts: [
          {
            id: 0,
            icon: 'bi-diagram-3',
            heading: 'Ullamco laboris nisi ut aliquip consequat',
            text: 'Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade'
          },
          {
            id: 1,
            icon: 'bi-fullscreen-exit',
            heading: 'Magnam soluta odio exercitationem reprehenderi',
            text: 'Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi'
          }
        ],
        aboutEnding: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate' +
          'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in' +
          'culpa qui officia deserunt mollit anim id est laborum',
      }
    }
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
    this.onScroll();

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
}
</script>
