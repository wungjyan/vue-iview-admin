import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'iview/dist/styles/iview.css'
import '@/styles/index.less'
Vue.use(iView)

Vue.config.productionTip = false

NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
