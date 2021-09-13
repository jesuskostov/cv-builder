<template>
  <div>
    <div class="steps-title">
        <h1>Work History</h1>
        <span class="line"></span>
        <p class="text">Employers scan your resume for 5 seconds to decide if you’re a match. We’ll suggest to add only your job positions that make a great impression.</p>
    </div>
    <p>
    
    <!-- Work History -->
    <div class="accordion" v-for="(work, i) in workHistory" :key="i" :id="'item-' + i" @click="expand(i)">
        <div class="row">
            <div class="col-md-6">
                <div class="text-left">
                    <!-- <p>Job Title: {{work.jobTitle}}</p> -->
                    <label for="jobTitle">Job title</label>
                    <br>
                    <input type="text" class="w-100" id="jobTitle" v-model="work.jobTitle">
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-left">
                    <label for="employer">Employer</label>
                    <br>
                    <input type="text" class="w-100" id="employer" v-model="work.employer">
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-left">
                    <label for="startDate">Start date</label>
                    <br>
                    <input type="date" class="w-100" id="startDate" v-model="work.startDate">
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-left">
                    <label for="endDate">End date</label>
                    <input type="date" class="w-100" id="endDate" v-model="work.endDate">
                    <div class="d-flex align-items-center">
                        <input type="checkbox" id="currentWork" name="work" :checked="work.currentlyWork" v-model="work.currentlyWork">
                        <label for="currentWork" style="margin: 0 0 0 10px">I currently work here</label>
                    </div>
                </div>
            </div>
        </div>
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
            divId: 2
        }
    },
    methods: {
        expand(i) {
            console.log(i);
            console.log(this.divId);
            var res = 'item-' + i;
            if (this.divId != i) {
                let res = 'item-' + i;
                let accordions = document.querySelectorAll('.accordion');
                [...accordions].map(item => {
                    item.style.height = 80 + 'px'
                })
                let height = document.getElementById(res).scrollHeight
                document.getElementById(res).style.height = height + 50 + 'px'
            } else {
                document.getElementById(res).style.height = 80 + 'px'
            }
            this.divId = i
        },
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

<style lang="scss">

.accordion {
    padding: 2rem;
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.5s;
    overflow: hidden;
    margin-bottom: 40px;
    &.active {
        height: 500px;
        transition: 0.5s;
    }
}

svg.active {
    fill: #ffd06a;
}
</style>

