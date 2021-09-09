<template>
  <div>
    <!-- Work History -->
    <div v-for="(work, i) in workHistory" :key="i">
        <p>Job Title: {{work.jobTitle}}</p>
        <input type="text" v-model="work.jobTitle">
        <input type="text" v-model="work.employer">
        <br>
        <br>
        <input type="text" v-model="work.startDate">
        <input type="text" v-model="work.endDate">
        <br>
        <label for="work">I currently work here</label>
        <input type="checkbox" id="work" name="work" :checked="work.currentlyWork" v-model="work.currentlyWork">
        <br>
        <br>
        <textarea type="text" v-model="work.description"></textarea>
        <br>
        <button @click="deleteJob(i)">Delete {{work.jobTitle}}</button>
    </div>
    <button @click="addNewJob">Add new job</button>
    <br>
    <br>
    <button @click="nextStep(3)">Next</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            workHistory: [],
        }
    },
    methods: {
        addNewJob() {
            this.workHistory.push({
                'jobTitle': '',
                'employer': '',
                'startDate': '',
                'endDate': '',
                'currentlyWork': false,
                'description': '',
            })
        },
        deleteJob(i) {
            this.workHistory.splice(i, 1);
        },
        async nextStep(step) {
            let workHistory = this.workHistory;
            await this.$store.dispatch('saveWorkHistory', {workHistory});
            this.$store.dispatch('step', {step});
        }
    },
    watch: {
        workHistory: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('workHistory', JSON.stringify(val))
            },
            deep: true
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('workHistory')) != null) {
            this.workHistory = JSON.parse(localStorage.getItem('workHistory'));
        }
    }
}
</script>

<style>
svg.active {
    fill: #ffd06a;
}
</style>

