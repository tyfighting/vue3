import Home from '@/app.vue';
export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/page1',
    children: [
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/home/page1.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/home/page2.vue')
      }
    ]
  }
];
