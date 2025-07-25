<template>
  <a v-if="!dropdown" v-bind:href="href" v-bind:class="{ 'active': i_active }">{{ text }}</a>
  <a v-else href="#" v-bind:class="{ active: i_active }"><span v-bind:class="{ 'dropdown-active': i_dropdownActive }">{{ text }}</span> <i class="bi bi-chevron-down toggle-dropdown" v-on:click="toggleDropDown"></i></a>
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
  },
  data() {
    return {
      i_active: this.active,
      i_dropdownActive: false
    }
  },
  computed: {
    hash: function() {
      return this.href.trim().startsWith('#')? this.href.trim(): ''
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
     * Navmenu Scrollspy
     */
    // this.navmenulinks = document.querySelectorAll('.navmenu a');
    // this.navmenuScrollspy();
    // document.addEventListener('scroll', this.navmenuScrollspy);
  },
  methods: {
    navmenuScrollspy() {
      if (!this.hash) return;
      let section = document.querySelector(this.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        this.i_active = true
      } else {
        this.i_active = false
      }
    },
    toggleDropDown(/* e */) {
      // e.preventDefault();
      this.i_active = !this.i_active;
      this.i_dropdownActive = !this.i_dropdownActive;
      // e.stopImmediatePropagation();
    }
  }
}
</script>