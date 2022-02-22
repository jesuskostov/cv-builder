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
          C'è stato un errore nei nostri sistemi! <br />Non siamo in grado di soddisfare la sua richiesta.
        </h2>
        <p class="text-center">
          Importante: Nessun pagamento è stato effettuato. Il nostro team è stato appena informato
          di questo errore tecnico. Una soluzione sarà fornita al più presto
          possibile. Grazie per la vostra comprensione.
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
