<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-left">
            <h1 class="mb-4 mb-md-5">Create a CV that Recruiters will Love</h1>
            <div class="benefits mb-4">
              <div class="benefits__box" data-aos="fade" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="0" >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>Career Optimised CV Templates</h4>
              </div>
              <div class="benefits__box" data-aos="fade" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="100">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>Edit your CV on any device</h4>
              </div>
              <div class="benefits__box" data-aos="fade" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="200">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>No software to download</h4>
              </div>
              <div class="benefits__box" data-aos="fade" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="300">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>Professional CV</h4>
              </div>
              <div class="benefits__box" data-aos="fade" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="400">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>Download in PDF</h4>
              </div>
            </div>
            <!-- <img class="d-block d-md-none intro-cv-image" src="../assets/images/intro-cv-image.svg" alt="intro cv image"> -->
            <div class="price-box">
              <div class="text-left mr-4">
                <p class="price">1,99 EUR</p>
                <p class="text">* Then automatically renewed by subscription,<br>for an indefinite period, at 39 € per month.</p>
              </div>
              <router-link to="/browse-templates" class="btn">Get Started Now</router-link>
            </div>
          </div>
          <div class="col-md-6 position-relative d-none d-md-block">
            <div>
              <img class="circles-svg" src="../assets/images/circles-behind-cv-image.svg" alt="circle images">
            </div>
            <div>
              <img class="intro-cv-image displayBox" src="../assets/images/intro-cv-image.png" alt="intro cv image" data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" data-aos-ease="ease">
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
                <img src="../assets/images/optimized-career@2x.png" alt="optimized career">
              </div>
              <div class="text-left">
                <h3>Only 2% of resumes make it past the first round.<br>Be in the top 2%!</h3>
                <p>Our Unique CV Tools will help you take your career search to new heights with an efficient, optimized and stylish<br><router-link to="/">CV.</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="testimonies">
      <div class="container">
        <div class="section-title mb-3 mb-md-5">
          <h2>What our clients say:</h2>
          <span class="line"></span>
        </div>
        <div class="row pt-5">
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Bernardo Buontalenti</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>This has been the best cv help ever! Nothing but job offers. Exceeded my expectations. I totally recommend it!</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="150">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Eva C***</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>Very easy to use service. Multiple options for templates. Fill in the blank in many sections and everything is already pre-formatted. Flawless! I will use this service again.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="200">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Giulio Parigi</h4>
                      <div class="text-left">
                        <svg v-for="i in 5" :key="i" class="star active" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonies__body">
                  <p>I FINALLY have a professional-looking resume!!!!!! This has saved me so many tears! Effortless. WOW!!!!! MANY THANKS!!!!!!</p>
                </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <router-link to="/feedback" class="custom-btn big">View all</router-link>
        </div>
      </div>
    </div>
    <div id="step-section">
      <div class="container">
        <div class="section-title">
          <h2>Create Your Perfect CV within few minutes:</h2>
          <span class="line"></span>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="step-box" data-aos="fade-up" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="0">
              <img src="../assets/images/fill-info.svg" alt="fill info icon">
              <h3>Fill Your Information</h3>
              <p>Choose between our collection of professional CV templates, and simply fill in the blanks.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="step-box" data-aos="fade-up" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="100">
              <img src="../assets/images/customize-cv.svg" alt="customize cv icon">
              <h3>Customise your CV</h3>
              <p>Swap in one click between our templates during your CV creation to pick the best one!</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="step-box" data-aos="fade-up" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="200">
              <img src="../assets/images/pdf-download.svg" alt="download pdf icon">
              <h3>Download your CV in PDF format</h3>
              <p>Once completed you can download your CV and immediately send it to recruiters!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="templates-carousel">      
      <div class="container mb-3 mb-sm-0">
        <div class="section-title">
          <h2>Make a CV that stands out</h2>
          <span class="line"></span>
        </div>
        <div class="row">
          <div class="col-md-9 mx-auto">
            <p class="text">Increase your chance of getting your dream job by creating your best CV ever! <br> Our professional tools have been forged for this only purpose: <br> make your application stand out!</p>
          </div>
        </div>
      </div>
     
      <templates :preview="true" />
     
      <div class="text-center mb-5">
        <router-link to="/browse-templates" class="custom-btn big">View all</router-link>
      </div>
    </div>
    <div id="why-section">
      <div class="section-title">
        <h2>Why Using Our Unique Tools?</h2>
        <span class="line"></span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <p class="text">With our uniquely forged set of tools, your CV will uniquely stand out from the crowd!
            Smart features to personalise easily and fastly your CV on desktop and mobile.
            And download your PDF in less than 5 minutes!</p>            
            <div class="text-center mt-5">
              <router-link to="/faq" class="custom-btn big">Go to FAQ page</router-link>
            </div>
          </div>
          <div class="why-cv-image w-100 text-center">
            <img src="../assets/images/why-quickcv-image@2x.png" alt="Why QuickCV Generator?" >
          </div>
        </div>
      </div>
    </div>
    <div id="change-cv">
      <div class="container">
        <img src="../assets/images/squares.svg" alt="squares icons">
        <div class="content">
          <h2>Change Your CV: Change Your Life!</h2>
          <router-link to="/browse-templates">Get Started Now</router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Templates from '../components/Template.vue'
import Footer from '../components/Footer.vue'
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import '../../node_modules/swiper/dist/css/swiper.css'

export default {
  name: 'Home',
  components: {
    Templates,
    Footer,
  },
  methods: {
    async start() {
      let step = 1;
      await this.$store.dispatch('step', {step});
      this.$router.push('/builder');
    },
  },
}
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
  background-color: #1E3C5F;
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
    margin-bottom: .2rem;
  }
  .text {
    font-weight: bold;
    color: rgba(255,255,255,0.6);
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
    color: #2E2E2E;
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
    color:#23263B;
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