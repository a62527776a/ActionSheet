import App from './App.vue'
import ActionPannel from '../src/index.js'
import Vue from 'vue'

Vue.use(ActionPannel)

new Vue({
  render: h => h(App)
}).$mount('#app')
