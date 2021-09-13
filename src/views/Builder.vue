<template>
  <div>
    <navbar :steps="true" />
      <cv-form />
    <!-- <div style="display: flex; width: 100%; justify-content:center">
      <templates />
    </div> -->
  </div>
</template>

<script>
import CvForm from '../components/CvForm.vue'
// import Templates from '../components/Template.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    CvForm,
    // Templates,
    Navbar,
  },
}
</script>

