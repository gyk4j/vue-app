<template>
  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>
export default {
  name: 'ScrollTopButton',
  mounted() {
    /**
     * Scroll top button
     */
    this.scrollTop = document.querySelector('.scroll-top');

    this.scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    this.toggleScrollTop();
    document.addEventListener('scroll', this.toggleScrollTop);
  },
  methods: {
    toggleScrollTop() {
      if (this.scrollTop) {
        window.scrollY > 100 ? this.scrollTop.classList.add('active') : this.scrollTop.classList.remove('active');
      }
    },
  }
}
</script>