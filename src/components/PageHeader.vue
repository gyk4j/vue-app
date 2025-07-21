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
          <li><a href="#hero" class="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
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
export default {
  name: 'PageHeader',
  components: {
    
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
     * Navmenu Scrollspy
     */
    this.navmenulinks = document.querySelectorAll('.navmenu a');
    this.navmenuScrollspy();
    document.addEventListener('scroll', this.navmenuScrollspy);
  },
  methods: {
    mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.mobileNavToggleBtn.classList.toggle('bi-list');
      this.mobileNavToggleBtn.classList.toggle('bi-x');
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