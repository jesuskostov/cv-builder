<template>
  <div>
    <navbar :steps="true" />
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-md-7">
          <cv-form />
        </div>
        <div class="col-md-4 offset-md-1">
          <div class="preview">
            <templates style="zoom: 0.5;" :onBuilder="true" :selected="selectedCv" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CvForm from '../components/CvForm.vue'
import Templates from '../components/Template.vue'
import Navbar from '../components/Navigation.vue'

export default {
  components: {
    CvForm,
    Templates,
    Navbar,
  },
  computed: {
    selectedCv() {
      return this.$store.state.selectedCv
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  border-radius: 4px;
  background-color: #E9ECF0;
  height: 100%;
}
</style>
