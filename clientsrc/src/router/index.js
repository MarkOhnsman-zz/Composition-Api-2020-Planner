import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/HomePage.vue'
import Dashboard from '../pages/DashboardPage.vue'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})