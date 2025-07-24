<template>
  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center" v-on:click="click" v-bind:class="isActive"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>
export default {
  name: 'ScrollTopButton',
  props: {
    // Replaces toggleScrollTop() in ScrollTopButton.vue using prop.
    scrollY: Number
  },
  mounted() {
    /**
     * Scroll top button
     */
  },
  methods: {
    click(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  computed: {
    isActive: function () {
      return {
        active: this.scrollY > 100,
      }
    }
  }
}
</script>
