import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-localstorage'

require('./assets/sass/main.scss')

Vue.config.productionTip = false
Vue.use(VueLocalStorage);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
