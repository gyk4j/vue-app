<template>
  <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
    <h4>Contact Us</h4>
    <p v-for="(line, idx) in value.address" v-bind:key="idx">{{ line }}</p>
    <p class="mt-4"><strong>Phone:</strong> <span>{{ value.phone }}</span></p>
    <p><strong>Email:</strong> <span>{{ value.email }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'PageFooterContactUs',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
