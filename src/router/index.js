import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Builder from '../views/Builder.vue'
import BrowseTemplates from '../views/BrowseTemplates.vue'
import HowToWriteCv from '../views/HowToWriteCv.vue'
import Payment from '../views/Payment.vue'
import ErrorPage from '../views/Error.vue'
import Feedbacks from '../views/Feedbacks.vue'
import Faq from '../views/Faq.vue'
import Contact from '../views/Contact.vue'
import Partnership from '../views/Partnership.vue'
import SecurePayment from '../views/SecurePayment.vue'
import Benefits from '../views/Benefits.vue'
import Help from '../views/Help.vue'
import SiteMap from '../views/SiteMap.vue'
import Login from '../views/Login.vue'


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
    path: '/how-to-write-cv',
    name: 'HowToWriteCv',
    component: HowToWriteCv
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
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/partnership',
    name: 'Partnership',
    component: Partnership
  },
  {
    path: '/i-nostri-valori',
    name: 'Benefits',
    component: Benefits
  },
  {
    path: '/aiuto',
    name: 'Help',
    component: Help
  },
  {
    path: '/site-map',
    name: 'SiteMap',
    component: SiteMap
  },
  {
    path: '/secure-payment',
    name: 'SecurePayment',
    component: SecurePayment
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router
