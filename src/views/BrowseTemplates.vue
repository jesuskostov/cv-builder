<template>
  <div>
    <div class="container">
      <div class="steps-title text-center pt-5">
        <h1>Le seul site du marché qui vous offre <br> <b>14 CV en même temps</b></h1>         
        <span class="line mx-auto"></span>
        <p class="text mt-3">Changez facilement de modèle pendant sa création. À la fin ?</p>
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