<template>
  <div>
    <div class="container">
      <div class="steps-title text-center pt-5">
        <h1 v-text="$t('browseTemplatePage.title')" />
        <span class="line mx-auto"></span>
        <p class="text-center mt-3" v-html="$t('browseTemplatePage.text')" />
      </div>
    </div>
    <templates class="pt-5" :onBrowse="true" :preview="true" />
    <Footer />
  </div>
</template>

<script>
import Templates from "../components/Template.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Templates,
    Footer,
  },
  data() {
    return {
      title:
        this.$i18n.t("browseTemplatePage.title") +
        " | " +
        this.$store.state.domain.site.htmlAttrs.title,
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>
