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
                <h4>No Hidden Fees</h4>
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
                <h3>Only 2% of resumes make it past the first round.<br>Be in the top 2%</h3>
                <p>Our CV Online Generator can help you take your career search to new heights with a stylish and <br><router-link to="/">optimized career summary document.</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="testimonies">
      <div class="container">
        <div class="section-title mb-3 mb-md-5">
          <h2>What our clients say</h2>
          <span class="line"></span>
        </div>
        <div class="row pt-5">
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="50">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">John Doe</h4>
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
                  <p>I’ve never enjoyed the process of writing my CV but this CV tool made the task so much easier than I ever thought it could be.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="150">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">Sandra Mills</h4>
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
                  <p>I was able to create my CV in under 30 minutes using this tools and got contacted by 3 companies less than 14 days after submitting applications. Very impressed!</p>
                </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">            
            <div class="testimonies" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-ease="ease" :data-aos-delay="200">
                <div class="testimonies__header">
                  <div class="testimonies__header__profile">
                    <div class="d-flex flex-column">
                      <h4 class="text-left">James Mahoney</h4>
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
                  <p>I loved the step-by-step process of adding information to my CV. It really helped me figure out the best ways to improve my CV without too much effort</p>
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
          <h2>Create The Perfect CV in just 3 steps:</h2>
          <span class="line"></span>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="step-box" data-aos="fade-up" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="0">
              <img src="../assets/images/fill-info.svg" alt="fill info icon">
              <h3>Fill Your Information</h3>
              <p>Choose between 20+ professional CV templates, fill in the blanks.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="step-box" data-aos="fade-up" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="100">
              <img src="../assets/images/customize-cv.svg" alt="customize cv icon">
              <h3>Customise your CV</h3>
              <p>Changez facilement de modèle pendant sa création. À la fin ? Vous pouvez télécharger tous les modèles en même temps !</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="step-box" data-aos="fade-up" data-aos-duration="1000" data-aos-ease="ease" data-aos-delay="200">
              <img src="../assets/images/pdf-download.svg" alt="download pdf icon">
              <h3>Done. Download CV</h3>
              <p>Once you’ve perfected your CV you can download the CV in a PDF format.</p>
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
            <p class="text">Increase your chance of getting a job by creating your CV with our professionally-designed CV templates. Land your dream job by using our templates, which will make your application stand out.</p>
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
        <h2>Why QuickCV Generator?</h2>
        <span class="line"></span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <p class="text">With the help of CV Generator, your CV will stand out from the crowd. Easily personalise the resume design and your CV will be ready and exported in PDF under 5 minutes.</p>            
          </div>
          <div class="col-md-10 mx-auto">
            <div class="faq-box">
              <div class="accordion" role="tablist">
                <b-card no-body class="mb-3">
                  <b-card-header header-tag="header" class="h4" role="tab">
                      <h4 block v-b-toggle.accordion-1 >How our website work?</h4>
                  </b-card-header>
                  <b-collapse visible id="accordion-1" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                      <b-card-text class="text-left">
                          <p>It really is as simple as 1, 2, 3&hellip;<br />1. Sign in to your Online-cv account and choose a CV template from our exclusive database.<br />2. Complete all the fields you wish to include, using our practical examples as a guide.<br />3. Finally download your finished CV and start applying!<br />Within minutes you can get your up-to-date, winning CV online to download.</p>
                      </b-card-text>
                      </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-3">
                  <b-card-header header-tag="header" class="h4" role="tab">
                      <h4 block v-b-toggle.accordion-2>Where can I find my CV to edit?</h4>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                      <b-card-text class="text-left">
                          When you log into your account, you will see all your saved CVs on your account home page. By simply clicking on the CV you wish to edit you will be able to modify texts and change what is included on your final CV before downloading.
                      </b-card-text>
                      </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-3">
                  <b-card-header header-tag="header" class="h4" role="tab">
                      <h4 block v-b-toggle.accordion-3>How long does it take to make my CV?</h4>
                  </b-card-header>
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                      <b-card-text class="text-left">
                          Minutes! With our helpful tips and practical examples, you can create your winning CV on our CV builder easily within half an hour.
                      </b-card-text>
                      </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-3">
                  <b-card-header header-tag="header" class="h4" role="tab">
                      <h4 block v-b-toggle.accordion-4>Can I change my CV template?</h4>
                  </b-card-header>
                  <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                      <b-card-text class="text-left">
                          Yes you can. Changing the CV template you use is super simple. When you first register you will be asked to choose a CV template which you can change from the CV editing page. The selection of templates is visible alongside the preview of your CV. You can click on whichever appeals to you and your information will be imported to this new template as seen in the preview.When completing a CV, you will have the opportunity to fill out all the sections relevant for you, with our helpful CV examples and tips.                                </b-card-text>
                      </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-3">
                  <b-card-header header-tag="header" class="h4" role="tab">
                      <h4 block v-b-toggle.accordion-5>I made my CV on my laptop, can I access it from another device?</h4>
                  </b-card-header>
                  <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                      <b-card-text class="text-left">
                          Yes, users can use any smartphone, tablet, iPad, desktop or laptop computer to access their account and all their saved CVs. CVs will be saved automatically as you work. Оur tool allows its users to log into their account from any Internet access point in order to edit, download and send their CVs at any time from anywhere.
                      </b-card-text>
                      </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" class="h4" role="tab">
                      <h4 block v-b-toggle.accordion-6>Can I make a CV for any type of job?</h4>
                  </b-card-header>
                  <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                      <b-card-body class="text-left">
                      <b-card-text>
                          Yes, you can make a CV for any kind of job with our CV Builder and use different CV templates for different sectors or companies if you wish. We have a multitude of CV samples available in our CV editor, which can be personalised to fit your profile and tailored for the vacancy that interests you.Whatever your professional field, Our tool can help you create a winning CV to stand out in your sector and land the interview! 
                          We even have CV advice for individual job seekers in different industries catered specifically for your needs, including sectors such as healthcare, HR, Project Management, Accounting, Hospitality and many more.
                      </b-card-text>
                      </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
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
          <h2>Change Your CV. Change your life.</h2>
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