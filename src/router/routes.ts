import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login-view" */ '../views/Login')
  },
  {
    path: '/app',
    name: 'App',
    component: () => import(/* webpackChunkName: "app-view" */ '../views/Todo')
  },
  {
    path: '/',
    redirect: '/login'
  }
] as RouteRecordRaw[]
