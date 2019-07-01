import Layout from '@/layout/index'

export default [
  {
    path: '/test',
    name: 'test',
    component: Layout,
    meta: {
      title: '测试'
    },
    children: [
      {
        path: 'test',
        name: 'testChild',
        meta: {
          title: '测试的子类'
        },
        component: () => import('@/views/test/index.vue')
      },
      {
        path: 'test2',
        name: 'testChild2',
        meta: {
          title: '测试的子类2'
        },
        component: () => import('@/views/test2/index.vue')
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    component: Layout,
    meta: {
      title: '这是demo',
      showAlways: true
    },
    children: [
      {
        path: 'demo1',
        name: 'demo1',
        meta: {
          title: '这是demo1'
        },
        component: () => import('@/views/test2/index.vue')
      }
    ]
  }
]
