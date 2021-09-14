<template>
  <div>
    <div class="steps-title mb-5">
        <h1>Work History</h1>
        <span class="line"></span>
        <p class="text">Employers scan your resume for 5 seconds to decide if you’re a match. We’ll suggest to add only your job positions that make a great impression.</p>
    </div>
    <draggable v-model="workHistory" @end="drag">
        <transition-group>
            <div v-for="(work, i) in workHistory" :key="i" class="accordion">
                <div class="job-label">
                    <h2 class="d-flex align-items-center">
                        <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                        <span v-if="work.jobTitle">{{work.jobTitle}}</span><span v-else>Job title</span>
                    </h2>
                    <div>
                        <button class="action-btn mr-3" @click="deleteJob(i)">
                            <img src="../assets/images/bin.svg" alt="bin icon">
                        </button>
                        <button class="action-btn" v-b-toggle="'collapse-' + i" @click="toggle">
                            <img class="arrow" src="../assets/images/arrow.svg" alt="arrow icon">
                        </button>
                    </div>
                </div>
                <b-collapse visible :id="'collapse-' + i">
                    <b-card class="no-border">
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
                                        <input type="checkbox" class="mb-0" id="currentWork" name="work" :checked="work.currentlyWork" v-model="work.currentlyWork">
                                        <label for="currentWork" style="margin: 0 0 0 10px">I currently work here</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="text-left">
                                    <label for="workDescription">Work description</label>
                                    <textarea type="text" class="w-100" id="workDescription" v-model="work.description"></textarea>
                                </div>                        
                            </div>
                        </div>
                    </b-card>
                </b-collapse>
            </div>
        </transition-group>
    </draggable>
    <div class="text-left">
        <button class="add-job-btn" @click="addNewJob">
            <img src="../assets/images/red-cross.svg" alt="red plus icon">
            <span v-if="workHistory.length != 0">Add another job</span>
            <span v-else>Add a job</span>
        </button>
    </div>
    <br>
    <div class="d-flex align-items-center justify-content-between mt-5">
        <router-link class="go-back" to="/">Go Back</router-link>
        <button class="custom-btn" @click="nextStep(3)">Next: Education and skills</button>
    </div>
  </div>
</template>

<script>

import draggable from 'vuedraggable'

export default {
    data() {
        return {
            workHistory: [],
            divId: 2
        }
    },
    components: {
        draggable
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
        },
        toggle: function( event ) {
          event.target.classList.toggle('is-open')
        },
        async drag() {
            let workHistory = this.workHistory;
            await this.$store.dispatch('saveWorkHistory', {workHistory});
        },
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

<style lang="scss" scoped>

.no-border {
    border: 0;
}

.job-label {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: #fff;
    h2 {
        font-weight: bold;
        font-size: 1.2rem;
        margin: 0;
        img {
            cursor: move;
            position: relative;
            top: -1px;
        }
    }
}

.arrow {
    transform: rotate(90deg);
    transition: 0.4s;
    &.is-open {
        transform: rotate(0);
        transition: 0.4s;
    }
}

.accordion {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.5s;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 0;
}

.action-btn {
    background-color: transparent;
    border: 0;
}

.add-job-btn {
    display: flex;
    font-weight: bold;
    border: 0;
    background-color: transparent;
    img {
        position: relative;
        top: -1px;
        margin-right: 8px;
    }
}

svg.active {
    fill: #ffd06a;
}
</style>

