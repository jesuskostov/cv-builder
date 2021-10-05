<template>
  <div>
    <div class="container">
      <div class="steps-title pt-4">
        <h1>Not happy with the final result?</h1>         
        <span class="line"></span>
        <p class="text">No problem! Switch templates seamlessly</p>
      </div>
    </div>
    <templates class="pt-5" :onBrowse="true" :preview="true" />
    <Footer />
  </div>
</template>

<script>
import Templates from '../components/Template.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Templates,
    Footer
  },
}
</script>

<style lang="scss" scoped>

</style>