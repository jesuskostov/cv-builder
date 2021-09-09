<template>
  <div class="hello">
    <div class="box d-none" :class="{'active': variant == 'A'}">
      VARIANT A
    </div>
    <div class="box d-none" :class="{'active': variant == 'B'}">
      VARIANT B
    </div>
    <div class="box d-none" :class="{'active': variant == 'C'}">
      VARIANT C
    </div>
    <div class="box d-none" :class="{'active': variant == 'D'}">
      VARIANT D
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  computed: {
    variant() {
        return this.$store.state.cv_variant;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    border: 1px solid red;
}
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
  &.d-none {
      display: none;
  }
  &.active {
      display: block;
  }
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
