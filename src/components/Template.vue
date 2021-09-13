<template>
  <div class="hello">
    <div>
      <button v-for="item in list" :key="item" @click="onClick(item)">
        {{ item }}
      </button>
    </div>
    <h1>Loaded {{ selectedCv }}</h1>
    <templates :template-name="selectedCv" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :interests="interests" :accomp="accomp" />
    <!-- <h1>Display All</h1>
    <div v-for="item in list" :key="item">
      <templates :template-name="item" :content="content" />
    </div> -->
  </div>
</template>

<script>
import Templates, { templatesCount } from "./templates/Index";

export default {
  name: "HelloWorld",
  components: {
    Templates,
  },
  data() {
    return {
      selectedCv: 1,
      list: Array(templatesCount)
        .fill(0)
        .map((e, i) => i + 1),
    };
  },
  methods: {
    onClick(payload) {
      this.selectedCv = payload;
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
.hello {
  width: 30%;
}
</style>
