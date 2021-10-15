<template>
  <div>
       <div class="accordion px-4 py-4">
        <h3>Driving license:</h3>
        <multiselect v-model="licenses" class="w-100" :options="predefined" :multiple="true" :close-on-select="true" :clear-on-select="false" :preserve-search="true" placeholder="Choose" label="title" track-by="title" />
        <draggable v-model="licenses" @end="drag">
            <div v-for="(license, i) in licenses" :key="i" class="box-row">
                <div class="d-flex align-items-center">
                    <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                    <h4 class="mb-0">{{license.title}}</h4>
                </div>
                <button class="action-btn mr-3" @click="deleteLicenses(i)">
                    <img src="../assets/images/bin.svg" alt="bin icon">
                </button>
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
            licenses: [],
            predefined: [
                {'title': 'Car'},
                {'title': 'Moto',},
                {'title': 'None',},
            ],
            selected: ''
        }
    },
    components: {
        draggable,
        Multiselect,
    },
    methods: {
        addNewLicenses() {
            this.licenses.push({
                'title': ''
            })
        },
        deleteLicenses(i) {
            this.licenses.splice(i, 1);
        },
        drag() {
            let licenses = this.licenses
            this.$store.dispatch('saveLicenses', {licenses});
        },
        addPredefined(int) {
            var index = this.interests.findIndex(item => item.title == int)
            index === -1 ? this.interests.push({'title': int, 'rating': 0}) : console.log("object already exists")
        },
    },
    watch: {
        licenses: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('licenses', JSON.stringify(val))
                let licenses = this.licenses
                this.$store.dispatch('saveLicenses', {licenses});
            },
            deep: true
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('licenses')) != null && JSON.parse(localStorage.getItem('licenses')) != 0) {
            this.licenses = JSON.parse(localStorage.getItem('licenses'));
        }
    }
}
</script>
