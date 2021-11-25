<template>
  <div>
    <div class="steps-title mb-5">
        <h1>Other</h1>
        <span class="line"></span>
    </div>
    <div class="accordion px-4 py-4">
        <h3>Native Languages:</h3>
        <multiselect v-model="motherLanguages" class="w-100" :options="languages" :multiple="false" :taggable="true" @tag="addMotherLang" :close-on-select="true" :clear-on-select="false" :preserve-search="true" placeholder="Pick some or you can also write and press Enter" label="title" :track-by="'title'" />
        <div v-if="motherLanguages.title" class="box-row">
            <div class="d-flex align-items-center">
                <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                <h4 class="mb-0">{{motherLanguages.title}}</h4>
            </div>
            <div>
                <button class="action-btn mr-3" @click="deleteMotherLanguage">
                    <img src="../assets/images/bin.svg" alt="bin icon">
                </button>
            </div>
        </div>
    </div>
    <div class="accordion px-4 py-4">
        <h3>Spoken Languages:</h3>
        <multiselect v-model="spokenLanguages" class="w-100" :options="languages" :multiple="true" :taggable="true" @tag="addLang" :close-on-select="true" :clear-on-select="false" :preserve-search="true" placeholder="Write some and press Enter" label="title" track-by="title" />
        <draggable v-model="spokenLanguages" @end="drag">
            <div v-for="(lang, i) in spokenLanguages" :key="i" class="box-row flex-column flex-sm-row align-items-start align-items-sm-center">
                <div class="d-flex align-items-center mb-3 mb-md-0">
                    <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                    <h4 class="mb-0">{{lang.title}}</h4>
                </div>
                <div>
                    <select class="w-auto m-0 mr-2 flex-shrink-0 custom-select" v-model="lang.langLevel" @change="selectLangLevel(lang.langLevel, i)">
                        <option disabled value="">Select level</option>
                        <option v-for="(lang, i) in langLevel" :key="i" :value="lang.title">{{lang.title}}</option>
                    </select>
                    <button class="action-btn" @click="deleteLanguage(i)">
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
            level: '',
            motherLanguages: {},
            spokenLanguages: [],
            languages: [
                { title: 'Italian', langLevel: '' },
                { title: 'English', langLevel: '' },
                { title: 'France', langLevel: '' },
                { title: 'German', langLevel: '' },
                { title: 'Spanish', langLevel: '' },
            ],
            langLevel: [
                { 'title': 'A1' },
                { 'title': 'A2' },
                { 'title': 'B1' },
                { 'title': 'B2' },
                { 'title': 'C1' },
                { 'title': 'C2' },
            ],
        }
    },
    components: {
        draggable,
        Multiselect
    },
    methods: {
        selectLangLevel(level, i) {
            this.spokenLanguages[i].langLevel = level
        },
        deleteLanguage(i) {
            this.spokenLanguages.splice(i, 1);
        },
        deleteMotherLanguage() {
            this.motherLanguages = {}
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
                'langLevel': ''
            })
        },
        addMotherLang(lang) {
            this.motherLanguages = null
            this.motherLanguages = {'title': lang}
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

<style lang="scss" scoped>
.lang-level {
width: auto;
}
</style>