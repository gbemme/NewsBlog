import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/tailwind.css"
import vuetify from './plugins/vuetify'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
