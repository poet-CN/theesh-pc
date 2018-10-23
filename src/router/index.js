import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/Home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
