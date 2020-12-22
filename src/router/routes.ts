import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'todo - 登录页面'
    },
    component: () => import(/* webpackChunkName: "login-view" */ '../views/Login')
  },
  {
    path: '/app',
    name: 'App',
    meta: {
      title: 'todo - 应用页面'
    },
    component: () => import(/* webpackChunkName: "app-view" */ '../views/Todo')
  },
  {
    path: '/',
    redirect: '/app'
  }
] as RouteRecordRaw[]
