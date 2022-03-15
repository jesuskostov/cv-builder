<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10 mx-auto text-center py-5">
        <img
          class="error-img"
          src="../assets/images/icon-error.svg"
          alt="error icon"
        />
        <h2 class="mb-4" v-html="$t('paymentError.title')" />
        <p class="text-center" v-html="$t('paymentError.text')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  mounted() {
    this.$gtag.event("conversion", {
      send_to: this.domain.googleConversionTag,
      transaction_id: "",
    });
  },
  computed: {
    domain() {
      return this.$store.state.domain;
    },
  },
};
</script>

<style scoped>
.error-img {
  width: 100px;
  margin-bottom: 30px;
}
</style>
