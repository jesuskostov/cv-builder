<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-4 mb-md-5">Contact us</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="form contact-form">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="w-100 form-control" placeholder="Your name">
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="w-100 form-control" placeholder="Email">
                        </div>
                        <div class="col-md-12 mt-3">
                            <textarea cols="10" rows="5" class="form-control" placeholder="Your message..."></textarea>
                            <div class="text-center">
                                <button class="custom-btn big">Send</button>
                            </div>
                        </div>
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
  components: {
    Footer,
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
</style>