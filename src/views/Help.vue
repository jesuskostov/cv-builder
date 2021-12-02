<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5">Aiuto</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="mb-5">
                    <h2><b>Il mio pagamento è sicuro ?</b></h2>
                    <p>La sicurezza è al cuore della nostra offerta commerciale, e lo è ben inteso anche per le transazioni ! La nostra soluzione di pagamento è protetta grazie alla crittografia SSL. I vostri dati sono quindi protetti al 100%.</p>
                </div>
                <div class="mb-5">
                    <h2><b>Come funziona il mio abbonamento ?</b></h2>
                    <p>Permettiamo a tutti i nuovi clienti di usufruire della nostra offerta eccezionale di benvenuto : 3 giorni a soli 3,90€ !</p>
                    <p>Al termine del periodo di prova, la continuità del servizio è assicurata grazie al rinnovo automatico dell'abbonamento a 39€ mensili.</p>
                </div>
                <div class="mb-5">
                    <h2><b>Come cancellare il mio abbonamento ?</b></h2>
                    <p>Semplicissimo : disponi delle seguenti possibilità per cancellare l'abbonamento :</p>
                    <ol>
                        <li>Navigare all'area utenti Dolcumento Premium : nella sezione " IL MIO ACCOUNT", utilizzate l'opzione di cancellazione. E' automatica e istantanea...</li>
                        <li>Tramite email : scrivici a contatti@Dolcumento.com per esprimere la tua volontà. La tua richiesta sarà presa in considerazione nei due giorni lavorativi seguenti la ricezione del tuo messaggio.</li>
                        <li>Telefonicamente : puoi chiamarci ogni giorno della settimana dalle 10 alle 17, per farlo ti preghiamo di recarti alla pagina "Contattarci".</li>
                    </ol>
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
  name: 'Help',
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