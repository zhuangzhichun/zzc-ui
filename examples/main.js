import Vue from 'vue'
import App from './App.vue'
import ZzcUi from '../packages'
Vue.config.productionTip = false
Vue.use(ZzcUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
