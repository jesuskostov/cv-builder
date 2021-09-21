<template>
  <div>
    <navbar />
    <templates class="pt-5" :onBrowse="true" :preview="true" />
  </div>
</template>

<script>
import Navbar from '../components/Navigation.vue'
import Templates from '../components/Template.vue'

export default {
    components: {
        Navbar,
        Templates
    }
}
</script>

<style lang="scss" scoped>

</style>