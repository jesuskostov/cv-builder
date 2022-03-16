<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5">{{ $t('ourValues.title') }}</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-01.svg" alt="">
                    </span>
                    <h2 class="mb-4" v-text="$t('ourValues.quality.title')" />
                    <div class="text-center">
                        <p v-html="$t('ourValues.quality.description')" />
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-02.svg" alt="">
                    </span>
                    <h2 class="mb-4" v-text="$t('ourValues.efficiency.title')" />
                    <div class="text-center">
                        <p v-html="$t('ourValues.efficiency.description')" />
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-03.svg" alt="">
                    </span>
                    <h2 class="mb-4" v-text="$t('ourValues.precision.title')" />
                    <div class="text-center">
                        <p v-html="$t('ourValues.precision.description')" />
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-04.svg" alt="">
                    </span>
                    <h2 class="mb-4" v-text="$t('ourValues.safety.title')" />
                    <div class="text-center">
                        <p v-html="$t('ourValues.safety.description')" />
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-05.svg" alt="">
                    </span>
                    <h2 class="mb-4" v-text="$t('ourValues.customerSatisfaction.title')" />
                    <div class="text-center">
                        <p v-html="$t('ourValues.customerSatisfaction.description')" />
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-06.svg" alt="">
                    </span>
                    <h2 class="mb-4" v-text="$t('ourValues.confidentiality.title')" />
                    <div class="text-center">
                        <p v-html="$t('ourValues.confidentiality.description')" />
                    </div>
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
  name: 'Home',
  data() {
    return {
      title:
        this.$i18n.t("ourValues.title") +
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

.white-icon-bg {
    position: relative;
    text-align: center;
    width: 90px;
    height: 64px;
    display: block;
    background-color: #F2F5F7;
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
}

.benefit-icon {
    width: 64px;
    height: 64px;
}

.benefit-box {
    height: 100%;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    h2 {
        position: relative;
        font-weight: bold;
        &::after {
            content: "";
            height: 2px;
            width: 3em;
            background: #f6505c;
            display: block;
            margin-top: 0.5em;
            margin-left: auto;
            margin-right: auto;
        }
    }
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