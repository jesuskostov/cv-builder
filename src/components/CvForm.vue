<template>
  <div>
    <personal v-if="step == 1" />
    <work-history v-if="step == 2" />
    <education v-if="step == 3" />
    <div v-if="step == 4">
        <languages  />
        <interests />
        <accomplishments />
        <button @click="forward">Next</button>
    </div>
    <div v-if="step == 5">
        <button @click="goTo(1)">Edit Personal</button>
        <br>
        <button @click="goTo(2)">Edit Work history</button>
        <br>
        <button @click="goTo(3)">Edit Education and skills</button>
        <br>
        <button @click="goTo(4)">Edit Languages, iterests and accomplishments</button>
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
            let step = 5
            this.$store.dispatch('step', {step})
        },
        goTo(step) {
            this.$store.dispatch('step', {step})
        }
    }
}
</script>

<style>
svg.active {
    fill: #ffd06a;
}
</style>

