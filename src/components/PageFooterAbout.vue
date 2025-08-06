<template>
  <div class="col-lg-5 col-md-12 footer-about">
    <a href="index.html" class="logo d-flex align-items-center">
      <span class="sitename">{{ value.title }}</span>
    </a>
    <p>{{ value.subtitle }}</p>
    <div class="social-links d-flex mt-4">
      <a v-for="(social, idx) in value.social" v-bind:key="idx" v-bind:href="social.url">
        <i class="bi" v-bind:class="social.icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooterAbout',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
