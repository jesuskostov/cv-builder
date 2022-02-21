<template>
  <div>
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mt-5 mt-md-0" v-text="$t('faq.title')" />
              </div>
          </div>
        </div>
      </div>
    </div>
    <section class="faq-section pb-4 pb-md-5">
        <div class="container">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="faq-box">
                      <div class="accordion" role="tablist">

                          <b-card v-for="(item, i) in $t('faq.questions')" :key="i" no-body class="mb-3">
                            <b-card-header header-tag="header" class="h4" role="tab">
                                <h4 block v-b-toggle="'accordion-' + i" >{{ item.title }}</h4>
                            </b-card-header>
                            <b-collapse visible :id="`accordion-${i}`" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text class="text-left">
                                    <span v-if="item.text" v-html="item.text" />
                                    <ol v-if="item.list">
                                      <li v-for="(li, i) in item.list" :key="i">{{ li }}</li>
                                    </ol>
                                </b-card-text>
                                </b-card-body>
                            </b-collapse>
                          </b-card>

                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'

export default {
  components: {
    Footer,
  },
  data() {
    return {
      title: 'FAQ | ' + this.$store.state.domain.site.htmlAttrs.title
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
}
</script>

<style lang="scss" scoped>

.contact-form {
    position: relative;
    top: -50px;
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

.faq-section {
  background-color: #fff;
}

.accordion {
  margin-bottom: 0;
  .card {
    overflow: inherit;
    border: 0;
    border-radius: 0;
  }
}

.faq-box {
  border-radius: 8px;
  padding-top: 4rem;
  .h4 {
    border-radius: 8px;
    background-color: #fff;
    text-align: left;
    border: 0;
    padding: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0;
    }
  }
}
</style>