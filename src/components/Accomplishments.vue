<template>
  <div class="accordion text-left px-4 py-4">
    <label for="accomplishments" v-text="$t('other_step.accomplishments')" />
    <br>
    <vue-editor name="accomplishments" id="accomplishments" v-model="accomplishments" :editorToolbar="customToolbar"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
    data() {
        return {
            accomplishments: '',
            customToolbar: [
                ["bold", "italic", "underline"],
            ]
        }
    },
    components: {
        VueEditor
    },
    watch: {
        accomplishments: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('accomplishments', JSON.stringify(val))
                let accomp = this.accomplishments
                this.$store.dispatch('saveAccomp', {accomp});
            },
            deep: true
        }
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('accomplishments')) != null) {
            this.accomplishments = JSON.parse(localStorage.getItem('accomplishments'));
        }
    }
}
</script>
