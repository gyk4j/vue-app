<template>
  <a v-if="!dropdown" 
    v-bind:href="href" 
    v-bind:class="navmenuScrollspy"
    v-on:click="toggleMobileNav"
  >
    {{ text }}
  </a>
  <a v-else 
    href="#" 
    v-bind:class="navmenuScrollspy"
    v-on:click="toggleMobileNav"
  >
    <span 
      v-bind:class="{ 'dropdown-active': i_dropdownActive }">
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
    scrollY: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      // i_active: this.active,
      i_dropdownActive: false
    }
  },
  computed: {
    hash: function() {
      return this.href.trim().startsWith('#')? this.href.trim(): ''
    },
    navmenuScrollspy: function() {      
      let position = this.scrollY + 200;
      let i_active = false
      // if (!this.hash) {
      //   i_active = false
      // }
      let section = document.querySelector((!this.hash)? '#hero' : this.hash);
      if (!section) {
        i_active = false
      } else {
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          i_active = true
        } else {
          i_active = false
        }
      }

      return {
        'active': i_active
      }
    },
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
      // this.i_active = !this.i_active;
      this.i_dropdownActive = !this.i_dropdownActive;
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