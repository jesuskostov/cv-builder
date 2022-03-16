<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5" v-text="$t('help.title')" />
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="mb-5">
                    <h2><b>{{ $t('help.paymentSecure.title') }}</b></h2>
                    <p v-html="$t('help.paymentSecure.description')" />
                </div>
                <div class="mb-5">
                    <h2><b>{{ $t('help.subscriptionWork.title') }}</b></h2>
                    <p v-html="$t('help.subscriptionWork.description')" />
                </div>
                <div class="mb-5">
                    <h2><b>{{ $t('help.cancelSubscription.title') }}</b></h2>
                    <p v-html="$t('help.cancelSubscription.description')" />
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
  data() {
    return {
      title:
        this.$i18n.t("help.title") +
        " | " +
        this.$store.state.domain.site.htmlAttrs.title,
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  components: {
    Footer,
  },
}
</script>

<style lang="scss" scoped>


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