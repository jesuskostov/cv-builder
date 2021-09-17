<template>
  <div>
   
    <templates v-if="onBuilder" :template-name="selected" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :motherLang="motherLanguages" :interests="interests" :accomp="accomp" />
    <div v-if="!onBuilder"  class="template">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in list" :key="item" :virtualIndex="item">
          <templates :preview="preview" :template-name="item" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :motherLang="motherLanguages" :interests="interests" :accomp="accomp" />
          <button class="custom-btn mt-3" @click="onClick(item)">Use template</button>
        </swiper-slide>
      </swiper>
    </div>
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
  name: "HelloWorld",
  components: {
    Templates,
    Swiper,
    SwiperSlide,
  },
  props: ['onBuilder','selected', 'preview'],
  data() {
    return {
      swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: '3',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows : false
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
    motherLanguages() {
      return this.$store.state.motherLang
    },
    interests() {
      return this.$store.state.interests
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
    if (accomp != '') {
      this.$store.dispatch('saveAccomp', {accomp})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template {
  width: 100%;
  display: flex;
}

.carousel {
  width: 100%;
}

</style>
