<template>
  <div class="about">
    <steps />
    <h1>This is the BUILDER page</h1>
    <div style="display: flex; width: 100%; justify-content:center">
      <cv-form />
      <templates />
    </div>
  </div>
</template>

<script>
import CvForm from '../components/CvForm.vue'
import Templates from '../components/Template.vue'
import Steps from '../components/Steps.vue'

export default {
  components: {
    CvForm,
    Templates,
    Steps
  },
}
</script>

