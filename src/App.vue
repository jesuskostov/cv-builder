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
  h1 {
    font-weight: bold;
  }
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

.opt-dropdown {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    padding: 5px;
}

.box-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D2D4D6;
    padding: 1.3rem 0;
    h4 {
        font-size: 1rem;
        font-weight: bold;
        img {
            position: relative;
            top: -1px;
        }
    }
}

.accordion {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.5s;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 0;
    h3 {
      font-size: 1rem;
      font-weight: bold;
      text-align: left;
      margin-bottom: 1.1rem;
    }
}

.arrow {
    transform: rotate(90deg);
    transition: 0.4s;
    &.is-open {
        transform: rotate(0);
        transition: 0.4s;
    }
}

.action-btn {
    background-color: transparent;
    border: 0;
}

.add-more-btn {
    display: flex;
    font-weight: bold;
    border: 0;
    background-color: transparent;
    img {
        position: relative;
        top: -1px;
        margin-right: 8px;
    }
}

input, textarea {
    padding: 5px;
    border: 1px solid #D2D4D6;
    border-radius: 4px;
    height: 44px;
    margin-bottom: 0.7rem !important;
}

textarea {
  width: 100%;
  min-height: 100px;
}

span {
  &.red {
    color: red;
  }
}

svg {
    fill: #D2D4D6;
}

svg:hover {
    fill: var(--primary-color);
}

svg.active {
    fill: var(--primary-color);
}

.card.no-border {
  border: 0;
}

label {
    font-size: 1rem;
    font-weight: bold;
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