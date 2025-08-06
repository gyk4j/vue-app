<template>
  <div class="col-lg-2 col-6 footer-links">
    <h4>{{ value.list }}</h4>
    <ul>
      <li v-for="(link, index) in value.links" v-bind:key="index"><a v-bind:href="link.url">{{ link.text }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageFooterLinkList',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
