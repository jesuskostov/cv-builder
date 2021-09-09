<template>
  <div>
    <!-- Education -->
    <div>
        <div v-for="(school, i) in education" :key="i">
            <p>School name: {{school.schoolName}}</p>
            <label for="schoolName">schoolName</label>
            <input type="text" id="schoolName" v-model="school.schoolName">
            <br>
            <label for="schoolLocation">schoolLocation</label>
            <input type="text" v-model="school.schoolLocation">
            <br>
            <label for="degree">degree</label>
            <input type="text" v-model="school.degree">
            <br>
            <label for="startDate">startDate</label>
            <input type="text" v-model="school.startDate">
            <br>
            <label for="endDate">endDate</label>
            <input type="text" v-model="school.endDate">
            <br>
            <br>
            <label for="description">description</label>
            <textarea type="text" v-model="school.description"></textarea>
            <br>
            <button @click="deleteSchool(i)">Delete {{school.schoolName}}</button>
        </div>
    </div>
    <br>
    <button @click="addNewSchool">Add another school</button>
    <!-- Skills -->
    <div style="margin-top: 100px">
        <div v-for="(skill, i) in skills" :key="i">
            <input type="text" v-model="skill.title">
            <svg :class="{'active': skill.rating > 0}" @click="skill.rating = 1" style="enable-background:new 0 0 512.002 512.002; width: 20px; height: 20px; margin-right: 10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                <g>
                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                </g>
            </svg>
            <svg :class="{'active': skill.rating > 1}" @click="skill.rating = 2" style="enable-background:new 0 0 512.002 512.002; width: 20px; height: 20px; margin-right: 10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                <g>
                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                </g>
            </svg>
            <svg :class="{'active': skill.rating > 2}" @click="skill.rating = 3" style="enable-background:new 0 0 512.002 512.002; width: 20px; height: 20px; margin-right: 10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                <g>
                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                </g>
            </svg>
            <svg :class="{'active': skill.rating > 3}" @click="skill.rating = 4" style="enable-background:new 0 0 512.002 512.002; width: 20px; height: 20px; margin-right: 10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                <g>
                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                </g>
            </svg>
            <svg :class="{'active': skill.rating > 4}" @click="skill.rating = 5" style="enable-background:new 0 0 512.002 512.002; width: 20px; height: 20px; margin-right: 10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                <g>
                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                        c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                        c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                        c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                        l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                        C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                </g>
            </svg>
            <button @click="deleteSkill(i)">Delete {{skill.title}}</button>
        </div>
    </div>
    <button @click="addNewSkill">Add New skill</button>
    <br>
    <br>
    <button @click="nextStep(4)">Next</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            education: [],
            skills: [],
        }
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
        nextStep(step) {
            this.$store.dispatch('step', {step})
        }
    },
    watch: {
        education: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('education', JSON.stringify(val))
            },
            deep: true
        },
        skills: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('skills', JSON.stringify(val))
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
    }
}
</script>

<style>
svg.active {
    fill: #ffd06a;
}
</style>

