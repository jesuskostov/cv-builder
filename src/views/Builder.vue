<template>
  <div>
    <div v-if="step < 5" class="container pt-5 pb-5">
      <div class="row">
        <div class="col-12 col-md-7">
          <cv-form />
        </div>
        <div class="col-md-4 offset-md-1 d-none d-md-block">
          <div class="preview">
            <p class="text-left mb-1">
              <b>{{ nickname }}</b>
            </p>
            <svg
              :viewBox="`0 0 700 ${previewHeight}`"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Common use case: embed HTML text into SVG -->
              <foreignObject x="0" y="0" width="100%" :height="previewHeight">
                  <templates
                    :color="color"
                    :onBuilder="true"
                    :selected="selectedCv"
                  />
              </foreignObject>
            </svg>
            <div class="colors">
              <button
                v-for="(item, i) in colors"
                :key="i"
                @click="color = item"
                :class="color === item && 'is-active'"
                :style="`background-color: ${item}`"
              ></button>
            </div>
            <button @click="showBigPreview" class="view-large-btn">
              <img src="../assets/images/zoom.svg" alt="view icon" />
              View large
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step == 5" class="container pt-5 pb-5">
      <div class="row flex-column-reverse flex-md-row">
        <div ref="template" class="col-md-8">
          <svg
            :viewBox="`0 0 700 ${previewHeight}`"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="0" y="0" width="100%" :height="previewHeight">
              <templates
                class="mb-5"
                :color="color"
                :onBuilder="true"
                :selected="selectedCv"
              />
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
            <templates
              slot="pdf-content"
              :onBuilder="true"
              :selected="selectedCv"
            />
          </vue-html2pdf>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="preview p-4">
            <div class="steps-title mb-4">
              <h3>Template configuration</h3>
              <span class="line"></span>
            </div>
            <div class="d-flex flex-column mb-4" v-if="step == 5">
              <div>
                <p class="text-left mb-1">
                  Template name: <b>{{ nickname }}</b>
                </p>
                <div class="colors justify-content-start mb-4">
                  <button
                    v-for="(item, i) in colors"
                    :key="i"
                    @click="color = item"
                    :style="`background-color: ${item}`"
                  ></button>
                </div>
                <button class="edit" @click="showBigPreview">
                  Change CV template
                  <img src="../assets/images/pencil.svg" alt="" />
                </button>
              </div>
            </div>
            <div class="steps-title mb-4">
              <h3>Summary Section</h3>
              <span class="line"></span>
            </div>
            <div class="d-flex flex-column flex-grow-1" v-if="step == 5">
              <div>
                <button class="edit" @click="goTo(1)">
                  Personal <img src="../assets/images/pencil.svg" alt="" />
                </button>
                <button class="edit" @click="goTo(2)">
                  Work history <img src="../assets/images/pencil.svg" alt="" />
                </button>
                <button class="edit" @click="goTo(3)">
                  Education & skills
                  <img src="../assets/images/pencil.svg" alt="" />
                </button>
                <button class="edit" @click="goTo(4)">
                  Other <img src="../assets/images/pencil.svg" alt="" />
                </button>
              </div>
              <button
                class="custom-btn download mt-auto"
                @click="generateReport"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bigPreview" class="big-preview">
      <button @click="hideBigPreview" class="close-btn">
        <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
          />
        </svg>
      </button>
      <div class="row no-gutters h-100">
        <div class="col-md-5 col-lg-4 h-100">
          <div class="cv-list">
            <div class="row mx-n2">
              <div
                v-for="(item, i) in templates"
                :key="i"
                class="col-6 col-md-4 px-2 mb-3"
              >
                <div class="img-holder" :class="{ active: selectedCv == i }">
                  <img
                    @click="onClick(i)"
                    class="cv-list-img"
                    :src="require(`@/assets/images/cv-templates/${item.thumb}`)"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-8 h-100">
          <div class="overflow-auto h-100">
            <div class="scene-holder">
              <div class="scene">
                <svg
                  :viewBox="`0 0 700 ${previewHeight}`"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <foreignObject
                    x="0"
                    y="0"
                    width="100%"
                    :height="previewHeight"
                  >
                    <templates
                      :color="color"
                      :onBuilder="true"
                      :selected="selectedCv"
                    />
                  </foreignObject>
                </svg>
                <div class="colors in-builder">
                  <button
                    v-for="(item, i) in colors"
                    :key="i"
                    @click="color = item"
                    :class="color === item && 'is-active'"
                    :style="`background-color: ${item}`"
                  ></button>
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
import CvForm from "../components/CvForm.vue";
import Templates from "../components/Template.vue";
import VueHtml2pdf from "vue-html2pdf";
import Footer from "../components/Footer.vue";
import { templates } from "../store/templates";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import '../../node_modules/swiper/dist/css/swiper.css'

export default {
  data() {
    return {
      color: "#91976f",
      colors: {
        orange: "#e78738",
        blue: "#4f51df",
        green: "#9ba76a",
        lightBlue: "#5182c2",
        purple: "#8a75aa",
      },
      bigPreview: false,
      swiperOption: {
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: "8",
        loop: true,
        autoplay: 2000,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
      nickname: "",
    };
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
      return this.$store.state.selectedCv;
    },
    step() {
      return this.$store.state.step;
    },
    templates() {
      return this.$store.state.templates;
    },
    previewHeight() {
      return this.$store.state.previewHeight;
    },
  },
  watch: {
    selectedCv: {
      handler(val) {
        this.nickname = templates[val].nickname;
      },
      deep: true,
    },
  },
  methods: {
    goTo(step) {
      this.$store.dispatch("step", { step });
    },
    generateReport() {
      this.$router.push("/payment");
      // this.$refs.html2Pdf.generatePdf()
    },
    onClick(i) {
      let payload = i;
      localStorage.setItem("cv_variant", payload);
      this.$store.dispatch("selectCv", { payload });
    },
    toPayment() {
      this.$router.push("/Payment");
    },
    showBigPreview() {
      this.bigPreview = true;
      document.body.style.overflow = "hidden";
    },
    hideBigPreview() {
      this.bigPreview = false;
      document.body.style.overflow = "auto";
    },
  },
  mounted() {
    let cv_variant = JSON.parse(localStorage.getItem("cv_variant"));
    if (cv_variant != null) {
      let payload = cv_variant;
      this.$store.dispatch("selectCv", { payload });
    }
    setTimeout(() => {
      if (this.$refs.template) {
        let height = this.$refs.template.clientHeight;
        this.$store.dispatch("setPreviewHeight", { height });
      }
    }, 1500);
    let cv = this.$store.state.selectedCv;
    this.nickname = templates[cv].nickname;
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "Payment") {
      next();
    } else {
      const answer = window.confirm("Do you really want to leave?");
      if (answer) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.colors {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
  &.in-builder {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 1rem 2rem 1rem 1em;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 4px 15px 10px rgba(22, 22, 23, 0.08);
    transform: translateY(-50%);
    flex-direction: column;
    background-color: #fff;
  }
  button {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    flex-shrink: 0;
    transition: transform 0.25s ease;
    will-change: transform;

    &:hover {
      transform: scale(1.1);
    }

    &.is-active {
      box-shadow: 0px 0px 0px 2px white, 0 0 3px 2px rgba(44, 46, 46, 0.4);
    }
  }
}

.preview {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #e9ecf0;
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
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
  }
}

.scene-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 100%;
}

.scene {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
  min-width: 50vh;

  svg {
    width: 100%;
  }
}

.big-preview {
  position: fixed;
  inset: 0;
  background-color: #e9ecf0;
  max-height: 100vh;
  z-index: 10000;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: 0;
  z-index: 9999;
  padding: 0.5rem;
  svg {
    width: 18px;
    height: 18px;
  }
}

.cv-list {
  padding: 20px;
  background-color: white;
  height: 100%;
  overflow: scroll;
}

.cv-list::-webkit-scrollbar {
  width: 0.4em;
  border-radius: 10px;
}

.cv-list::-webkit-scrollbar-track {
  // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.cv-list::-webkit-scrollbar-thumb {
  background-color: #9ca0a5;
  border-radius: 10px;
}

.img-holder {
  position: relative;
  height: 0;
  border: 1px solid #e2e4e6;

  padding-top: 144%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &.active {
    border: 1px solid var(--blue);
    box-shadow: 0px 0px 0 3px #007bff31;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(204, 241, 255, 0.146);
      z-index: 10;
    }
  }

  &:hover:not(.active) {
    box-shadow: 0 2px 3px rgba(44, 46, 46, 0.1);
  }
}

.cv-list-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0.5rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.cv-preview-shadow {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);
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
