<template>
  <li>
    <a v-bind:href="href" v-bind:class="{ 'active': active }" v-on:click="toggleMobileNav">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'PageHeaderNavMenuLink',
  props: {
    href: {
      type: String,
      required: false,
      default: '#'
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }  
  },
  mounted() {
    /**
     * Toggle mobile nav dropdowns
     */
    // document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    //   navmenu.addEventListener('click', function(e) {
    //     this.toggleDropdown(e)
    //   });
    // });

    /**
     * Hide mobile nav on same-page/hash links
     */
    // document.querySelectorAll('#navmenu a').forEach(navmenu => {
    //   navmenu.addEventListener('click', () => {
    //     if (document.querySelector('.mobile-nav-active')) {
    //       this.mobileNavToogle();
    //     }
    //   });

    // });

    /**
     * Navmenu Scrollspy
     */
    // this.navmenulinks = document.querySelectorAll('.navmenu a');
    // this.navmenuScrollspy();
    // document.addEventListener('scroll', this.navmenuScrollspy);
  },
  methods: {
    toggleMobileNav() {
      this.$emit('toggle-mobile-nav')
    }
  }
}
</script>