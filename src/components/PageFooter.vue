<template>
  <footer id="footer" class="footer light-background">

    <div class="container footer-top">
      <div class="row gy-4">
        
        <PageFooterAbout v-bind:value="about"></PageFooterAbout>

        <PageFooterLinkList v-bind:value="links"></PageFooterLinkList>

        <PageFooterLinkList v-bind:value="services"></PageFooterLinkList>

        <PageFooterContactUs v-bind:value="value.contactUs"></PageFooterContactUs>

        <PageFooterCopyright v-bind:value="copyright"></PageFooterCopyright>

      </div>
    </div>

  </footer>
</template>

<script>
import PageFooterAbout from './PageFooterAbout.vue';
import PageFooterLinkList from './PageFooterLinkList.vue';
import PageFooterContactUs from './PageFooterContactUs.vue';
import PageFooterCopyright from './PageFooterCopyright.vue';

export default {
  name: 'PageFooter',
  components: {
    PageFooterAbout,
    PageFooterLinkList,
    PageFooterContactUs,
    PageFooterCopyright
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    about: function() {
      return {
        title: this.value.title,
        subtitle: this.value.subtitle,
        social: this.value.social
      }
    },
    links: function() {
      return {
        list: 'Useful Links',
        links: this.value.usefulLinks
      }
    },
    services: function() {
      return {
        list: 'Our Services',
        links: this.value.ourServices
      }
    },
    copyright: function() {
      return {
        title: this.value.title
      }
    }
  }
}
</script>
