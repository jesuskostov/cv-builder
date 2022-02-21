<template>
  <div>
       <div class="accordion px-4 py-4">
        <h3 v-text="$t('other_step.interests')" />
        <!-- <select class="opt-dropdown" @change="addPredefinedInterests(selected)" v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="(int, i) in interestsPredefined" :key="i" :value="int.title">{{int.title}}</option>
        </select> -->
        <div class="position-relative">
            <input type="text" class="form-control w-100" v-model="interes">
            <button @click="addInt" class="custom-btn add-btn">Aggiungi</button>
        </div>
        <!-- <multiselect v-model="interests" class="w-100" :options="interestsPredefined" :multiple="true" :taggable="true" @tag="addInterest" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Write some and press Enter" label="title" track-by="title" /> -->
        <draggable v-model="interests" @end="drag">
            <div v-for="(interes, i) in interests" :key="i" class="box-row">
                <div class="d-flex align-items-center">
                    <img class="mr-3" src="../assets/images/lines.svg" alt="lines">
                    <h4 class="mb-0">{{interes.title}}</h4>
                </div>
                <button class="action-btn mr-3" @click="deleteInterests(i)">
                    <img src="../assets/images/bin.svg" alt="bin icon">
                </button>
            </div>
        </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import Multiselect from 'vue-multiselect'

export default {
    data() {
        return {
            interes: '',
            interests: [],
            interestsPredefined: [
                {'title': 'Football'},
                {'title': 'Running',},
                {'title': 'Games',},
                {'title': 'Fighting',},
            ],
            selected: ''
        }
    },
    components: {
        draggable,
        // Multiselect
    },
    methods: {
        addInt() {
            this.interests.push({
                'title': this.interes
            })
            this.interes = ''
        },
        addNewInterests() {
            this.interests.push({
                'title': ''
            })
        },
        deleteInterests(i) {
            this.interests.splice(i, 1);
        },
        drag() {
            let interests = this.interests
            this.$store.dispatch('saveInterests', {interests});
        },
        addPredefinedInterests(int) {
            var index = this.interests.findIndex(item => item.title == int)
            index === -1 ? this.interests.push({'title': int, 'rating': 0}) : console.log("object already exists")
        },
        addInterest(interest) {
            this.interests.push({
                'title': interest,
            })
        }
    },
    watch: {
        interests: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('interests', JSON.stringify(val))
                let interests = this.interests
                this.$store.dispatch('saveInterests', {interests});
            },
            deep: true
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('interests')) != null) {
            this.interests = JSON.parse(localStorage.getItem('interests'));
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