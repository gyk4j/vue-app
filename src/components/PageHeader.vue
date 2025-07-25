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
          <li><PageHeaderNavMenuLink href="#hero" active text="Home"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#about" text="About"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#services" text="Services"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#portfolio" text="Portfolio"></PageHeaderNavMenuLink></li>
          <li><PageHeaderNavMenuLink href="#team" text="Team"></PageHeaderNavMenuLink></li>
          <li class="dropdown"><PageHeaderNavMenuLink dropdown text="Dropdown"></PageHeaderNavMenuLink>
            <ul>
              <li><PageHeaderNavMenuLink text="Dropdown 1"></PageHeaderNavMenuLink></li>
              <li class="dropdown"><PageHeaderNavMenuLink dropdown text="Deep Dropdown"></PageHeaderNavMenuLink>
                <ul>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 1"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 2"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 3"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 4"></PageHeaderNavMenuLink></li>
                  <li><PageHeaderNavMenuLink text="Deep Dropdown 5"></PageHeaderNavMenuLink></li>
                </ul>
              </li>
              <li><PageHeaderNavMenuLink text="Dropdown 2"></PageHeaderNavMenuLink></li>
              <li><PageHeaderNavMenuLink text="Dropdown 3"></PageHeaderNavMenuLink></li>
              <li><PageHeaderNavMenuLink text="Dropdown 4"></PageHeaderNavMenuLink></li>
            </ul>
          </li>
          <li><PageHeaderNavMenuLink href="#contact" text="Contact"></PageHeaderNavMenuLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
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
  mounted() {
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
  },
  methods: {
    mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.mobileNavToggleBtn.classList.toggle('bi-list');
      this.mobileNavToggleBtn.classList.toggle('bi-x');
    },
  }
}
</script>