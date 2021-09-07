<template>
  <div class="about">
    <h1>This is the BUILDER page</h1>

    <cv-templates v-if="step == 1" />
    <cv-form v-if="step == 2" />

    <h1>{{step}}</h1>
  </div>
</template>

<script>
import CvTemplates from '../components/CvTemplates.vue'
import CvForm from '../components/CvForm.vue'

export default {
  components: {
    CvTemplates,
    CvForm
  },
  computed: {
    step() {
      return this.$store.state.step
    }
  }
}
</script>