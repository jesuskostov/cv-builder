<template>
  <div>
    <div style="margin-top: 100px">
        <div v-for="(interes, i) in interests" :key="i">
            <input type="text" v-model="interes.title">
            <button @click="deleteInterests(i)">Delete {{interes.title}}</button>
        </div>
    </div>
    <button @click="addNewInterests">Add New interes</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            interests: [],
        }
    },
    methods: {
        addNewInterests() {
            this.interests.push({
                'title': ''
            })
        },
        deleteInterests(i) {
            this.interests.splice(i, 1);
        },
    },
    watch: {
        interests: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('interests', JSON.stringify(val))
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

<style>
svg.active {
    fill: #ffd06a;
}
</style>

