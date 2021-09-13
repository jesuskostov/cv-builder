<template>
  <div class="d-flex align-items-center">
    <div :class="{'active': step == 1}" class="steps"><span class="number">1</span> PERSONAL <span class="line"></span></div>
    <div :class="{'active': step == 2}" class="steps"><span class="number">2</span> WORK HISTORY <span class="line"></span></div>
    <div :class="{'active': step == 3}" class="steps"><span class="number">3</span> EDUCATION AND SKILLS <span class="line"></span></div>
    <div :class="{'active': step == 4}" class="steps"><span class="number">4</span> OTHER <span class="line"></span></div>
    <div :class="{'active': step == 5}" class="steps"><span class="number">5</span> SUMMARY</div>
  </div>
</template>

<script>
export default {
  computed: {
    step() {
      return this.$store.state.step
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

}

</style>