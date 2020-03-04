import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
//import components

Vue.config.productionTip = false
// Vue.components("tag name", component imported)
Vue.use(VueRouter)

const myRouter = new VueRouter({
  routes : Routes,
  mode:'history'
});

new Vue({
  render: h => h(App),
  router : myRouter
}).$mount('#app')
