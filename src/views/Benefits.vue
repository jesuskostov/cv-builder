<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5">I nostri valori</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-01.svg" alt="">
                    </span>
                    <h2 class="mb-4">Qualità</h2>
                    <div class="text-left">
                        <p><b>La qualità del servizio è alla base della nostra missione aziendale.</b></p>
                        <p><b>Ecco perchè scegliamo di collaborare solo con i professionisti più affidabili nel settore.</b></p>
                        <p><b>Il nostro obiettivo è migliorare il tuo rapporto con l'amministrazione, e permetterti di ottenere i documenti di cui hai bisogno nel modo più efficiente possibile.</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-02.svg" alt="">
                    </span>
                    <h2 class="mb-4">Efficienza</h2>
                    <div class="text-left">
                        <p><b>Il nostro team di collaboratori efficienti e rigorosi vi consigliano, vi guidano e vi aiutano con efficienza e rapidità.</b></p>
                        <p><b>L'obiettivo è semplice : essere il riferimento assoluto del supporto amministrativo disponibile in Italia.</b></p>
                        <p><b>L'efficienza che ci contraddistingue ci permette di offrire i nostri servizi a tutti ad un prezzo accessibile.</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-03.svg" alt="">
                    </span>
                    <h2 class="mb-4">Precisione</h2>
                    <div class="text-left">
                        <p><b>Meticolosità e precisione sono alla base del nostro approccio.</b></p>
                        <p><b>Tutorial e guide da noi realizzati sono un esempio del nostro impegno in questo senso : informazioni precise espresse in modo semplice per ogni tipologia di cliente.</b></p>
                        <p><b>Grazie alla nostra meticolosità ti offriamo un prodotto sempre ai massimi standard qualitativi.</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-04.svg" alt="">
                    </span>
                    <h2 class="mb-4">Sicurezza</h2>
                    <div class="text-left">
                        <p><b>Il nostro team di specialisti in sicurezza informatica ci consente di proteggere i vostri dati personali (cognomi, coordinate, email, varie informazioni) grazie ai nostri siti web sicuri al 100% (tecnologia di crittografia SSL a 256 bit).</b></p>
                        <p><b>Tutti i tuoi dati sono protetti, essendo disposti su server differenti.</b></p>
                        <p><b>Nessuna interruzione del servizio, 7 giorni su 7, tutti i giorni dell'anno.</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-05.svg" alt="">
                    </span>
                    <h2 class="mb-4">Soddisfazione Cliente</h2>
                    <div class="text-left">
                        <p><b>Siamo a tua disposizione, per offrirti un servizio sempre ai massimi livelli.</b></p>
                        <p><b>Vogliamo offrirti un'esperienza di altissima qualità in tutti gli ambiti.</b></p>
                        <p><b>Meriti un Servizio Clienti eccellente.</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="benefit-box text-center p-4">
                    <span class="white-icon-bg">
                        <img class="benefit-icon mb-3" src="../assets/images/icon-commitment-06.svg" alt="">
                    </span>
                    <h2 class="mb-4">Riservatezza</h2>
                    <div class="text-left">
                        <p><b>La riservatezza assoluta è parte integrante della nostra filosofia.</b></p>
                        <p><b>La nostra società rispetta il tuo diritto alla riservatezza.</b></p>
                        <p><b>Inoltre, i tuoi dati non vengono mai utilizzati a fini commerciali.</b></p>
                    </div>
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

.white-icon-bg {
    position: relative;
    text-align: center;
    width: 90px;
    height: 64px;
    display: block;
    background-color: #F2F5F7;
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
}

.benefit-icon {
    width: 64px;
    height: 64px;
}

.benefit-box {
    height: 100%;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    h2 {
        position: relative;
        font-weight: bold;
        &::after {
            content: "";
            height: 2px;
            width: 3em;
            background: #f6505c;
            display: block;
            margin-top: 0.5em;
            margin-left: auto;
            margin-right: auto;
        }
    }
}

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