<template>
  <div class="d-flex align-items-center">
    <div @click="goTo(1)" :class="{'active': step == 1, 'passed': step > 1}" class="steps"><span class="number"><span v-if="step == 1" >1</span><img v-else src="../assets/images/step-ok.svg" alt="ok icon"></span> PERSONAL <span class="line"></span></div>
    <div @click="goTo(2)" :class="{'active': step == 2, 'passed': step > 2}" class="steps"><span class="number"><span v-if="step <= 2" >2</span><img v-else src="../assets/images/step-ok.svg" alt="ok icon"></span> WORK HISTORY <span class="line"></span></div>
    <div @click="goTo(3)" :class="{'active': step == 3, 'passed': step > 3}" class="steps"><span class="number"><span v-if="step <= 3" >3</span><img v-else src="../assets/images/step-ok.svg" alt="ok icon"></span> EDUCATION AND SKILLS <span class="line"></span></div>
    <div @click="goTo(4)" :class="{'active': step == 4, 'passed': step > 4}" class="steps"><span class="number"><span v-if="step <= 4" >4</span><img v-else src="../assets/images/step-ok.svg" alt="ok icon"></span> OTHER <span class="line"></span></div>
    <div @click="goTo(5)" :class="{'active': step == 5, 'passed': step > 5}" class="steps"><span class="number"><span v-if="step <= 5" >5</span><img v-else src="../assets/images/step-ok.svg" alt="ok icon"></span> SUMMARY</div>
  </div>
</template>

<script>
export default {
  computed: {
    step() {
      return this.$store.state.step
    }
  },
  methods: {
    goTo(toStep) {
      if (this.step > toStep) {
        let step = toStep
        this.$store.dispatch('step', {step})
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.steps {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #B4B8BE;
  font-size: 0.8rem;
  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999999px;
    border: 2px solid #E9ECF0;
    width: 40px;
    height: 40px;
    margin-right: 9px;
    font-size: 16px;
  }

  .line {
    margin: 0 12px;
    width: 20px;
    height: 2px;
    background-color: #E9ECF0;
  }

  &.active {
    color: #279857;
    .number {
      border: 2px solid #279857;  
    }
    .line {
      background-color: #279857;
    }
  }

  &.passed {
    cursor: pointer;
    color: #279857;
    .number {
      background-color: #279857;
      border: 2px solid #279857;  
    }
    .line {
      background-color: #279857;
    }
  }

}

</style>