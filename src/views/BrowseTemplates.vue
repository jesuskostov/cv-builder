<template>
  <div>
    <div class="container">
      <div class="steps-title text-center pt-5">
        <h1>The only website which offers you all CV all at once!</h1>         
        <span class="line mx-auto"></span>
        <p class="text-center mt-3">You make your CV and you receive it in PDF format with ALL THESE TEMPLATES!<br>
          You can alternate your CV template during its creation in one click!<br>
          Easy. Fast. Efficient. 
        </p>
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