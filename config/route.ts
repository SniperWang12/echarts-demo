/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 * @Author bin_wang
 */
export default [
  {
    path: '/',
    component: '@/layouts/index',
    menu: {
      flatMenu: true,
    },
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
        path: '/web-worker',
        name: 'web worker',
        component: '@/pages/WebWorker/index',
      },
    ],
  },
];
