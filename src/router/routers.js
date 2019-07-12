import Layout from '@/layout/index'

export default [
  {
    path: '/',
    redirect: '/dashboard',
    name: '_dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
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
      title: '菜单二',
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
  }
]
