<template>
  <div class="hello">
    <div @click="selectVariant('A')" class="box" :class="{'active': selectedCv == 'A'}">
      VARIANT A
    </div>
    <div @click="selectVariant('B')" class="box" :class="{'active': selectedCv == 'B'}">
      VARIANT B
    </div>
    <div @click="selectVariant('C')" class="box" :class="{'active': selectedCv == 'C'}">
      VARIANT C
    </div>
    <div @click="selectVariant('D')" class="box" :class="{'active': selectedCv == 'D'}">
      VARIANT D
    </div>
    <br>
    <button @click="forward">Next step</button>
  </div>
</template>

<script>
export default {
  name: 'CvTemplates',
  data() {
    return {
      selectedCv: null
    }
  },
  methods: {
    selectVariant(variant) {
      this.selectedCv = variant
    },
    async forward() {
      // Choosing CV template and commiting to store
      let variant = this.selectedCv
      if (variant != null) {
        let step = 2
        await this.$store.dispatch('selectCvVariant', {variant});
        await this.$store.dispatch('step', {step});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  display: inline-flex;
  width: 200px;
  height: 250px;
  border: 2px solid black;
  margin: 30px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
}
.box.active {
  color: red;
  border: 2px solid red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
