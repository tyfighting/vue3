import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index';
import login from './login/login';
import home from './home/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [...home, ...login]
});

router.beforeEach((to, from, next) => {
  const isLogin: boolean = store.getters.isLogin;
  if (isLogin) {
    //已登录
    next();
  } else {
    if ('/login'.indexOf(to.path) !== -1) {
      //未登录，跳向登陆页面不改变路径
      next();
    } else {
      //未登录，跳向非登陆页面改变路径
      next('/login');
    }
  }
});

export default router;
