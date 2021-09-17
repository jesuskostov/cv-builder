<template>
  <div>
    <div class="steps-title mb-5">
        <h1>Other</h1>
        <span class="line"></span>
    </div>
    <div class="accordion px-4 py-4">
        <h3>Mother Languages:</h3>
        <multiselect v-model="motherLanguages" class="w-100" :options="languages" :multiple="true" :taggable="true" @tag="addMotherLang" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="title" track-by="title" />
        <draggable v-model="motherLanguages" @end="dragMotherLang">
            <div v-for="(lang, i) in motherLanguages" :key="i" class="box-row">
                <div class="d-flex align-items-center">
                    <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                    <h4 class="mb-0">{{lang.title}}</h4>
                </div>
                <div>
                    <button class="action-btn mr-3" @click="deleteMotherLanguage(i)">
                        <img src="../assets/images/bin.svg" alt="bin icon">
                    </button>
                </div>
            </div>
        </draggable>
    </div>
    <div class="accordion px-4 py-4">
        <h3>Spoken Languages:</h3>
        <multiselect v-model="spokenLanguages" class="w-100" :options="languages" :multiple="true" :taggable="true" @tag="addLang" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="title" track-by="title" />
        <draggable v-model="spokenLanguages" @end="drag">
            <div v-for="(lang, i) in spokenLanguages" :key="i" class="box-row">
                <div class="d-flex align-items-center">
                    <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                    <h4 class="mb-0">{{lang.title}}</h4>
                </div>
                <div class="d-flex align-items-center">
                    <div>
                        <svg :class="{'active': lang.rating > 0}" @click="lang.rating = 1" class="star" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                        <svg :class="{'active': lang.rating > 1}" @click="lang.rating = 2" class="star" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                        <svg :class="{'active': lang.rating > 2}" @click="lang.rating = 3" class="star" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                        <svg :class="{'active': lang.rating > 3}" @click="lang.rating = 4" class="star" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                                    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                                    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                                    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                                    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                                    C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                            </g>
                        </svg>
                        <svg :class="{'active': lang.rating > 4}" @click="lang.rating = 5" class="star" style="enable-background:new 0 0 512.002 512.002;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve">
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
                    <button class="action-btn mr-3" @click="deleteLanguage(i)">
                        <img src="../assets/images/bin.svg" alt="bin icon">
                    </button>
                </div>
            </div>
        </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Multiselect from 'vue-multiselect'

export default {
    data() {
        return {
            motherLanguages: [],
            spokenLanguages: [],
            languages: [
                { title: 'English', rating: 0 },
                { title: 'Italian', rating: 0 },
                { title: 'Chinese', rating: 0 },
                { title: 'Bulgarian', rating: 0 },
                { title: 'France', rating: 0 },
            ],
        }
    },
    components: {
        draggable,
        Multiselect
    },
    methods: {
        deleteLanguage(i) {
            this.spokenLanguages.splice(i, 1);
        },
        deleteMotherLanguage(i) {
            this.motherLanguages.splice(i, 1);
        },
        drag() {
            let lang = this.spokenLanguages
            this.$store.dispatch('saveLanguages', {lang});
        },
        dragMotherLang() {
            let lang = this.motherLanguages
            this.$store.dispatch('saveMotherLanguages', {lang});
        },
        addPredefinedLang(lang) {
            var index = this.spokenLanguages.findIndex(item => item.title == lang)
            index === -1 ? this.spokenLanguages.push({'title': lang, 'rating': 0}) : console.log("object already exists")
        },
        addLang(lang) {
            this.spokenLanguages.push({
                'title': lang,
                'rating': 0
            })
        },
        addMotherLang(lang) {
            this.motherLanguages.push({
                'title': lang
            })
        }
    },
    watch: {
        spokenLanguages: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('spokenLanguages', JSON.stringify(val))
                let lang = this.spokenLanguages
                this.$store.dispatch('saveLanguages', {lang});
            },
            deep: true
        },
        motherLanguages: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('motherLanguages', JSON.stringify(val))
                let lang = this.motherLanguages
                this.$store.dispatch('saveMotherLanguages', {lang});
            },
            deep: true
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('spokenLanguages')) != null) {
            this.spokenLanguages = JSON.parse(localStorage.getItem('spokenLanguages'));
        }
        if (JSON.parse(localStorage.getItem('motherLanguages')) != null) {
            this.motherLanguages = JSON.parse(localStorage.getItem('motherLanguages'));
        }
    }
}
</script>
