/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 * @Author bin_wang
 */
export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/charts',
      },
      {
        path: '/charts',
        name: 'charts',
        component: '@/pages/Charts/index',
      },
      {
        path: '/process',
        name: 'process',
        component: '@/pages/WebWorker/index',
      },
      {
        path: '/progress',
        name: 'progress',
        component: '@/pages/Progress/index',
      },
      {
        path: '/自定义hook',
        name: 'hooks',
        component: '@/pages/Hooks/index',
      },
      {
        path: '/JS设计模式',
        name: 'DesignPattern',
        component: '@/pages/DesignPattern/index',
      },
      {
        path: '/自定义router/',
        component: '@/pages/CustomRouter/index',
        routes: [
          {
            path: '/',
            redirect: '/自定义router/menu1',
          },
          {
            path: '/自定义router/menu1',
            name: '自定义router-menu1',
            component: '@/pages/CustomRouter/component/Menu1',
          },
          {
            path: '/自定义router/menu2',
            name: '自定义router-menu2',
            component: '@/pages/CustomRouter/component/Menu2',
          },
        ],
      },
    ],
  },
];
