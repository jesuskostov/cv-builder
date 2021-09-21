<template>
  <div>
    <!-- Education -->
    <section>
        <div class="steps-title mb-5">
            <h1>Education and skills</h1>
            <span class="line"></span>
            <h3 class="mt-4 mb-2">Education</h3>
            <p class="text mt-0">Employers quickly scan the education section. We’ll take care of the formatting so it’s easy to find. Include every school, even if you’re still there or didn’t graduate.</p>
        </div>
        <draggable v-model="education" @end="dragSchool">
                <div v-for="(school, i) in education" :key="i" class="accordion">
                    <div class="box-label">
                        <h2 class="d-flex align-items-center">
                            <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                            <span v-if="school.schoolName">{{school.schoolName}}</span><span v-else>School name</span>
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
                                        <label for="schoolName">School name</label>
                                        <br>
                                        <input type="text" class="w-100" id="schoolName" v-model="school.schoolName">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-left">
                                        <label for="schoolLocation">School location</label>
                                        <br>
                                        <input type="text" class="w-100" v-model="school.schoolLocation">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-left">
                                        <label for="degree">Degree</label>
                                        <br>
                                        <input type="text" class="w-100" v-model="school.degree">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-left">
                                        <label for="startDate">Start date</label>
                                        <br>
                                        <input type="date" class="w-100" v-model="school.startDate">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-left">
                                        <label for="endDate">End date</label>
                                        <br>
                                        <input type="date" class="w-100" v-model="school.endDate">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="text-left">
                                        <label for="description">Description</label>
                                        <br>
                                        <textarea type="text" class="w-100" v-model="school.description"></textarea>
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
                <span v-if="education.length != 0">Add another school</span>
                <span v-else>Add school</span>
            </button>
        </div>
    </section>
    <hr>
    <!-- SKILLS -->
    <section>
        <div class="steps-title mb-5">
            <h3 class="mt-4 mb-2">Skills</h3>
            <p class="text mt-0">Employers scan skills for relevant keywords. We’ll help you choose the best ones.</p>
        </div>
        <div class="accordion px-4 py-4">
            <!-- <select class="opt-dropdown" @change="addPredefinedSkill(selected)" v-model="selected">
                <option disabled value="">Please select one</option>
                <option v-for="(skill, i) in options" :key="i" :value="skill.title">{{skill.title}}</option>
            </select> -->
            <multiselect v-model="skills" class="w-100" :options="options" :multiple="true" :taggable="true" @tag="addSkill" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="title" track-by="title" />
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
        <button class="go-back" @click="step(2)">Go Back</button>
        <button class="custom-btn" @click="step(4)">Next: Other</button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Multiselect from 'vue-multiselect'

export default {
    data() {
        return {
            education: [],
            skills: [],
            selected: '',
            value: [],
            options: [
                { title: 'Vue.js', rating: 0 },
                { title: 'Adonis', rating: 0 },
                { title: 'Rails', rating: 0 },
                { title: 'Sinatra', rating: 0 },
                { title: 'Laravel', rating: 0 },
                { title: 'Phoenix', rating: 0 }
            ]
        }
    },
    components: {
        draggable,
        Multiselect
    },
    methods: {
        addNewSchool() {
            this.education.push({
                'schoolName': '',
                'schoolLocation': '',
                'degree': '',
                'startDate': '',
                'endDate': '',
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
        addSkill(skill) {
            this.skills.push({
                'title': skill,
                'rating': 0
            })
        },
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
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('education')) != null) {
            this.education = JSON.parse(localStorage.getItem('education'));
        }
        if (JSON.parse(localStorage.getItem('skills')) != null) {
            this.skills = JSON.parse(localStorage.getItem('skills'));
        }
        this.addNewSchool()
    }
}
</script>

