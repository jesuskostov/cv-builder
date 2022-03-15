import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";
import Home from "../views/Home.vue";
import Builder from "../views/Builder.vue";
import BrowseTemplates from "../views/BrowseTemplates.vue";
import HowToWriteCv from "../views/HowToWriteCv.vue";
import Payment from "../views/Payment.vue";
import ErrorPage from "../views/Error.vue";
import Feedbacks from "../views/Feedbacks.vue";
import Faq from "../views/Faq.vue";
import Contact from "../views/Contact.vue";
import Partnership from "../views/Partnership.vue";
import SecurePayment from "../views/SecurePayment.vue";
import Benefits from "../views/Benefits.vue";
import Help from "../views/Help.vue";
import SiteMap from "../views/SiteMap.vue";
import Plan from "../views/Plan.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/404.vue";
import i18n from "../i18n";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: `/${i18n.t('link.builder')}`,
    name: "Builder",
    component: Builder,
  },
  {
    path: `/${i18n.t('link.browseTemplate')}`,
    name: "BrowseTemplates",
    component: BrowseTemplates,
  },
  {
    path: `/${i18n.t('link.howToWriteCv')}`,
    name: "HowToWriteCv",
    component: HowToWriteCv,
  },
  {
    path: `/${i18n.t('link.payment')}`,
    name: "Payment",
    component: Payment,
  },
  {
    path: `/${i18n.t('link.plan')}`,
    name: "Plan",
    component: Plan,
  },
  {
    path: `/${i18n.t('link.error')}`,
    name: "Error",
    component: ErrorPage,
  },
  {
    path: `/${i18n.t('link.feedback')}`,
    name: "Feedbacks",
    component: Feedbacks,
  },
  {
    path: `/${i18n.t('link.faq')}`,
    name: "Faq",
    component: Faq,
  },
  {
    path: `/${i18n.t('link.partnership')}`,
    name: "Partnership",
    component: Partnership,
  },
  {
    path: `/${i18n.t('link.values')}`,
    name: "Benefits",
    component: Benefits,
  },
  {
    path: `/${i18n.t('link.help')}`,
    name: "Help",
    component: Help,
  },
  {
    path: `/${i18n.t('link.siteMap')}`,
    name: "SiteMap",
    component: SiteMap,
  },
  {
    path: `/${i18n.t('link.securePayment')}`,
    name: "SecurePayment",
    component: SecurePayment,
  },
  {
    path: `/${i18n.t('link.contact')}`,
    name: "Contact",
    component: Contact,
  },
  {
    path: `/${i18n.t('link.login')}`,
    name: "Login",
    component: Login,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
