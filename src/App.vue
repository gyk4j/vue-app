<template>
  <div v-scroll="onScroll">
    <PageHeader v-bind:scrollY="scrollY"></PageHeader>
    <PageBody v-bind:app="sections"></PageBody>
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
      },
      skills: {
        skills: [
          {
            id: 0,
            name: 'HTML',
            value: 100
          },
          {
            id: 1,
            name: 'CSS',
            value: 90
          },
          {
            id: 2,
            name: 'JavaScript', 
            value: 75
          },
          {
            id: 3,
            name: 'PHP',
            value: 80
          },
          {
            id: 4,
            name: 'WordPress/CMS', 
            value: 90
          },
          {
            id: 5,
            name: 'Photoshop',
            value: 55
          },
        ]
      },
      stats: {
        stats: [
          {
            id: 0,
            name: 'Clients',
            value: 232
          },
          {
            id: 1,
            name: 'Projects',
            value: 521
          },
          {
            id: 2,
            name: 'Hours Of Support',
            value: 1453
          },
          {
            id: 3,
            name: 'Workers',
            value: 32
          },
        ]
      },
      services: {
        title: 'Services',
        subtitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        services: 
        [
          {
            id: 0,
            icon: 'bi-activity',
            title: 'Nesciunt Mete',
            description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'
          },
          {
            id: 1,
            icon: 'bi-broadcast',
            title: 'Eosle Commodi',
            description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.'
          },
          {
            id: 2,
            icon: 'bi-easel',
            title: 'Ledo Markt',
            description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.'
          },
          {
            id: 3,
            icon: 'bi-bounding-box-circles',
            title: 'Asperiores Commodit',
            description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.'
          },
          {
            id: 4,
            icon: 'bi-calendar4-week',
            title: 'Velit Doloremque',
            description: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.'
          },
          {
            id: 5,
            icon: 'bi-chat-square-text',
            title: 'Dolori Architectozzz',
            description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.'
          },
        ]
      },
    }
  },
  computed: {
    sections: function(){
      return {
        hero: this.hero, 
        whatWeDo: this.whatWeDo, 
        aboutUs: this.aboutUs,
        skills: this.skills,
        stats: this.stats,
        services: this.services,
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
