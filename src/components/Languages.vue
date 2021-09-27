<template>
  <div>
    <div class="steps-title mb-5">
        <h1>Other</h1>
        <span class="line"></span>
    </div>
    <div class="accordion px-4 py-4">
        <h3>Mother Languages:</h3>
        <multiselect v-model="motherLanguages" class="w-100" :options="languages" :multiple="true" :taggable="true" @tag="addMotherLang" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some or you can also write and press Enter" label="title" track-by="title" />
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
        <multiselect v-model="spokenLanguages" class="w-100" :options="languages" :multiple="true" :taggable="true" @tag="addLang" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Write some and press Enter" label="title" track-by="title" />
        <draggable v-model="spokenLanguages" @end="drag">
            <div v-for="(lang, i) in spokenLanguages" :key="i" class="box-row">
                <div class="d-flex align-items-center">
                    <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                    <h4 class="mb-0">{{lang.title}}, {{lang.langLevel}}</h4>
                </div>
                <select class="lang-level" v-model="lang.langLevel" @change="selectLangLevel(lang.langLevel, i)">
                    <option disabled value="">Select level</option>
                    <option v-for="(lang, i) in langLevel" :key="i" :value="lang.title">{{lang.title}}</option>
                </select>
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
            motherLanguages: [],
            spokenLanguages: [],
            languages: [
                { title: 'English', langLevel: '' },
                { title: 'France', langLevel: '' },
            ],
            langLevel: [
                { 'title': 'A1 - Beginner	' },
                { 'title': 'A2 - Elementary	' },
                { 'title': 'B1 - Intermediate	' },
                { 'title': 'B2 - Upper Intermediate	' },
                { 'title': 'C1 - Advanced' },
                { 'title': 'C2 - Proficient' },
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
                'langLevel': ''
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

<style lang="scss" scoped>
.lang-level {
    padding: 4px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
</style>