<template>
  <!-- Preloader -->
  <div id="preloader"></div>
</template>

<script>
export default {
  name: 'PreloaderOverlay',
  mounted() {
    /**
     * Preloader
     */
     this.preloader = document.querySelector('#preloader');
    if (this.preloader) {
      window.addEventListener('load', () => {
        this.preloader.remove();
      });
    }
  }
}
</script>