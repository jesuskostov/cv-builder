<template>
  <div>
    <!-- Preview on builder -->
    <templates v-if="onBuilder" :color="color" :template-name="selected" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :motherLang="motherLang" :interests="interests" :licenses="licenses" :accomp="accomp" />
    <!-- /Preview on builder -->
    
    <!-- Carousel with templates -->
    <div v-if="!onBuilder && !onBrowse" class="template">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, i) in templates" :key="i" :virtualIndex="item" class="carouselItem">
          <p class="text-center h5 mb-2">{{item.nickname}}</p>
          <img :src="require(`@/assets/images/cv-templates/it/${item.thumb}`)" class="img-fluid" alt="">
          <button class="custom-btn mt-3" @click="onClick(i)">Use template</button>
        </swiper-slide>
      </swiper>
    </div>
    <!-- /Carousel with templates -->

    <!-- Browsing templates -->
    <div v-if="onBrowse" class="container browse-template">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, i) in templates" :key="i" data-aos="fade-up" data-aos-duration="300" data-aos-ease="ease">
          <p class="text-left mb-2">{{item.nickname}}</p>
          <div class="item">
            <img @click="onClick(i)" :src="require(`@/assets/images/cv-templates/it/${item.thumb}`)" alt="">
            <button class="custom-btn mt-3" @click="onClick(i)">Use template</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Browsing templates -->
  </div>
</template>

<script>
import Templates, { templatesCount } from "./templates/Index";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import '../../node_modules/swiper/dist/css/swiper.css'

// import "swiper/css";
// import "swiper/css/pagination";
// import "./style.css";
// import SwiperCore, { Pagination } from "swiper";
// SwiperCore.use([Pagination]);

export default {
  name: "Template",
  components: {
    Templates,
    Swiper,
    SwiperSlide,
  },
  props: ['onBuilder','selected', 'preview', 'onBrowse', 'color'],
  data() {
    return {
      swiperOption: {
          grabCursor: true,
          spaceBetween: 24,
          slidesPerView: '7',
          loop: true,
          autoplay: 2000,
          breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24
            }
          }
      },
      list: Array(templatesCount)
        .fill(0)
        .map((e, i) => i + 1),
    };
  },
  methods: {
    async onClick(payload) {
      let step = 1;
      localStorage.setItem('cv_variant', payload);
      await this.$store.dispatch('selectCv', {payload});
      await this.$store.dispatch('step', {step});
      this.$router.push('/builder');
    },
  },
  computed: {
    templates() {
      return this.$store.state.templates
    },
    personal() {
      return this.$store.state.personal 
    },
    workHistory() {
      return this.$store.state.workHistory 
    },
    education() {
      return this.$store.state.education
    },
    skills() {
      return this.$store.state.skills
    },
    languages() {
      return this.$store.state.languages
    },
    motherLang() {
      return this.$store.state.motherLang
    },
    interests() {
      return this.$store.state.interests
    },
    licenses() {
      return this.$store.state.licenses
    },
    accomp() {
      return this.$store.state.accomplishments
    }
  },
  mounted() {    
    // Get them back on refresh from the local storage
    let personal = JSON.parse(localStorage.getItem('user'));
    let workHistory = JSON.parse(localStorage.getItem('workHistory'));
    let education = JSON.parse(localStorage.getItem('education'));
    let skills = JSON.parse(localStorage.getItem('skills'));
    let lang = JSON.parse(localStorage.getItem('spokenLanguages'));
    let interests = JSON.parse(localStorage.getItem('interests'));
    let accomp = JSON.parse(localStorage.getItem('accomplishments'));
    let cv_variant = JSON.parse(localStorage.getItem('cv_variant'));
    let motherLanguages = JSON.parse(localStorage.getItem('motherLanguages'));
    let licenses = JSON.parse(localStorage.getItem('licenses'));
    if (cv_variant != null) {
      let payload = cv_variant
      this.$store.dispatch('selectCv', {payload});
    }
    if(personal) {
      this.$store.dispatch('savePersonal', {personal})
    }
    if(workHistory != null && workHistory.length != 0) {
      this.$store.dispatch('saveWorkHistory', {workHistory});
    }
    if (education != null && education.length != 0) {
      this.$store.dispatch('saveEducation', {education})
    }
    if (skills != null && skills.length != 0) {
      this.$store.dispatch('saveSkills', {skills})
    }
    if (lang != null && lang.length != 0) {
      this.$store.dispatch('saveLanguages', {lang})
    }
    if (interests != null && interests.length != 0) {
      this.$store.dispatch('saveInterests', {interests})
    }
    if (motherLanguages != null && motherLanguages.length != 0) {
      let lang = motherLanguages
      this.$store.dispatch('saveMotherLanguages', {lang})
    }
    if (licenses != null && licenses.length != 0) {
      this.$store.dispatch('saveLicenses', {licenses});
    }
    if (accomp != '') {
      this.$store.dispatch('saveAccomp', {accomp})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.template {
  width: 100%;
  height: 100%;
  display: flex;
}

.carousel {
  width: 100%;
}

.browse-template {
  .item {
    cursor: pointer;
    padding: 20px;
    background-color: #E9ECF0;
    transition: 0.4s;
    border-radius: 4px;
    img {
      width: 100%;
      transition: 0.4s;
    }
    &:hover {
      background-color: #e2e4e7;
      transition: 0.4s;
      img {
        transform: translateY(-10px);
        transition: 0.4s;
      }
    }
    .custom-btn {
      height: 30px;
      width: 100%;
      font-size: 0.8rem;
    }
  }
}

.swiper-slide {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s;
  .custom-btn {
    opacity: 0;
    width: 70%;
    left: 50%;
    height: auto;
    font-size: .815rem;
    transform: translateX(-50%);
    bottom: 120px;
    visibility: hidden;
    transition: 0.5s;
    position: absolute;
  }
  &:hover {
    z-index: 9999;
    transform: scale(1.2);
    transition: 0.5s;
    @media (max-width: 575.98px) {
      transform: scale(1);
    }
    .custom-btn {
      opacity: 1;
      visibility: visible;
      transition: 0.5s;
    }
    
  }
}

</style>
