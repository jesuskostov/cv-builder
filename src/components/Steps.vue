<template>
  <div>
    <span :class="{'active': step == 1}">1 - PERSONAL</span>
    <span :class="{'active': step == 2}">2 - WORK HISTORY</span>
    <span :class="{'active': step == 3}">3 - EDUCATION AND SKILLS</span>
    <span :class="{'active': step == 4}">4 - OTHER</span>
    <span :class="{'active': step == 5}">5 - SUMMARY</span>
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

<style>
span {
    font-weight: bold;
    margin-right: 30px;
    font-size: 18px;
}
span.active {
  color: green;
}
</style>