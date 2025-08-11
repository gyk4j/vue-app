<template>
  <li class="dropdown">
    <a href="#" v-bind:class="{ 'active': active }" v-on:click="toggleMobileNav">
      <span v-bind:class="{ 'dropdown-active': dropdownActive }">{{ text }}</span>
      <i class="bi bi-chevron-down toggle-dropdown" v-on:click="toggleDropDown"></i>
    </a>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'PageHeaderNavMenuDropdown',
  props: {
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
      dropdownActive: false
    }
  },
  methods: {
    toggleDropDown(/* e */) {
      // e.preventDefault();      
      this.dropdownActive = !this.dropdownActive;
      // e.stopImmediatePropagation();
    },
    toggleMobileNav() {
      this.$emit('toggle-mobile-nav')
    }
  }
}
</script>
