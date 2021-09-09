<template>
  <div class="hello">
    <div>
      <button v-for="item in list" :key="item" @click="onClick(item)">
        {{ item }}
      </button>
    </div>
    <h1>Loaded {{ selectedCv }}</h1>
    <templates :template-name="selectedCv" :personal="personal" :workHistory="workHistory" />
    <!-- <h1>Display All</h1>
    <div v-for="item in list" :key="item">
      <templates :template-name="item" :content="content" />
    </div> -->
  </div>
</template>

<script>
import Templates, { templatesCount } from "./templates/Index";

export default {
  name: "HelloWorld",
  components: {
    Templates,
  },
  data() {
    return {
      selectedCv: 1,
      list: Array(templatesCount)
        .fill(0)
        .map((e, i) => i + 1),
    };
  },
  methods: {
    onClick(payload) {
      this.selectedCv = payload;
    },
  },
  computed: {
    personal() {
      return this.$store.state.personal 
    },
    workHistory() {
      return this.$store.state.workHistory 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 30%;
}
</style>
