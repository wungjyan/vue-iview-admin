import Layout from '@/layout/index'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/test'
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    children: [
      {
        path: 'test',
        name: 'testChild',
        meta: {
          title: '测试的子类',
          access: ['doctor']
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
  }
]
