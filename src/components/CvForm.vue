<template>
  <div style="width: 50%">
    <personal v-if="step == 1" />
    <work-history v-if="step == 2" />
    <education v-if="step == 3" />
    <div v-if="step == 4">
        <languages  />
        <interests />
        <accomplishments />
        <button @click="forward">Next</button>
    </div>
  </div>
</template>

<script>
import Personal from './Personal.vue'
import WorkHistory from './WorkHistory.vue'
import Education from './Education.vue'
import Languages from './Languages.vue'
import Interests from './Interests.vue'
import Accomplishments from './Accomplishments.vue'

export default {
    components: {
        Personal,
        WorkHistory,
        Education,
        Languages,
        Interests,
        Accomplishments,
    },
    computed: {
        step() {
            return this.$store.state.step
        }
    },
    methods: {
        forward() {
            let lang = JSON.parse(localStorage.getItem('spokenLanguages'))
            let interests = JSON.parse(localStorage.getItem('interests'));
            let accomp = JSON.parse(localStorage.getItem('accomplishments'));
            if (lang.length != 0) {
                this.$store.dispatch('saveLanguages', {lang});
            }
            if (interests.length != 0) {
                this.$store.dispatch('saveInterests', {interests});
            }
            if (accomp.length != '') {
                this.$store.dispatch('saveAccomp', {accomp});
            }
        }
    }
}
</script>

<style>
svg.active {
    fill: #ffd06a;
}
</style>

