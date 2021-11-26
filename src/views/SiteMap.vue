<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5">Mappa del sito</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4">
                <div class="d-flex flex-column text-left">
                    <router-link to="/">Homepage</router-link>
                    <router-link to="/benefits">I nostri valori</router-link>
                    <router-link to="/help">Aiuto</router-link>    
                    <router-link to="/site-map">Mappa del sito</router-link>                                                        
                    <router-link to="/contact">Contattaci</router-link>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex flex-column text-left">
                    <router-link to="/partnership">Partnership</router-link>
                    <router-link to="/secure-payment">Secure Payment</router-link>
                    <router-link to="#">Privacy Policy</router-link>
                    <router-link to="#">Terms of Service</router-link>
                    <router-link to="#">Cookie Policy</router-link>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex flex-column text-left">
                    <router-link to="/browse-templates">Get Started</router-link>
                    <router-link to="/browse-templates">Browse Templates</router-link>                        
                    <router-link to="/how-to-write-cv">How to write CV</router-link>
                    <router-link to="/feedback">Feedback</router-link>
                    <router-link to="/faq">FAQ</router-link>
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