<template>
  <a v-if="!dropdown" 
    v-bind:href="href" 
    v-bind:class="{ 'active': active }"
    v-on:click="toggleMobileNav"
  >
    {{ text }}
  </a>
  <a v-else 
    href="#" 
    v-bind:class="{ 'active': active }"
    v-on:click="toggleMobileNav"
  >
    <span 
      v-bind:class="{ 'dropdown-active': dropdownActive }">
      {{ text }}
    </span>
    <i class="bi bi-chevron-down toggle-dropdown" 
      v-on:click="toggleDropDown">
    </i>
  </a>
</template>

<script>
export default {
  name: 'PageHeaderNavMenuLink',
  props: {
    dropdown: {
      type: Boolean,
      required: false,
      default: false
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    mobileNavToogle: {
      type: Function,
      required: true
    },    
  },
  data() {
    return {
      dropdownActive: false
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
    toggleDropDown(/* e */) {
      // e.preventDefault();      
      this.dropdownActive = !this.dropdownActive;
      // e.stopImmediatePropagation();
    },
    toggleMobileNav() {
      if (this.mobileNavToogle){
        this.mobileNavToogle()
      } else {
        console.log("Click ignored.")
      }
    }
  }
}
</script>