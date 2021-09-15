<template>
  <div>
    <personal v-if="step == 1" />
    <work-history v-if="step == 2" />
    <education v-if="step == 3" />
    <div v-if="step == 4">
        <languages  />
        <interests />
        <accomplishments />
        <div class="d-flex justify-content-between mt-5">
            <button class="go-back" @click="goTo(3)">Go Back</button>
            <button class="custom-btn" @click="goTo(5)">Next: Summary</button>
        </div>
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
        goTo(toStep) {
            let lang = JSON.parse(localStorage.getItem('spokenLanguages'))
            let interests = JSON.parse(localStorage.getItem('interests'));
            let accomp = JSON.parse(localStorage.getItem('accomplishments'));
            if (lang != null && lang.length != 0) {
                this.$store.dispatch('saveLanguages', {lang});
            }
            if (interests != null && interests.length != 0) {
                this.$store.dispatch('saveInterests', {interests});
            }
            if (accomp != '') {
                this.$store.dispatch('saveAccomp', {accomp});
            }
            let step = toStep
            this.$store.dispatch('step', {step})
        },        
    }
}
</script>
