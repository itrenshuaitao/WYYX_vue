import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mock-server'


import navHeader from './pages/Home/components/navHaader/navHaader'
import HeaderSlot from "./components/HeaderSlot/HeaderSlot"

Vue.config.productionTip = false
Vue.component('navHeader',navHeader)
Vue.component('HeaderSlot',HeaderSlot)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
