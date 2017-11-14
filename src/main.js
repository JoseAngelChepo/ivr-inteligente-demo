import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '@/routes'

Vue.use(VueRouter)

export var router = new VueRouter({ routes, mode: 'history'})
router.replace('/')

new Vue({
  el: '#app',
  render: h => h(App),
  router
})