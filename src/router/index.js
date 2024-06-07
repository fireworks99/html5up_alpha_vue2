import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Generic from '@/views/Generic.vue'
import Contact from '@/views/Contact.vue'
import Elements from '@/views/Elements.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // 路由懒加载
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/elements',
    name: 'Elements',
    component: Elements
  },
  {
    path: '/generic',
    name: 'Generic',
    component: Generic
  },
]

const router = new VueRouter({
  routes
})

export default router
