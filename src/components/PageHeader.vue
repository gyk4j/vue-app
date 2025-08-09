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
          <li v-for="(a, ia) in value.navmenu" v-bind:key="ia">
            <PageHeaderNavMenuLink v-bind:href="a.url" v-bind:active="activated(a.url)" v-bind:text="a.text" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink>
          </li>
          <!--
          <li><PageHeaderNavMenuLink href="#hero" v-bind:active="active" text="Home" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>          
          <li><PageHeaderNavMenuLink href="#about" v-bind:active="active" text="About" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#services" v-bind:active="active" text="Services" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#portfolio" v-bind:active="active" text="Portfolio" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>          
          <li><PageHeaderNavMenuLink href="#team" v-bind:active="active" text="Team" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>          
          <li class="dropdown"><PageHeaderNavMenuLink dropdown text="Dropdown" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink>
            <ul>
              <li><PageHeaderNavMenuLink text="Dropdown 1" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
              <li class="dropdown"><PageHeaderNavMenuLink dropdown text="Deep Dropdown" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink>
                <ul>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 1" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 2" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 3" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 4" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 5" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
                </ul>
              </li>
              <li><PageHeaderNavMenuLink text="Dropdown 2" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
              <li><PageHeaderNavMenuLink text="Dropdown 3" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
              <li><PageHeaderNavMenuLink text="Dropdown 4" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
            </ul>
          </li>          
          <li><PageHeaderNavMenuLink href="#contact" v-bind:active="active" text="Contact" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
          -->
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

export default {
  name: 'PageHeader',
  components: {
    PageHeaderNavMenuLink
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
    activated: function() {
      return (hash) => {
        let active = hash === this.active
        // console.log(`activated: ${hash} === ${this.active} = ${active}`)
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