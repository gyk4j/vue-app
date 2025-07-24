import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css'

Vue.config.productionTip = false

// Reference: https://v2.vuejs.org/v2/cookbook/creating-custom-scroll-directives.html
// To capture window scroll event.
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        document.removeEventListener('scroll', f)
      }
    }
    document.addEventListener('scroll', f)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
