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
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        filters:
        [
          {
            id: 0,
            filter: '*',
            text: 'All'
          },
          {
            id: 1,
            filter: '.filter-app',
            text: 'App'
          },
          {
            id: 2,
            filter: '.filter-product',
            text: 'Product'
          },
          {
            id: 3,
            filter: '.filter-branding',
            text: 'Branding'
          },
          {
            id: 4,
            filter: '.filter-books',
            text: 'Books'
          },
        ],
        projects:
        [
          {
            id: 0,
            filter: 'app',
            img: 'assets/img/portfolio/app-1.jpg',
            name: 'App 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 1,
            filter: 'product',
            img: 'assets/img/portfolio/product-1.jpg',
            name: 'Product 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 2,
            filter: 'branding',
            img: 'assets/img/portfolio/branding-1.jpg',
            name: 'Branding 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 3,
            filter: 'books',
            img: 'assets/img/portfolio/books-1.jpg',
            name: 'Books 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 4,
            filter: 'app',
            img: 'assets/img/portfolio/app-2.jpg',
            name: 'App 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 5,
            filter: 'product',
            img: 'assets/img/portfolio/product-2.jpg',
            name: 'Product 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 6,
            filter: 'branding',
            img: 'assets/img/portfolio/branding-2.jpg',
            name: 'Branding 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 7,
            filter: 'books',
            img: 'assets/img/portfolio/books-2.jpg',
            name: 'Books 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 8,
            filter: 'app',
            img: 'assets/img/portfolio/app-3.jpg',
            name: 'App 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 9,
            filter: 'product',
            img: 'assets/img/portfolio/product-3.jpg',
            name: 'Product 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 10,
            filter: 'branding',
            img: 'assets/img/portfolio/branding-3.jpg',
            name: 'Branding 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
          {
            id: 11,
            filter: 'books',
            img: 'assets/img/portfolio/books-3.jpg',
            name: 'Books 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            url: 'portfolio-details.html',
          },
        ],
      },
      testimonials: {
        title: 'Testimonials',
        subtitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        testimonials:
        [
          {
            id: 0,
            img: 'assets/img/testimonials/testimonials-1.jpg',
            name: 'Saul Goodman',
            role: 'Ceo & Founder',
            rating: 5,
            quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
          },
          {
            id: 1,
            img: 'assets/img/testimonials/testimonials-2.jpg',
            name: 'Sara Wilsson',
            role: 'Designer',
            rating: 4,
            quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
          },
          {
            id: 2,
            img: 'assets/img/testimonials/testimonials-3.jpg',
            name: 'Jena Karlis',
            role: 'Store Owner',
            rating: 3,
            quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
          },
          {
            id: 3,
            img: 'assets/img/testimonials/testimonials-4.jpg',
            name: 'Matt Brandon',
            role: 'Freelancer',
            rating: 2,
            quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
          },
          {
            id: 4,
            img: 'assets/img/testimonials/testimonials-5.jpg',
            name: 'John Larson',
            role: 'Entrepreneur',
            rating: 1,
            quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
          },
        ]
      },
      team: {
        title: 'Team',
        subtitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        members:
        [
          {
            id: 0,
            img: 'assets/img/team/team-1.jpg',
            name: 'Joshua Stefan',
            role: 'Web Development',
            facebook: '#',
            x: '#',
            linkedin: '#',
          },
          {
            id: 1,
            img: 'assets/img/team/team-2.jpg',
            name: 'Sheena Anderson',
            role: 'Marketing',
            facebook: '#',
            x: '#',
            linkedin: '#',
          },
          {
            id: 2,
            img: 'assets/img/team/team-3.jpg',
            name: 'Evan Smith',
            role: 'Content',
            facebook: '#',
            x: '#',
            linkedin: '#',
          },
          {
            id: 3,
            img: 'assets/img/team/team-4.jpg',
            name: 'Kaylie Jones',
            role: 'Accountant',
            facebook: '#',
            x: '#',
            linkedin: '#',
          },
        ]
      },
      contact: {
        title: 'Contact',
        subtitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        info: {
          address: 'A108 Adam Street, New York, NY 535022',
          phone: '+1 5589 55488 55',
          email: 'info@example.com',
        },
        form: {
          action: 'forms/contact.php',
          method: 'post',
          name: 'Your Name',
          email: 'Your Email',
          subject: 'Subject',
          message: 'Message',
        },
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
        portfolio: this.portfolio,
        testimonials: this.testimonials,
        team: this.team,
        contact: this.contact,
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
