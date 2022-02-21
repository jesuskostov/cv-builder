<template>
  <div>
    <!-- Education -->
    <section>
        <div class="steps-title mb-5">
            <h1 v-text="$t('school_history.title')" />
            <span class="line"></span>
            <h3 class="mt-4 mb-2" v-text="$t('school_history.subTitle')" />
            <p class="text mt-0" v-text="$t('school_history.text')" />
        </div>
        <draggable v-model="education" @end="dragSchool">
                <div v-for="(school, i) in education" :key="i" class="accordion">
                    <div class="box-label">
                        <h2 class="d-flex align-items-center">
                            <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                            <span v-if="school.schoolName">{{school.schoolName}}</span><span v-else v-text="$t('school_history.schoolName')" />
                        </h2>
                        <div class="d-flex">
                            <button class="action-btn mr-3" @click="deleteSchool(i)">
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
                                <div class="col-md-12">
                                    <div class="text-left">
                                        <label for="schoolName" v-text="$t('school_history.schoolName')" />
                                        <br>
                                        <input type="text" class="w-100 form-control" id="schoolName" v-model="school.schoolName">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-left">
                                        <label for="schoolLocation" v-text="$t('school_history.schoolCity')" />
                                        <br>
                                        <input type="text" class="w-100 form-control" v-model="school.schoolLocation">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-left">
                                        <label for="degree" v-text="$t('school_history.degree')" />
                                        <br>
                                        <input type="text" class="w-100 form-control" v-model="school.degree">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <Dates :dates="school.date" @update-date="updateSchoolDate(i, ...arguments)" />
                                </div>
                                <div class="col-md-12">
                                    <div class="text-left">
                                        <label for="description" v-text="$t('school_history.description')" />
                                        <br>
                                        <vue-editor name="description" id="description" v-model="school.description" :editorToolbar="customToolbar"></vue-editor>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                    </b-collapse>
                </div>
        </draggable>
        <div class="text-left mb-5">
            <button class="add-more-btn" @click="addNewSchool">
                <img src="../assets/images/red-cross.svg" alt="red plus icon">
                <span v-if="education.length != 0" v-text="$t('school_history.addAnotherSchool')" />
                <span v-else v-text="$t('school_history.addSchool')" />
            </button>
        </div>
    </section>
    <hr>
    <!-- SKILLS -->
    <section>
        <div class="steps-title mb-5">
            <h3 class="mt-4 mb-2" v-text="$t('skills.title')" />
            <p class="text mt-0"  v-text="$t('skills.text')" />            
        </div>
        <div class="accordion px-4 py-4">
            <!-- <select class="opt-dropdown" @change="addPredefinedSkill(selected)" v-model="selected">
                <option disabled value="">Please select one</option>
                <option v-for="(skill, i) in options" :key="i" :value="skill.title">{{skill.title}}</option>
            </select> -->
            <div class="position-relative">
                <input type="text" class="form-control w-100" v-model="skill">
                <button @click="addSkill" class="custom-btn add-btn">Aggiungi</button>
            </div>
            <!-- <multiselect v-model="skills" class="w-100" :options="options" :multiple="true" :taggable="true" @tag="addSkill" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="title" track-by="title" /> -->
            <draggable v-model="skills" @end="dragSkill">
                <div v-for="(skill, i) in skills" :key="i" class="box-row">
                    <h4 class="mb-0">
                        <img class="mr-2" src="../assets/images/lines.svg" alt="lines">
                        {{skill.title}}
                    </h4>
                    <div class="d-flex align-items-center">
                        <div ref="rating" class="rating-box mr-0 mr-md-4">
                            <svg :class="{'active': skill.rating > 0}" class="star" @click="skill.rating = 1" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                                <g>
                                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                                </g>
                            </svg>
                            <svg :class="{'active': skill.rating > 1}" class="star" @click="skill.rating = 2" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                                <g>
                                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                                </g>
                            </svg>
                            <svg :class="{'active': skill.rating > 2}" class="star" @click="skill.rating = 3" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                                <g>
                                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                                </g>
                            </svg>
                            <svg :class="{'active': skill.rating > 3}" class="star" @click="skill.rating = 4" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                                <g>
                                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                                </g>
                            </svg>
                            <svg :class="{'active': skill.rating > 4}" class="star" @click="skill.rating = 5" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                                <g>
                                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                                </g>
                            </svg>
                        </div>
                        <button class="action-btn" @click="deleteSkill(i)">
                            <img src="../assets/images/bin.svg" alt="bin icon">
                        </button>
                    </div>
                </div>
            </draggable>
        </div>
    </section>
    <div class="mt-5 d-flex justify-content-between">
        <button class="go-back" @click="step(2)" v-text="$t('school_history.goBack')" />
        <button class="custom-btn" @click="step(4)" v-text="$t('school_history.button')" />
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import Multiselect from 'vue-multiselect'
import 'vue2-datepicker/index.css';
import { VueEditor } from "vue2-editor";
import Dates from '../components/Dates.vue'

export default {
    data() {
        return {
            skill: '',
            education: [],
            skills: [],
            selected: '',
            value: [],
            options: [
                { title: 'Vue.js', rating: 5 },
                { title: 'Adonis', rating: 5 },
                { title: 'Rails', rating: 5 },
                { title: 'Sinatra', rating: 5 },
                { title: 'Laravel', rating: 5 },
                { title: 'Phoenix', rating: 5 }
            ],
            customToolbar: [
                ["bold", "italic", "underline"],
            ],
            startDate: null,
            endDate: null,
            ageMin: 14,
            ageMax: 80,
        }
    },
    components: {
        draggable,
        // Multiselect,
        Dates,
        VueEditor
    },
    methods: {
        updateSchoolDate(id, payload) {
            this.education[id].date.from = payload[0]
            this.education[id].date.to = payload[1]
        },
        addNewSchool() {
            this.education.push({
                'schoolName': '',
                'schoolLocation': '',
                'degree': '',
                'date': {
                    'from': '',
                    'to': ''
                },
                'description': ''
            })
        },
        deleteSchool(i) {
            this.education.splice(i, 1);
        },
        addNewSkill() {
            this.skills.push({
                'title': '',
                'rating': 0
            })
        },
        deleteSkill(i) {
            this.skills.splice(i, 1);
        },
        // addSkill(skill) {
        //     this.skills.push({
        //         'title': skill,
        //         'rating': 0
        //     })
        // },
        async step(step) {
            let education = this.education
            let skills = this.skills
            await this.$store.dispatch('saveEducation', {education});
            await this.$store.dispatch('saveSkills', {skills});
            this.$store.dispatch('step', {step})
        },
        toggle: function( event ) {
          event.target.classList.toggle('is-open')
        },
        dragSchool() {
            let education = this.education
            this.$store.dispatch('saveEducation', {education});
        },
        addPredefinedSkill(skill) {
            var index = this.skills.findIndex(item => item.title == skill)
            index === -1 ? this.skills.push({'title': skill, 'rating': 0}) : console.log("object already exists")
        },
        dragSkill() {
            let skills = this.skills
            this.$store.dispatch('saveSkills', {skills});
        },
        // disabledDates(date) {
        //     return (date < new Date(new Date().setFullYear(new Date().getFullYear() - 100)) || (date > new Date() ))
        // },
        dateLimit(limit) {
            return new Date(new Date().setFullYear(new Date().getFullYear() - limit));
        },
        disabledRangeStartDate: function (date) {
            const limitStart = date < this.dateLimit(this.ageMax);

            const limitEnd = this.endDate
                ? date > this.endDate
                : date > this.dateLimit(this.ageMin);

            let limit = limitStart || limitEnd;
            return limit;
        },
        disabledRangeEndDate: function (date) {
            const limitStart = this.startDate
                ? date < this.startDate
                : date > this.dateLimit(this.ageMin);
            const limitEnd = date > this.dateLimit(this.ageMin);

            let limit = limitStart || limitEnd;
            return limit;
        },
        addSkill() {
            let skill = this.skill
            this.skills.push({
                'title': skill,
                'rating': 5
            })
            this.skill = ''
        }
    },
    watch: {
        education: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('education', JSON.stringify(val))
                let education = this.education
                this.$store.dispatch('saveEducation', {education});
            },
            deep: true
        },
        skills: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('skills', JSON.stringify(val))
                let skills = this.skills
                this.$store.dispatch('saveSkills', {skills});
            },
            deep: true
        },
        startDate(newVal, oldVal) {
            newVal !== oldVal && this.$refs.endDate.focus();
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('education')) != null && JSON.parse(localStorage.getItem('education')).length != 0) {
            this.education = JSON.parse(localStorage.getItem('education'));
        } else {
            this.addNewSchool()
        }
        if (JSON.parse(localStorage.getItem('skills')) != null) {
            this.skills = JSON.parse(localStorage.getItem('skills'));
        }
    }
}
</script>

<style scoped>
.add-btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>