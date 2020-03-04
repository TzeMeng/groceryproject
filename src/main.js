import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import components

Vue.config.productionTip = false
// Vue.components("tag name", component imported)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router = VueRouter
}).$mount('#app')
