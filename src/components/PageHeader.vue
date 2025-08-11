<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">{{ value.siteName }}</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <!--
          <PageHeaderNavMenuLink 
            v-for="(a, ia) in value.navmenu" 
            v-bind:key="ia" 
            v-bind:href="a.url" 
            v-bind:active="isVisible(a.url)"  
            v-on:toggle-mobile-nav="mobileNavToogle">
            {{ a.text }}
          </PageHeaderNavMenuLink>
          -->
          <!-- Begin -->
          <PageHeaderNavMenuLink href="#hero" v-bind:active="isVisible('#hero')" v-on:toggle-mobile-nav="mobileNavToogle">Home</PageHeaderNavMenuLink>
          <PageHeaderNavMenuLink href="#about" v-bind:active="isVisible('#about')" v-on:toggle-mobile-nav="mobileNavToogle">About</PageHeaderNavMenuLink>
          <PageHeaderNavMenuLink href="#services" v-bind:active="isVisible('#services')" v-on:toggle-mobile-nav="mobileNavToogle">Services</PageHeaderNavMenuLink>
          <PageHeaderNavMenuLink href="#portfolio" v-bind:active="isVisible('#portfolio')" v-on:toggle-mobile-nav="mobileNavToogle">Portfolio</PageHeaderNavMenuLink>
          <PageHeaderNavMenuLink href="#team" v-bind:active="isVisible('#team')" v-on:toggle-mobile-nav="mobileNavToogle">Team</PageHeaderNavMenuLink>
          <PageHeaderNavMenuDropdown text="Dropdown" v-on:toggle-mobile-nav="mobileNavToogle">
            <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Dropdown 1</PageHeaderNavMenuLink>
            <PageHeaderNavMenuDropdown text="Deep Dropdown" v-on:toggle-mobile-nav="mobileNavToogle">
              <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Deep Dropdown 1</PageHeaderNavMenuLink>
              <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Deep Dropdown 2</PageHeaderNavMenuLink>
              <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Deep Dropdown 3</PageHeaderNavMenuLink>
              <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Deep Dropdown 4</PageHeaderNavMenuLink>
              <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Deep Dropdown 5</PageHeaderNavMenuLink>
            </PageHeaderNavMenuDropdown>
            <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Dropdown 2</PageHeaderNavMenuLink>
            <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Dropdown 3</PageHeaderNavMenuLink>
            <PageHeaderNavMenuLink v-on:toggle-mobile-nav="mobileNavToogle">Dropdown 4</PageHeaderNavMenuLink>
          </PageHeaderNavMenuDropdown>          
          <PageHeaderNavMenuLink href="#contact" v-bind:active="isVisible('#contact')" v-on:toggle-mobile-nav="mobileNavToogle">Contact</PageHeaderNavMenuLink>
          <!-- End -->
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi"
          v-bind:class="{ 'bi-list': !mobileNavToggleBtn, 'bi-x': mobileNavToggleBtn }"
          v-on:click="mobileNavToogle"
        >
        </i>
      </nav>

      <div class="header-social-links">
        <a v-for="(s, is) in value.social" v-bind:key="is" v-bind:href="s.url" v-bind:class="s.class"><i class="bi" v-bind:class="s.icon"></i></a>
        <!--
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        -->
      </div>

    </div>
  </header>
</template>

<script>
import PageHeaderNavMenuLink from './PageHeaderNavMenuLink.vue';
import PageHeaderNavMenuDropdown from './PageHeaderNavMenuDropdown.vue';

export default {
  name: 'PageHeader',
  components: {
    PageHeaderNavMenuLink,
    PageHeaderNavMenuDropdown
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    scrollY: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      active: '#hero',
      mobileNavToggleBtn: false
    }
  },
  computed: {
    isVisible: function() {
      return (hash) => {
        let active = hash === this.active
        // console.log(`isVisible: ${hash} === ${this.active} = ${active}`)
        return active
      }
    }
  },
  watch: {
    scrollY: function(val) {
      this.navmenuScrollspy(val)
    }
  },
  mounted() {
    /**
     * Mobile nav toggle
     */
  },
  methods: { 
    navmenuScrollspy: function(scrollY) {
      // console.log("navmenuScrollspy: scrollY = " + scrollY + ", active = " + this.active)
      this.value.navmenu.forEach(navmenulink => {
        if (!navmenulink.url.startsWith('#')) return;
        let section = document.querySelector(navmenulink.url);
        if (!section) return;
        let position = scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          this.active = navmenulink.url
        } else {
          // Do nothing.
        }
      })
    },
    mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.mobileNavToggleBtn = !this.mobileNavToggleBtn;
    },
  }
}
</script>