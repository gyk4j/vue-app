<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">Lumia</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><PageHeaderNavMenuLink href="#hero" active text="Home" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#about" text="About" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#services" text="Services" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#portfolio" text="Portfolio" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#team" text="Team" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
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
          <li><PageHeaderNavMenuLink href="#contact" text="Contact" v-bind:mobileNavToogle="mobileNavToogle"></PageHeaderNavMenuLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi"
          v-bind:class="{ 'bi-list': !i_mobileNavToggleBtn, 'bi-x': i_mobileNavToggleBtn }"
          v-on:click="mobileNavToogle"
        >
        </i>
      </nav>

      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
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
  data() {
    return {
      i_mobileNavToggleBtn: false
    }
  },
  mounted() {
    /**
     * Mobile nav toggle
     */
  },
  methods: {
    mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.i_mobileNavToggleBtn = !this.i_mobileNavToggleBtn;
    },
  }
}
</script>