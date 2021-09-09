<template>
  <div style="width: 50%">
    <user-info v-if="step == 1" />
    <work-history v-if="step == 2" />
    <education v-if="step == 3" />
    <div v-if="step == 4">
        <languages  />
        <interests />
        <accomplishments />
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import WorkHistory from './WorkHistory.vue'
import Education from './Education.vue'
import Languages from './Languages.vue'
import Interests from './Interests.vue'
import Accomplishments from './Accomplishments.vue'

export default {
    components: {
        UserInfo,
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
    }
}
</script>

<style>
svg.active {
    fill: #ffd06a;
}
</style>

