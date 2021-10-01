import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Builder from '../views/Builder.vue'
import BrowseTemplates from '../views/BrowseTemplates.vue'
import Payment from '../views/Payment.vue'
import ErrorPage from '../views/Error.vue'
import Feedbacks from '../views/Feedbacks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/builder',
    name: 'Builder',
    component: Builder
  },
  {
    path: '/browse-templates',
    name: 'BrowseTemplates',
    component: BrowseTemplates
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage
  },
  {
    path: '/feedback',
    name: 'Feedbacks',
    component: Feedbacks
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
})

export default router
