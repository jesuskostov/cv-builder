import Vue from "vue";
import App from "./App.vue";
// import './registerServiceWorker'
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import { BootstrapVue } from "bootstrap-vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import VueGtag from "vue-gtag";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {currentDomain} from './domains'

Vue.config.productionTip = false;

Vue.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GOOGLE_ANALITICS_ID },
    // if two IDS
    includes: [{ id: process.env.VUE_APP_GOOGLE_ANALITICS_ID2 }],
  },
  router
);

Vue.use(VueAwesomeSwiper);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch('setDomain', currentDomain())
  },
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
