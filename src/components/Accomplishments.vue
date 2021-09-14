<template>
  <div class="accordion text-left px-4 pt-4">
    <label for="accomplishments">Accomplishments:</label>
    <br>
    <textarea name="accomplishments w-100" id="accomplishments" v-model="accomplishments"></textarea>
  </div>
</template>

<script>
export default {
    data() {
        return {
            accomplishments: ''
        }
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
