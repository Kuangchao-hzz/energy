import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // 登录相关路由
    {
      path: '/register',
      name: 'register',
      component: (resolve)=> { require(['../views/Register/index.vue'], resolve) },
      children: []
    },
    // 首页相关路由
    {
      path: '/home',
      name: 'home',
      component: (resolve)=> { require(['../views/Home/index.vue'], resolve) },
      children: []
    },
    // 能源服务相关路由
    {
      path: '/energy',
      name: 'energy',
      component: (resolve)=> { require(['../views/Energy/index.vue'], resolve) },
      children: []
    },
    // 服务商相关路由
    {
      path: '/provider',
      name: 'provider',
      component: (resolve)=> { require(['../views/Provider/index.vue'], resolve) },
      children: []
    },
    // 服务商相关路由
    {
      path: '/broker',
      name: 'broker',
      component: (resolve)=> { require(['../views/Broker/index.vue'], resolve) },
      children: []
    },
    // 个人中心相关路由
    {
      path: '/user',
      name: 'user',
      component: (resolve)=> { require(['../views/User/index.vue'], resolve) },
      children: []
    },
  ]
})
