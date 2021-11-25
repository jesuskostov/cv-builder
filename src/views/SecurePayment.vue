<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5">PAGAMENTO SICURO</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="text-left">
                    <p>Per consentirvi un acquisto sicuro, facile ed immediato, abbiamo scelto di offrirvi un largo pannello di pagamento con carta di credito, è così possibile utilizzare i seguenti canali: Mastercard, Mastercard SecureCode, Visa, Verified by VISA.</p>
                    <p>Il pagamento si effettua direttamente sul server protetto del nostro partner bancario, grazie a una connessione sicura che utilizza il processo di crittografia SSL (Secure Socket Layer), il protocollo più usato e rispettato al mondo.</p>
                    <p>Inoltre, la “S” nell’indirizzo della pagina di pagamento (httpS://….) conferma che la pagina sulla quale vi trovate è ben protetta.</p>
                    <p>Infine, il lucchetto che appare nella parte inferiore della pagina o nella barra di navigazione (a seconda del browser Internet utilizzato), assicura una protezione cifrata.</p>
                    <p>Tutto questo garantisce in modo chiaro ed efficiente che le vostre informazioni personali sono strettamente confidenziali e rimangono completamente crittografate durante tutte le fasi del pagamento, evitando così qualsiasi rischio di un eventuale atto di pirateria informatica.</p>
                    <p>Una volta che la vostra banca avrà accettato la transazione, il vostro ordine verrà convalidato. Riceverete dunque una email ricapitolativa dell’avvenuta transazione.</p>
                    <p><i>Per maggiori dettagli relativi alla nostra politica di sicurezza e privacy, vi invitiamo a consultare le nostre Condizioni Generali di Utilizzo e Vendita, nonché la nostra Carta della Privacy, disponibili nelle rubriche corrispondenti del nostro Sito.</i></p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,
  },
}
</script>

<style lang="scss" scoped>

#intro-section {
  background-color: var(--secondary-color);
  padding: 5.6rem 0 3.2rem 0;
  @media (max-width: 575.98px) {
    padding-top: 1rem;
  }
  @media (max-width: 1199.98px) {
    overflow: hidden;
  }
  
}

h1 {
  text-align: left;
  font-size: 2.7rem;
  font-weight: bold;
  color: #fff;
  @media (max-width: 575.98px) {
    font-size: 1.7rem;
  }
}
</style>