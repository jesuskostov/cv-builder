<template>
  <div>
    <div class="steps-title mb-5">
        <h1>Work History</h1>
        <span class="line"></span>
        <p class="text">Employers scan your resume for 5 seconds to decide if you’re a match. We’ll suggest to add only your job positions that make a great impression.</p>
    </div>
    <draggable v-model="workHistory" @end="drag">
        <div v-for="(work, i) in workHistory" :key="i" class="accordion">
            <div class="box-label">
                <h2 class="d-flex align-items-center">
                    <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                    <span v-if="work.jobTitle">{{work.jobTitle}}</span><span v-else>Job title</span>
                </h2>
                <div class="d-flex">
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
                        <div class="col-md-6 mb-3">
                            <div class="text-left">
                                <!-- <p>Job Title: {{work.jobTitle}}</p> -->
                                <label for="jobTitle">Job title</label>
                                <br>
                                <input type="text" class="w-100 form-control" id="jobTitle" v-model="work.jobTitle">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="text-left">
                                <label for="employer">Employer</label>
                                <br>
                                <input type="text" class="w-100 form-control" id="employer" v-model="work.employer">
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div class="text-left">
                                <label for="date">Date</label>
                                <br>
                                <date-picker :disabled-date="disabledDates" class="w-100" name="date" :value-type="'format'" :format="'MM-YYYY'" v-model="work.date" :range="true" type="month" />
                                <div>
                                    <input type="checkbox" id="scales" name="scales" class="mr-2" v-model="work.currentlyWork">
                                    <label for="scales">Current work</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="text-left">
                                <label for="workDescription">Work description</label>
                                <vue-editor name="workDescription" id="workDescription" v-model="work.description" :editorToolbar="customToolbar"></vue-editor>
                            </div>                        
                        </div>
                    </div>
                </b-card>
            </b-collapse>
        </div>
    </draggable>
    <div class="text-left">
        <button class="add-job-btn" @click="addNewJob">
            <img src="../assets/images/red-cross.svg" alt="red plus icon">
            <span v-if="workHistory.length != 0">Add another job</span>
            <span v-else>Add a job</span>
        </button>
    </div>
    <br>
    <div class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mt-5">
        <button class="go-back" @click="step(1)">Go Back</button>
        <button class="custom-btn mb-3 mb-md-0" @click="step(3)">Next: Education and skills</button>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import draggable from 'vuedraggable'
import { VueEditor } from "vue2-editor";

export default {
    data() {
        return {
            workHistory: [],
            divId: 2,
            customToolbar: [
                ["bold", "italic", "underline"],
                [{list: 'bullet'}, {list: 'order'}]
            ],
        }
    },
    components: {
        draggable,
        VueEditor,
        DatePicker
    },
    methods: {
        addNewJob() {
            this.workHistory.push({
                'jobTitle': '',
                'employer': '',
                'date': '',
                'currentlyWork': false,
                'description': '',
            })
        },
        deleteJob(i) {
            this.workHistory.splice(i, 1);
        },
        async step(step) {
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
        disabledDates(date) {
            return (date < new Date(new Date().setFullYear(new Date().getFullYear() - 10)) || (date > new Date() ))
        }
    },
    watch: {
        workHistory: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('workHistory', JSON.stringify(val))
                let workHistory = this.workHistory;
                this.$store.dispatch('saveWorkHistory', {workHistory});
            },
            deep: true
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('workHistory')) != null && JSON.parse(localStorage.getItem('workHistory')).length != 0) {
            this.workHistory = JSON.parse(localStorage.getItem('workHistory'));
        } else {
            this.addNewJob()
        }

    }
}
</script>

<style lang="scss" scoped>


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

</style>

