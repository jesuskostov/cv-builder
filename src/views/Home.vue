<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-left">
            <h1 class="mb-4 mb-md-5" v-text="$t('hero.title')"></h1>
            <div class="benefits mb-4">
              <div
                v-for="(p, i) in $t('hero.benefits')" :key="i" 
                class="benefits__box"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-ease="ease"
                :data-aos-delay="i * 100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="Path_396"
                    data-name="Path 396"
                    d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z"
                    transform="translate(-2 -2)"
                    fill="#65af2c"
                  />
                </svg>
                <h4>{{p}}</h4>
              </div>
            </div>
            <!-- <img class="d-block d-md-none intro-cv-image" src="../assets/images/intro-cv-image.svg" alt="intro cv image"> -->
            <div class="price-box">
              <div class="text-left mr-4">
                <p v-if="offer === 'free'" class="price" v-text="$t('price.free')" />
                <p v-if="offer === 'paid'" class="price" v-html="$t('price.paid')" />
                <p v-if="offer === 'free'" class="text" v-html="$t('price.free2')" />
              </div>
              <router-link to="/browse-templates" class="btn flex-shrink-0" v-text="$t('button.start')" />
            </div>
          </div>
          <div class="col-md-6 position-relative d-none d-md-block">
            <div>
              <img
                class="circles-svg"
                src="../assets/images/circles-behind-cv-image.svg"
                alt="circle images"
              />
            </div>
            <div>
              <img
                class="intro-cv-image displayBox"
                src="../assets/images/intro-cv-image.png"
                alt="intro cv image"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos="fade-up"
                data-aos-ease="ease"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="optimized-career">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex flex-column flex-md-row align-items-center">
              <div class="img-box mr-0 mb-4 mb-md-0 mr-md-5">
                <img
                  src="../assets/images/optimized-career@2x.png"
                  alt="optimized career"
                />
              </div>
              <div class="text-left">
                <h3 v-html="$t('optimization.title')" />
                <p v-text="$t('optimization.text')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="testimonies">
      <div class="container">
        <div class="section-title mb-3 mb-md-5">
          <h2 v-text="$t('sectionTitles.testimonies')" />
          <span class="line"></span>
        </div>
        <div class="row pt-5">
          <div class="col-md-4 mb-3">
            <div
              class="testimonies"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-ease="ease"
              :data-aos-delay="50"
            >
              <div class="testimonies__header">
                <div class="testimonies__header__profile">
                  <div class="d-flex flex-column">
                    <h4 class="text-left">Bernardo Buontalenti</h4>
                    <div class="text-left">
                      <svg
                        v-for="i in 5"
                        :key="i"
                        class="star active"
                        style="enable-background:new 0 0 512.002 512.002;"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.002 512.002"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonies__body">
                <p>
                  Questo è stato il miglior aiuto per il cv di sempre! Nient'altro che offerte di lavoro.
                  Ha superato le mie aspettative. Lo consiglio vivamente!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div
              class="testimonies"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-ease="ease"
              :data-aos-delay="150"
            >
              <div class="testimonies__header">
                <div class="testimonies__header__profile">
                  <div class="d-flex flex-column">
                    <h4 class="text-left">Eva C***</h4>
                    <div class="text-left">
                      <svg
                        v-for="i in 5"
                        :key="i"
                        class="star active"
                        style="enable-background:new 0 0 512.002 512.002;"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.002 512.002"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonies__body">
                <p>
                  Servizio molto facile da usare. Molteplici opzioni per i modelli.
                  Riempi in bianco in molte sezioni e tutto è già preformattato.
                  Impeccabile! Userò ancora questo servizio.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div
              class="testimonies"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-ease="ease"
              :data-aos-delay="200"
            >
              <div class="testimonies__header">
                <div class="testimonies__header__profile">
                  <div class="d-flex flex-column">
                    <h4 class="text-left">Giulio Parigi</h4>
                    <div class="text-left">
                      <svg
                        v-for="i in 5"
                        :key="i"
                        class="star active"
                        style="enable-background:new 0 0 512.002 512.002;"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.002 512.002"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonies__body">
                <p>
                  Ho FINALMENTE un curriculum dall'aspetto professionale !!!!!! Questo mi ha
                  risparmiato così tante lacrime! Senza sforzo. WOW!!!!! MOLTI GRAZIE!!!!!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <router-link to="/feedback" class="custom-btn big" v-text="$t('button.viewAll')" />
        </div>
      </div>
    </div>
    <div id="step-section">
      <div class="container">
        <div class="section-title">
          <h2 v-text="$t('sectionTitles.steps')" />
          <span class="line"></span>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div
              class="step-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-ease="ease"
              data-aos-delay="0"
            >
              <img src="../assets/images/fill-info.svg" alt="fill info icon" />
              <h3 v-text="$t('steps.step1.title')" />
              <p v-text="$t('steps.step1.text')" />
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="step-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-ease="ease"
              data-aos-delay="100"
            >
              <img
                src="../assets/images/customize-cv.svg"
                alt="customize cv icon"
              />
              <h3 v-text="$t('steps.step2.title')" />
              <p v-text="$t('steps.step2.text')" />
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="step-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-ease="ease"
              data-aos-delay="200"
            >
              <img
                src="../assets/images/pdf-download.svg"
                alt="download pdf icon"
              />
              <h3 v-text="$t('steps.step3.title')" />
              <p v-text="$t('steps.step3.text')" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="templates-carousel">
      <div class="container mb-3 mb-sm-0">
        <div class="section-title">
          <h2 v-text="$t('sectionTitles.carousel.title')" />
          <span class="line"></span>
        </div>
        <div class="row">
          <div class="col-md-9 mx-auto">
            <p class="text-center pt-4" v-html="$t('sectionTitles.carousel.text')" />
          </div>
        </div>
      </div>

      <templates :preview="true" />

      <div class="text-center mb-5">
        <router-link to="/browse-templates" class="custom-btn big" v-text="$t('button.viewAll')" />
      </div>
    </div>
    <div id="why-section">
      <div class="section-title">
        <h2 v-text="$t('sectionTitles.why.title')" />
        <span class="line"></span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <p class="text-center pt-4" v-html="$t('sectionTitles.why.text')" />
            <div class="text-center mt-5">
              <router-link to="/faq" class="custom-btn big" v-text="$t('button.faq')" />
            </div>
          </div>
          <div class="why-cv-image w-100 text-center">
            <img
              v-if="offer === 'free'"
              src="../assets/images/why-quickcv-image-free@2x.png"
              alt="Why QuickCV Generator?"
            />
            <img
              v-if="offer === 'paid'"
              src="../assets/images/why-quickcv-image-paid@2x.png"
              alt="Why QuickCV Generator?"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="change-cv">
      <div class="container">
        <img src="../assets/images/squares.svg" alt="squares icons" />
        <div class="content">
          <h2 v-text="$t('sectionTitles.change')" />
          <router-link to="/browse-templates" v-text="$t('button.start')" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Templates from "../components/Template.vue";
import Footer from "../components/Footer.vue";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import '../../node_modules/swiper/dist/css/swiper.css'

export default {
  name: "Home",
  data() {
    return {
      title: this.$store.state.domain.site.htmlAttrs.title
    }
  },
  components: {
    Templates,
    Footer,
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  computed: {
    offer() {
      return this.$store.state.domain.offer
    },
  },
  methods: {
    async start() {
      let step = 1;
      await this.$store.dispatch("step", { step });
      this.$router.push("/builder");
    },
  },
};
</script>

<style lang="scss" scoped>
// INTRO SECTION START
#testimonies {
  overflow: hidden;
  padding: 3rem 0;
  background-color: #fff;
}

.testimonies {
  height: 100%;
  padding: 30px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    &__profile {
      display: flex;
      align-items: center;
      .img {
        width: 60px;
        height: 60px;
        border-radius: 99999px;
        overflow: hidden;
        margin-right: 0.8rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h4 {
        font-size: 1.3rem;
        margin-bottom: 0;
      }
    }
  }
  &__body {
    text-align: left;
    font-size: 0.9rem;
    p {
      margin-bottom: 0;
    }
  }
}

.swiper-container-3d {
  padding: 30px 0;
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

.benefits {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  &__box {
    display: flex;
    align-items: center;
    margin-bottom: 0.7rem;
    svg {
      position: relative;
      top: -5px;
      margin-right: 1.2rem;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
}

.price-box {
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  background-color: #1e3c5f;
  padding: 1.2rem 2rem;
  @media (max-width: 1199.98px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
  .btn {
    background-color: var(--primary-color);
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px 12px;
    @media (max-width: 1199.98px) {
      margin-top: 1rem;
      width: 100%;
    }
  }
  .price {
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }
  .text {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.7rem;
    margin-bottom: 0;
  }
}

.circles-svg {
  position: absolute;
  top: 30px;
  left: -90px;
}

.intro-cv-image {
  position: absolute;
  top: -45px;
  left: 0;
  width: 100%;
  @media (max-width: 991.98px) {
    top: 85px;
  }
  @media (max-width: 575.98px) {
    top: 0;
    left: 0;
    position: relative;
    width: 100%;
  }
}
// INTRO SECTION END

// OPTIMIZED CAREER SECTION START
#optimized-career {
  padding: 3.2rem 0;
  background-color: var(--gray-color);
  .img-box {
    width: 230px;
    img {
      width: 100%;
    }
  }
  h3 {
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    color: #2e2e2e;
    font-size: 0.9rem;
    margin-bottom: 0;
    a {
      font-weight: bold;
      color: var(--primary-color);
      text-decoration: underline;
    }
  }
}
// OPTIMIZED CAREER SECTION END

// STEP SECTION START
#step-section {
  padding: 8rem 0;
  background-color: #fff;
  @media (max-width: 991.98px) {
    padding: 3rem 0 1rem 0;
  }
  .section-title {
    margin-bottom: 8rem;
    @media (max-width: 575.98px) {
      margin-bottom: 3rem;
    }
  }
  .step-box {
    text-align: center;
    color: #23263b;
    @media (max-width: 991.98px) {
      margin-bottom: 4rem;
    }
    img {
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    p {
      font-size: 1rem;
      font-weight: bold;
    }
  }
}
// STEP SECTION END

// TEMPLATE CAROUSEL START
#templates-carousel {
  padding: 5rem 0 0 0;
  background-color: var(--gray-color);
  @media (max-width: 575.98px) {
    padding: 3rem 0 1rem 0;
  }
  .text {
    margin-top: 2.3rem;
    font-weight: bold;
    font-size: 1rem;
  }
}
// TEMPLATE CAROUSEL END

// WHY SECTION START
#why-section {
  padding: 5rem 0 0 0;
  background-color: #fff;
  @media (max-width: 575.98px) {
    padding: 3rem 0 1rem 0;
  }
  .text {
    margin-top: 2.3rem;
    font-weight: bold;
    font-size: 1rem;
  }
  .why-cv-image {
    overflow: hidden;
    position: relative;
    bottom: -40px;
    img {
      width: 100%;
    }
  }
}
// WHY SECTION END
#change-cv {
  position: relative;
  text-align: center;
  overflow: hidden;
  padding-top: 6rem;
  padding-bottom: 8rem;
  background-color: var(--secondary-color);
  img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 115%;
  }
  h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.8rem;
    @media (max-width: 575.98px) {
      font-size: 1.5rem;
    }
  }
  a {
    margin: 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 286px;
    height: 64px;
    color: #fff;
    border-radius: 4px;
    border: 2px solid #fff;
    font-weight: bold;
  }
  .content {
    position: relative;
    z-index: 1;
  }
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
