import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/index.vue')
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    component: () => import('../views/orderDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
