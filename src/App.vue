<template>
  <div>
    <HeaderNavBar></HeaderNavBar>
    <main class="main">
      <HeroSection></HeroSection>
      <WhatWeDoSection></WhatWeDoSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <StatsSection></StatsSection>
      <ServicesSection></ServicesSection>
      <PortfolioSection></PortfolioSection>
      <TestimonialsSection></TestimonialsSection>
      <TeamSection></TeamSection>
      <ContactSection></ContactSection>
    </main>
    <FooterNavMenu></FooterNavMenu>
    <ScrollTopButton></ScrollTopButton>
    <PreloaderOverlay></PreloaderOverlay>
  </div>
</template>

<script>
import HeaderNavBar from './components/HeaderNavBar.vue';

import HeroSection from './components/HeroSection.vue';
import WhatWeDoSection from './components/WhatWeDoSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import StatsSection from './components/StatsSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import TeamSection from './components/TeamSection.vue';
import ContactSection from './components/ContactSection.vue';

import FooterNavMenu from './components/FooterNavMenu.vue';
import ScrollTopButton from './components/ScrollTopButton.vue';
import PreloaderOverlay from './components/PreloaderOverlay.vue';

export default {
  name: 'App',
  components: {
    HeaderNavBar,
    HeroSection,
    WhatWeDoSection,
    AboutSection,
    SkillsSection,
    StatsSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    TeamSection,
    ContactSection,
    FooterNavMenu,
    ScrollTopButton,
    PreloaderOverlay
  },
  mounted() {
    console.log("*** mounted Started")

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
    document.addEventListener('scroll', this.toggleScrolled);
    window.addEventListener('load', this.toggleScrolled);

    /**
     * Mobile nav toggle
     */
    this.mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    this.mobileNavToggleBtn.addEventListener('click', this.mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          this.mobileNavToogle();
        }
      });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    /**
     * Preloader
     */
    this.preloader = document.querySelector('#preloader');
    if (this.preloader) {
      window.addEventListener('load', () => {
        this.preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    this.scrollTop = document.querySelector('.scroll-top');

    this.scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('load', this.toggleScrollTop);
    document.addEventListener('scroll', this.toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    window.addEventListener('load', this.aosInit);

    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      // eslint-disable-next-line
      new Waypoint({
        element: item,
        offset: '80%',
        // eslint-disable-next-line
        handler: function(direction) {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });

    /**
     * Initiate Pure Counter
     */
    // eslint-disable-next-line
    new PureCounter();

    /**
     * Initiate glightbox
     */
    // eslint-disable-next-line
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      // eslint-disable-next-line
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        // eslint-disable-next-line
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      // eslint-disable-next-line
      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            this.aosInit();
          }
        }.bind(this), false);
      }.bind(this));

    });

    /**
     * Init swiper sliders
     */
     window.addEventListener("load", this.initSwiper);

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    // eslint-disable-next-line
    window.addEventListener('load', function(e) {
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
    });

    /**
     * Navmenu Scrollspy
     */
    this.navmenulinks = document.querySelectorAll('.navmenu a');
    window.addEventListener('load', this.navmenuScrollspy);
    document.addEventListener('scroll', this.navmenuScrollspy);

    console.log("*** mounted Ended")
  },
  methods: {
    toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    },
    mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.mobileNavToggleBtn.classList.toggle('bi-list');
      this.mobileNavToggleBtn.classList.toggle('bi-x');
    },
    toggleScrollTop() {
      if (this.scrollTop) {
        window.scrollY > 100 ? this.scrollTop.classList.add('active') : this.scrollTop.classList.remove('active');
      }
    },
    aosInit() {
      // eslint-disable-next-line
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    },
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
    navmenuScrollspy() {
      this.navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
  }
}
</script>
