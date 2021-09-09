<template>
  <div>
    <!-- Work History -->
    <div v-for="(work, i) in workHistory" :key="i">
        <p>Job Title: {{work.jobTitle}}</p>
        <label for="jobTitle">Job title</label>
        <input type="text" id="jobTitle" v-model="work.jobTitle">
        <br>
        <br>
        <label for="employer">Employer</label>
        <input type="text" id="employer" v-model="work.employer">
        <br>
        <br>
        <label for="startDate">Start date</label>
        <input type="date" id="startDate" v-model="work.startDate">
        <br>
        <label for="endDate">End date</label>
        <input type="date" id="endDate" v-model="work.endDate">
        <br>
        <label for="currentWork">I currently work here</label>
        <input type="checkbox" id="currentWork" name="work" :checked="work.currentlyWork" v-model="work.currentlyWork">
        <br>
        <br>
        <label for="workDescription">Work description</label>
        <textarea type="text" id="workDescription" v-model="work.description"></textarea>
        <br>
        <button @click="deleteJob(i)">Delete {{work.jobTitle}}</button>
    </div>
    <br>
    <button @click="addNewJob">Add new job</button>
    <br>
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

