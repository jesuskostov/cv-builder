<template>
  <div>
    <templates v-if="onBuilder" :template-name="selected" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :interests="interests" :accomp="accomp" />
    <div v-if="!onBuilder"  class="template">
      <div v-for="item in list" :key="item">
        <templates :template-name="item" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :interests="interests" :accomp="accomp" />
        <button @click="onClick(item)">Use template</button>
      </div>
    </div>
  </div>
</template>

<script>
import Templates, { templatesCount } from "./templates/Index";

export default {
  name: "HelloWorld",
  components: {
    Templates,
  },
  props: ['onBuilder','selected'],
  data() {
    return {
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
    if (cv_variant != null) {
      let payload = cv_variant
      this.$store.dispatch('selectCv', {payload});
    }
    if(personal) {
      this.$store.dispatch('savePersonal', {personal})
    }
    if(workHistory.length != 0) {
      this.$store.dispatch('saveWorkHistory', {workHistory});
    }
    if (education.length != 0) {
      this.$store.dispatch('saveEducation', {education})
    }
    if (skills.length != 0) {
      this.$store.dispatch('saveSkills', {skills})
    }
    if (lang.length != 0) {
      this.$store.dispatch('saveLanguages', {lang})
    }
    if (interests.length != 0) {
      this.$store.dispatch('saveInterests', {interests})
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
  zoom: 0.65;
  overflow-x: scroll;
}
</style>
