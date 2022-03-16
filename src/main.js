import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
// import './registerServiceWorker'
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import VueGtag from "vue-gtag";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { currentDomain } from "./domains";
import i18n from "./i18n";
import fr from "vee-validate/dist/locale/fr";
import it from "vee-validate/dist/locale/it";
import VeeValidate, { Validator } from "vee-validate";
import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false;

// required * before form label
Vue.filter("requiredLabel", function(value) {
  if (!value) return "";
  return `<span class="red">*</span> ${value}`;
});

// space after label in french
Vue.filter("formattedLabel", function(value) {
  if (!value) return "";
  return i18n.locale === "fr" ? `${value} :` : `${value}:`;
});

// fields inside errors - add quotes
Vue.filter("addQuotes", function(value) {
  if (!value) return "";
  return `« ${value} »`;
});

Vue.use(
  VueGtag,
  {
    config: { id: currentDomain().googleAdsId },
    includes: [{ id: currentDomain().googleAnaliticsId }],
  },
  router
);

Vue.use(VueMeta);
Vue.use(VueAwesomeSwiper);

Vue.use(VeeValidate);

// custom messages

const veeLocale = currentDomain().locale === "fr" ? fr : it;
const dict = {
  veeLocale,
  messages: {
    ...veeLocale.messages,
    // required: i18n.t("validation.required"),
  },
};
Validator.localize(currentDomain().locale, dict);

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.use(VueTheMask);

new Vue({
  i18n,
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("setDomain", currentDomain());
    this.$store.dispatch("setLocale", currentDomain().locale);
  },
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
