<template>
  <a v-if="!dropdown" v-bind:href="href" v-bind:class="{ active: i_active }">{{ text }}</a>
  <a v-else href="#"><span>{{ text }}</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
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
      i_active: this.active
    }
  },
  computed: {
    hash: function() {
      return this.href.trim().startsWith('#')? this.href.trim(): ''
    },
  },
  mounted() {
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
    }
  }
}
</script>