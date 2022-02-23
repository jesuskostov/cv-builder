<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">            
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-4 mb-md-5">Diventiamo partner !</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="text-left">                
                    <p><b>Il nostro servizio ti permette di offrire ai tuoi clienti un servizio di qualità ad un prezzo accessibile.</b></p>
                    <p><b>Vuoi offrirci una collaborazione?</b><br>Vuoi collaborare solo in uno dei settori che trattiamo?<br>Scrivici ora!</p>
                    <div class="text-center mt-5">
                        <router-link :to="{name: 'Contact'}" class="custom-btn py-3">Contattaci</router-link>
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