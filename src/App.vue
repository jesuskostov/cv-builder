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
  background-color: #F2F5F7;
}

html, body {
  background-color: #F2F5F7;
}

:root {
  --primary-color: #EE4853;
  --secondary-color:#20599D;
  --gray-color:#F2F5F7;
}

.steps-title {
  text-align: left;
  .line {
    display: block;
    width: 92px;
    height: 2px;
    background-color: var(--primary-color);
  }
  .text {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
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

.form {
  background-color: #fff;
  padding: 2.3rem 2rem;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.16);
}

.custom-btn {
    height: 48px;
    color: #fff;
    font-weight: bold;
    background-color: var(--primary-color);
    border:0; 
    border-radius: 4px;
    padding: 4px 18px;
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