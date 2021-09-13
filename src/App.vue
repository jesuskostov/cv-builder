<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --primary-color: #EE4853;
  --secondary-color:#20599D;
  --gray-color:#F2F5F7;
}

.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: bold;
    font-size: 2.4rem;
  }
  .line {
    display: block;
    width: 92px;
    height: 2px;
    background-color: var(--primary-color);
  }
}

</style>

<script>
export default {
  mounted() {
    if (localStorage.step) {
      let step = localStorage.step
      this.$store.dispatch('step', {step})
    }
  }
}
</script>