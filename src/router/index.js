import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Builder from '../views/Builder.vue'
import BrowseTemplates from '../views/BrowseTemplates.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
]

const router = new VueRouter({
  routes
})

export default router
