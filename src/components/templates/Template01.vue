<template>
  <div class="template">
    <!-- Personal -->
    <div v-if="personal">
      PERSONAL
      <br>
      First name: {{personal.firstName}} 
      <br>
      Last name: {{personal.lastName}} 
      <br>
      Email: {{personal.email}} 
      <br>
      Number: {{personal.phoneNumber}} 
      <br>
      City: {{personal.city}} 
      <br>
      ZipCode: {{personal.zipCode}} 
      <br>
      Profession: {{personal.profession}} 
      <br>
      Social Profiles: {{personal.socialProfiles}}
    </div>
    <!-- Work history -->
    <div v-for="(work, i) in workHistory" :key="i">
      WORK HISTORY
      <br>
      Job title:{{work.jobTitle}} 
      <br>
      Employer: {{work.employer}} 
      <br>
      Start date: {{work.startDate}} 
      <br>
      End date: {{work.endDate}} 
      <br>
      Current work: {{work.currentlyWork}} 
      <br>
      Description: {{work.description}} 
    </div>
    <!-- Education and skills -->
    <div v-if="education">
      <div v-for="(school, i) in education" :key="i">
        SCHOOL
        <br>
        School name: {{school.schoolName}}
        <br>
        School Location: {{school.schoolLocation}}
        <br>
        Degree: {{school.degree}}
        <br>
        Start date: {{school.startDate}}
        <br>
        End date: {{school.endDate}}
        <br>
        Description: {{school.description}}
      </div>
    </div>
    <div v-if="skills">
      <div v-for="(skill, i) in skills" :key="i">
        SKILLS
        <br>
        Skill name: {{skill.title}}
        <br>
        Rating: {{skill.rating}}
      </div>
    </div>
    <div v-if="languages">
      <div v-for="(lang, i) in languages" :key="i">
        Lang name: {{lang.title}}
        <br>
        Confident: {{lang.rating}}
      </div>
    </div>
    <br>
    <div v-if="interests">
      <div v-for="(interest,i) in interests" :key="i">
        Title: {{interest.title}} 
      </div>
    </div>
    <br>
    <div v-if="accomp">
      Accomplishments:
      <br>
      {{accomp}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Template01",
  props: {
    personal: {
      type: Object,
      default: () => {},
    },
    workHistory: {
      type: Array
    },
    education: {
      type: Array
    },
    skills: {
      type: Array
    },
    languages: {
      type: Array
    },
    interests: {
      type: Array
    },
    accomp: {
      type: String
    },
    templateName: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template {
  width: 400px;
  padding: 20px;
  background: blue;
  color: white;
}
div {
  margin-bottom: 30px;
}
</style>
