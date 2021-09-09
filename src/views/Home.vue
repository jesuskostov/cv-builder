<template>
  <div class="home">
    <h1>A home page with CTA button</h1>
    <button @click="start">Build your CV now</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    async start() {
      let step = 1;
      await this.$store.dispatch('step', {step});
      this.$router.push('/builder');
    }
  },
}
</script>
