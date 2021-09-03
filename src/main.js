import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

/**
 * Filters
 */
import msToTime from '@/filters/ms-to-time'

import routes from '@/routes'
import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)

// use filters
Vue.use(msToTime)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
