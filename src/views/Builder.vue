<template>
  <div>
    <navbar :steps="true" />
    <div v-if="step < 5" class="container pt-5 pb-5">
      <div class="row">
        <div class="col-12 col-md-7">
          <cv-form />
        </div>
        <div class="col-md-4 offset-md-1 d-none d-md-block">
          <div class="preview">
            <svg viewBox="0 0 780 2000" xmlns="http://www.w3.org/2000/svg">
              <!-- Common use case: embed HTML text into SVG -->
              <foreignObject x="0" y="0" width="100%" height="2000">
                 <templates :onBuilder="true" :selected="selectedCv" />
              </foreignObject>
            </svg>
            <button @click="bigPreview = true">View large</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step == 5" class="container pt-5 pb-5">
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-md-8">
          <svg viewBox="0 0 780 2000" xmlns="http://www.w3.org/2000/svg">
              <!-- Common use case: embed HTML text into SVG -->
              <foreignObject x="0" y="0" width="100%" height="2000">
                 <templates :onBuilder="true" :selected="selectedCv" />
              </foreignObject>
          </svg>
          <vue-html2pdf 
              :show-layout="false" 
              :float-layout="true" 
              :enable-download="true" 
              :preview-modal="true" 
              :paginate-elements-by-height="1800" 
              filename="hee hee" 
              :pdf-quality="2" 
              :manual-pagination="false" 
              pdf-format="a4" 
              pdf-orientation="portrait" 
              pdf-content-width="100%" 
              ref="html2Pdf" 
          > 
              <templates slot="pdf-content" :onBuilder="true" :selected="selectedCv" />
          </vue-html2pdf> 
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="preview px-3 py-3">
            <div class="steps-title mb-4">
              <h3>Summary Section</h3>
              <span class="line"></span>
            </div>
            <div class="d-flex flex-column flex-grow-1" v-if="step == 5">
              <div>
                <button class="edit" @click="goTo(1)">Personal <img src="../assets/images/pencil.svg" alt=""></button>
                <button class="edit" @click="goTo(2)">Work history <img src="../assets/images/pencil.svg" alt=""></button>
                <button class="edit" @click="goTo(3)">Education and skills <img src="../assets/images/pencil.svg" alt=""></button>
                <button class="edit" @click="goTo(4)">Other <img src="../assets/images/pencil.svg" alt=""></button>
              </div>
              <button class="custom-btn download mt-auto" @click="generateReport">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bigPreview" class="big-preview">
      <button @click="bigPreview = false">CLOSE</button>
      <svg viewBox="0 0 780 1000" xmlns="http://www.w3.org/2000/svg">
          <!-- Common use case: embed HTML text into SVG -->
          <foreignObject x="0" y="0" width="100%" height="3000">
              <templates :onBuilder="true" :selected="selectedCv" />
          </foreignObject>
      </svg>
      <div class="carousel">
        <div v-for="(item, i) in templates" :key="i" >
          <img @click="onClick(i)" class="carousel-img" :class="{'active': selectedCv == i}" :src="require(`@/assets/images/cv-templates/${item.thumb}`)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CvForm from '../components/CvForm.vue'
import Templates from '../components/Template.vue'
import Navbar from '../components/Navigation.vue'
import VueHtml2pdf from 'vue-html2pdf'
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import '../../node_modules/swiper/dist/css/swiper.css'

export default {
  data() {
    return {
      bigPreview: false,
      swiperOption: {
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: '8',
        loop: true,
        autoplay: 2000,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      },
    }    
  },
  components: {
    CvForm,
    Templates,
    Navbar,
    VueHtml2pdf,
    // Swiper,
    // SwiperSlide,
  },
  computed: {
    selectedCv() {
      return this.$store.state.selectedCv
    },
    step() {
      return this.$store.state.step
    },
    templates() {
      return this.$store.state.templates
    }
  },
  methods: {
    goTo(step) {
      this.$store.dispatch('step', {step})
    },
    generateReport () {
      this.$router.push('/payment');
      // this.$refs.html2Pdf.generatePdf()
    },
    onClick(i) {
      let payload = i
      localStorage.setItem('cv_variant', payload);
      this.$store.dispatch('selectCv', {payload});
    },
  },
  mounted() {
    let cv_variant = JSON.parse(localStorage.getItem('cv_variant'));
    if (cv_variant != null) {
      let payload = cv_variant
      this.$store.dispatch('selectCv', {payload});
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #E9ECF0;
  height: 100%;
  padding: 20px;
  .edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 43px;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 9px;
    border: 0;    
    background-color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.16);  
  }
}

.big-preview {
  position: fixed;
  inset: 0;
  background-color: #fff;
  svg {
    margin-top: 30px;
    width: 320px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.16);
  }
}

.carousel {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: #F2F5F7;
  display: flex;
  overflow-x: scroll;
  .carousel-img {
    width: 200px;
    &.active {
      outline: 2px solid red;
    }
  }
}

</style>