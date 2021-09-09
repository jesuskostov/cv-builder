<template>
  <div class="template">
    <div v-if="personal">
      PERSONAL
      <br>
      {{personal.firstName}} 
      <br>
      {{personal.lastName}} 
      <br>
      {{personal.email}} 
      <br>
      {{personal.phoneNumber}} 
      <br>
      {{personal.city}} 
      <br>
      {{personal.zipCode}} 
      <br>
      {{personal.profession}} 
      <br>
      {{personal.socialProfiles}}
    </div>
    <div v-for="(work, i) in workHistory" :key="i">
      WORK HISTORY
      <br>
      {{work.jobTitle}} 
      <br>
      {{work.employer}} 
      <br>
      {{work.startDate}} 
      <br>
      {{work.endDate}} 
      <br>
      {{work.currentlyWork}} 
      <br>
      {{work.description}} 
    </div>
    <br>
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
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template {
  width: 400px;
  padding: 20px;
  display: flex;
  background: red;
  color: white;
}
</style>
