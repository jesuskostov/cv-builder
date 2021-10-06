<template>
  <div>
    <div v-if="step < 5" class="container pt-5 pb-5">
      <div class="row">
        <div class="col-12 col-md-7">
          <cv-form />
        </div>
        <div class="col-md-4 offset-md-1 d-none d-md-block">
          <div class="preview">

            <svg :viewBox="`0 0 700 ${previewHeight}`" xmlns="http://www.w3.org/2000/svg">
              <!-- Common use case: embed HTML text into SVG -->
              <foreignObject x="0" y="0" width="100%" :height="previewHeight">
                <templates :onBuilder="true" :selected="selectedCv" />
              </foreignObject>
            </svg>
            <button @click="bigPreview = true" class="view-large-btn">
              <img src="../assets/images/view-icon.png" alt="view icon">
              View large
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step == 5" class="container pt-5 pb-5">
      <div class="row flex-column-reverse flex-md-row">
        <div ref="template" class="col-md-8">
          <svg :viewBox="`0 0 700 ${previewHeight}`" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="0" y="0" width="100%" :height="previewHeight">
              <templates class="mb-5" :onBuilder="true" :selected="selectedCv" />
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
                <button class="edit" @click="bigPreview = true">Change CV template <img src="../assets/images/pencil.svg" alt=""></button>
              </div>
              <button class="custom-btn download mt-auto" @click="generateReport">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bigPreview" class="big-preview">
      <button @click="bigPreview = false" class="close-btn">
        <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
        </svg>
      </button>
      <div class="row h-100">
        <div class="col-md-6 h-100">
          <div class="cv-list">
            <div class="row">
              <div v-for="(item, i) in templates" :key="i" class="col-md-4">
                <img @click="onClick(i)" class="cv-list-img" :class="{'active': selectedCv == i}" :src="require(`@/assets/images/cv-templates/${item.thumb}`)" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 h-100">
          <div class="d-flex align-items-center justify-content-center w-100 h-100">
            <div class="scene">
              <svg :viewBox="`0 0 700 ${previewHeight}`" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="0" y="0" width="100%" :height="previewHeight">
                    <templates :onBuilder="true" :selected="selectedCv" />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CvForm from '../components/CvForm.vue'
import Templates from '../components/Template.vue'
import VueHtml2pdf from 'vue-html2pdf'
import Footer from '../components/Footer.vue'
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
    VueHtml2pdf,
    Footer,
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
    },
    previewHeight() {
      return this.$store.state.previewHeight
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
    toPayment() {
      this.$router.push('/Payment')
    }
  },
  mounted() {
    let cv_variant = JSON.parse(localStorage.getItem('cv_variant'));
    if (cv_variant != null) {
      let payload = cv_variant
      this.$store.dispatch('selectCv', {payload});
    }   
    setTimeout(() => {
      if(this.$refs.template) {
        let height = this.$refs.template.clientHeight
        this.$store.dispatch('setPreviewHeight', {height})
      }
    }, 1500)
  },
  beforeRouteLeave (to, from, next) {
    if (to.name == 'Payment') {
      next()
    } else {
      const answer = window.confirm('Do you really want to leave?')
      if (answer) {
        next()
      } else {
        next(false)
      }
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

.scene {
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.16);
  width: 400px;
  overflow: scroll;
  svg {
    width: 100%;
  }
}

.big-preview {
  position: fixed;
  inset: 0;
  background-color: #fff;
  max-height: 100vh;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: 0;
  z-index: 9999;
  svg {
      width: 25px;
      height: 25px;
  }
}

.cv-list {
  padding: 20px;
  background-color: rgb(240, 240, 240);
  box-shadow: 4px 0 8px 0 rgba(0,0,0,0.16);
  height: 100%;
  overflow: scroll;
}

.cv-list-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 40px;
  &.active {
    outline: 2px solid red;
  }
}


.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.cv-preview-shadow {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
}

.view-large-btn {
  margin-top: 1rem;
  color: #000;
  font-weight: bold;
  border: 0;
  background-color: transparent;
  img {
    position: relative;
    top: -2px;
  }
}

</style>