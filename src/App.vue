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
    @media (max-width: 575.98px) {
      font-size: 1.8rem;
    }
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
    @media (max-width: 575.98px) {
      font-size: 1.8rem;
    }
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
  @media (max-width: 767.98px) {
    padding: 1.3rem 1rem;
  }
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
  &.download {
    position: fixed;
    width: 320px;
    bottom: 70px;
  }
}

.opt-dropdown {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    padding: 5px;
}

.go-back {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 4px 2rem;
    height: 48px;
    border-radius: 4px;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    background-color: transparent;
}

.box-label {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: #fff;
    h2 {        
        font-weight: bold;
        font-size: 1.2rem;
        margin: 0;
        span {
          max-width: 400px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        img {
            cursor: move;
            position: relative;
            top: -1px;
        }
    }
}

.box-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D2D4D6;
    padding: 1.3rem 0;
    // @media (max-width: 767.98px) {
    //   flex-direction: column;
    //   align-items: flex-start;
    // }
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

input, textarea, select {
    padding: 5px;
    border: 1px solid #D2D4D6;
    border-radius: 4px;
    height: 44px;
    margin-bottom: 0.7rem !important;
}

.mx-input-wrapper {
  input {
    height: 44px;
    font-weight: bold;
  }
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

.star {
  fill: #D2D4D6;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media (max-width: 767.98px) {
      width: 16px;
      height: 16px;
      margin-right: 6px;
  }
  &:hover {
    fill: var(--primary-color);
  }
  &.active {
    fill: var(--primary-color);
  }
}

.card.no-border {
  border: 0;
}

label {
    font-size: 1rem;
    font-weight: bold;
}

.template-preview {
  width: 100%;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);
}

.error {
  color: red;
  font-size: 0.8rem;
}
// Generate Duration && Delay
[data-aos] {
  @for $i from 1 through 150 {
    body[data-aos-duration='#{$i * 50}'] &,
    &[data-aos][data-aos-duration='#{$i * 50}'] {
      transition-duration: #{$i * 50}ms;
    }

    body[data-aos-delay='#{$i * 50}'] &,
    &[data-aos][data-aos-delay='#{$i * 50}'] {
      transition-delay: 0;

      &.aos-animate {
        transition-delay: #{$i * 50}ms;
      }
    }
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
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