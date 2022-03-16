<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5">{{ $t('footer_menu')[14] }}</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4">
                <div class="d-flex flex-column text-left">
                    <router-link to="/" v-text="$t('footer_menu')[11]" />
                            <router-link :to="`/${$t('link.values')}`" v-text="$t('footer_menu')[12]" />
                            <router-link :to="`/${$t('link.help')}`" v-text="$t('footer_menu')[13]" />
                            <router-link :to="`/${$t('link.siteMap')}`" v-text="$t('footer_menu')[14]" />
                            <router-link :to="{name: 'Contact'}" v-text="$t('footer_menu')[16]" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex flex-column text-left">
                    <router-link :to="{name: 'Partnership'}" v-text="$t('footer_menu')[5]" />
                    <router-link :to="{name: 'SecurePayment'}" v-text="$t('footer_menu')[6]" />
                    <a
                      :href="`./legal/confidentialite-${legalDocsSlug}.png`"
                      target="_blank"
                      rel="noopener"
                      v-text="$t('footer_menu')[7]"
                    />
                    <a
                      :href="`./legal/cgu-${legalDocsSlug}.png`"
                      target="_blank"
                      rel="noopener"
                      v-text="$t('footer_menu')[8]"
                    />
                    <a
                      :href="`./legal/cookies-${legalDocsSlug}.png`"
                      target="_blank"
                      rel="noopener"
                      v-text="$t('footer_menu')[9]"
                    />
                    <a
                      :href="`./legal/mentions-${legalDocsSlug}.png`"
                      target="_blank"
                      rel="noopener"
                      v-text="$t('footer_menu')[10]"
                    />
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex flex-column text-left">
                    <router-link :to="{name: 'BrowseTemplates'}" v-text="$t('footer_menu')[0]" />
                    <router-link :to="{name: 'BrowseTemplates'}" v-text="$t('footer_menu')[2]" />
                    <router-link :to="{name: 'HowToWriteCv'}" v-text="$t('footer_menu')[1]" />
                    <router-link :to="{name: 'Feedbacks'}" v-text="$t('footer_menu')[3]" />
                    <router-link :to="{name: 'Faq'}" v-text="$t('footer_menu')[4]" />
                </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'

export default {
  name: 'Help',
  components: {
    Footer,
  },
  computed: {
    domain() {
      return this.$store.state.domain;
    },
    legalDocsSlug() {
      return this.domain.site.legalDocsSlug;
    },
  }
}
</script>

<style lang="scss" scoped>

a {
    color: #000;
    text-decoration: underline;
}

#intro-section {
  background-color: var(--secondary-color);
  padding: 5.6rem 0 3.2rem 0;
  @media (max-width: 575.98px) {
    padding-top: 1rem;
  }
  @media (max-width: 1199.98px) {
    overflow: hidden;
  }
  
}

h1 {
  text-align: left;
  font-size: 2.7rem;
  font-weight: bold;    
  color: #fff;
  @media (max-width: 575.98px) {
    font-size: 1.7rem;
  }
}
</style>