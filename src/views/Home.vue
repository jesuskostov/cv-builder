<template>
  <div class="home">
    <navbar />
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-left">
            <h1 class="mb-5">Create a CV that Recruiters will Love</h1>
            <div class="benefits mb-4">
              <div class="benefits__box">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>Career Optimised CV Templates</h4>
              </div>
              <div class="benefits__box">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>Edit your CV on any device</h4>
              </div>
              <div class="benefits__box">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>No software to download</h4>
              </div>
              <div class="benefits__box">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>No Hidden Fees</h4>
              </div>
              <div class="benefits__box">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path id="Path_396" data-name="Path 396" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm-1-6,7.07-7.071L16.659,7.515,11,13.172,8.174,10.343,6.76,11.757Z" transform="translate(-2 -2)" fill="#65af2c"/>
                </svg>
                <h4>Download in PDF</h4>
              </div>
            </div>
            <div class="price-box">
              <div class="text-left mr-4">
                <p class="price">1,99 EUR</p>
                <p class="text">* Then automatically renewed by subscription,<br>for an indefinite period, at 39 € per month.</p>
              </div>
              <button @click="start" class="btn">Get Started Now</button>
            </div>
          </div>
          <div class="col-md-6 position-relative">
            <img class="circles-svg" src="../assets/images/circles-behind-cv-image.svg" alt="circle images">
            <img class="intro-cv-image" src="../assets/images/intro-cv-image.svg" alt="intro cv image">
          </div>
        </div>
      </div>
    </div>
    <div id="optimized-career">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center">
              <img class="mr-5" src="../assets/images/optimized-career.png" alt="optimized career">
              <div class="text-left">
                <h3>Only 2% of resumes make it past the first round.<br>Be in the top 2%</h3>
                <p>Our CV Online Generator can help you take your career search to new heights with a stylish and <br><router-link to="/">optimized career summary document.</router-link></p>
              </div>
            </div>
          </div>
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
            <div class="step-box">
              <img src="../assets/images/fill-info.svg" alt="fill info icon">
              <h3>Fill Your Information</h3>
              <p>Choose between 20+ professional CV templates, fill in the blanks.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="step-box">
              <img src="../assets/images/customize-cv.svg" alt="customize cv icon">
              <h3>Customise your CV</h3>
              <p>Not happy with the final result? No problem! Switch templates seamlessly.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="step-box">
              <img src="../assets/images/pdf-download.svg" alt="download pdf icon">
              <h3>Done. Download CV</h3>
              <p>Once you’ve perfected your CV you can download the CV in a PDF format.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="templates-carousel">
      <div class="container">
        <div class="section-title">
          <h2>Make a CV that stands out</h2>
          <span class="line"></span>
        </div>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <p class="text">Increase your chance of getting a job by creating your CV with our professionally-designed CV templates. Land your dream job by using our templates, which will make your application stand out.</p>
          </div>
        </div>
      </div>
      <!-- <div>
        <img src="../assets/images/cv-templates/cv-template-2.png" alt="">
      </div> -->
      <templates :preview="true" />
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
          <div class="why-cv-image w-100 text-center">
            <img src="../assets/images/why-quickcv-image.png" alt="Why QuickCV Generator?">
          </div>
        </div>
      </div>
    </div>
    <div id="change-cv">
      <img src="../assets/images/squares.svg" alt="squares icons">
      <h2>Change Your CV. Change your life.</h2>
      <router-link to="/">Get Started Now</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navigation.vue'
import Templates from '../components/Template.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Templates
  },
  methods: {
    async start() {
      let step = 1;
      await this.$store.dispatch('step', {step});
      this.$router.push('/builder');
    }
  },
}
</script>

<style lang="scss" scoped>
// INTRO SECTION START
#intro-section {
  background-color: var(--secondary-color);
  padding: 5.6rem 0 3.2rem 0;
}

h1 {
  text-align: left;
  font-size: 2.7rem;
  font-weight: bold;
  color: #fff;
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
  .btn {
    background-color: var(--primary-color);
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px 12px;
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
}
// INTRO SECTION END

// OPTIMIZED CAREER SECTION START
#optimized-career {
  padding: 3.2rem 0;
  background-color: var(--gray-color);
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
  .section-title {
    margin-bottom: 8rem;
  }
  .step-box {
    text-align: center;
    color:#23263B;
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
  padding: 5rem 0;
  background-color: var(--gray-color);
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
  .text {
    margin-top: 2.3rem;
    font-weight: bold;
    font-size: 1rem;
  }
  .why-cv-image {
    position: relative;
    bottom: -40px;
  }
}
// WHY SECTION END
#change-cv {
  position: relative;
  text-align: center;
  padding: 6rem 0;
  background-color: var(--secondary-color);
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.8rem;
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
  }
}
</style>