// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import '@/theme/theme-ff5940/index.css'
import api from './http/index'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(api)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  // 采用render方式渲染
  render: h => h(App)
  /*components: { App },
  template: '<App/>'*/
})
