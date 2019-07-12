import { getMenuByRouter, getBreadCrumbList } from '@/libs/util'
import routers from '@/router/routers'
export default {
  state: {
    breadCrumbList: []
  },
  getters: {
    menuList (state, getters) {
      return getMenuByRouter(routers, ['admin'])
    }
  },
  mutations: {
    setBreadCrumb (state, route) {
      console.log('newRoute:', route)
      state.breadCrumbList = getBreadCrumbList(route)
    }
  }
}
