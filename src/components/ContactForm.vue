<template>
  <div class="col-lg-7">
    <form v-bind:action="value.action" v-bind:method="value.method" v-on:submit.stop.prevent="onSubmit" class="php-email-form" data-aos="fade-up" data-aos-delay="500">
      <div class="row gy-4">

        <div class="col-md-6">
          <input type="text" name="name" class="form-control" v-bind:placeholder="value.placeholderName" required="" v-model="senderName">
        </div>

        <div class="col-md-6 ">
          <input type="email" class="form-control" name="email" v-bind:placeholder="value.placeholderEmail" required="" v-model="senderEmail">
        </div>

        <div class="col-md-12">
          <input type="text" class="form-control" name="subject" v-bind:placeholder="value.placeholderSubject" required="" v-model="senderSubject">
        </div>

        <div class="col-md-12">
          <textarea class="form-control" name="message" rows="6" v-bind:placeholder="value.placeholderMessage" required="" v-model="senderMessage"></textarea>
        </div>

        <div class="col-md-12 text-center">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>

          <button type="submit">Send Message</button>
        </div>

      </div>
    </form>
  </div><!-- End Contact Form -->
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      senderName: '',
      senderEmail: '',
      senderSubject: '',
      senderMessage: ''
    }
  },
  props: {
    value: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onSubmit() {
      alert(
        `Name: ${this.senderName}\n` +
        `Email: ${this.senderEmail}\n` +
        `Subject: ${this.senderSubject}\n` +
        `Message: ${this.senderMessage}\n\n` +
        `Note: This form will NOT be submitted to action URL "${this.value.action}".\n\n` +
        'To activate submission, change:\n' +
        '\tv-on:submit.stop.prevent= ...\n' +
        'to: \n' +
        '\tv-on:submit= ...\n'
      )
    }
  }
}
</script>
