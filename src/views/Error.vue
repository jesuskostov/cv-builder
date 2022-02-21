<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10 mx-auto text-center py-5">
        <img
          class="error-img"
          src="../assets/images/icon-error.svg"
          alt="error icon"
        />
        <h2 class="mb-4">
          There was a problem with our system! <br />We are unable to comply
          with your request.
        </h2>
        <p class="text-center">
          Important: NO payments have been made. Our team has just been notified
          of this technical error. A solution will be provided as soon as
          possible. Thanks for your understanding.
        </p>
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
