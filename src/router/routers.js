import Layout from '@/layout/index'
import config from '@/config'
const { homeName } = config
export default [
  {
    path: '/',
    redirect: `/${homeName}`,
    name: `_${homeName}`,
    component: Layout,
    children: [
      {
        path: `/${homeName}`,
        name: homeName,
        meta: {
          title: '首页',
          icon: 'md-apps'
        },
        component: () => import('@/views/dashboard')
      }
    ]
  },
  {
    path: '/menu1',
    name: 'menu1',
    component: Layout,
    meta: {
      title: '菜单一',
      icon: 'ios-albums',
      showAlways: true
    },
    children: [
      {
        path: 'child1',
        name: 'menu1_child1',
        meta: {
          title: '子菜单一'
        },
        component: () => import('@/views/menu1/child1')
      },
      {
        path: 'child2',
        name: 'menu1_child2',
        meta: {
          title: '子菜单二'
        },
        component: () => import('@/views/menu1/child2')
      }
    ]
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: Layout,
    meta: {
      icon: 'ios-albums',
      showAlways: true
    },
    children: [
      {
        path: 'child1',
        name: 'menu2_child1',
        meta: {
          title: '子菜单一'
        },
        component: () => import('@/views/menu2/child1')
      },
      {
        path: 'child2',
        name: 'menu2_child2',
        meta: {
          title: '子菜单二'
        },
        component: () => import('@/views/menu2/child2')
      }
    ]
  },
  {
    path: '/menu3',
    name: 'menu3',
    meta: {
      title: '菜单三'
    },
    component: Layout,
    children: [
      {
        path: 'child1',
        name: 'child3-1',
        meta: {
          title: '子菜单3-1'
        },
        component: () => import('@/views/menu3')
      }
    ]
  }
]
