<template>
  <div>
      <footer>
          <div class="container">
            <div class="custom-border">
                <div class="row py-4">
                    <div class="col-6 col-md-3 mb-3 mb-md-0">
                        <div class="d-flex flex-column align-items-start">
                            <router-link to="/">Homepage</router-link>
                            <router-link to="/i-nostri-valori">I nostri valori</router-link>
                            <router-link to="/aiuto">Aiuto</router-link>    
                            <router-link to="/contact">Contattaci</router-link>
                            <router-link to="/site-map">Mappa del sito</router-link>                                                        
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-3 mb-md-0">
                        <div class="d-flex flex-column align-items-start">
                            <router-link to="/browse-templates">Get Started</router-link>
                            <router-link to="/how-to-write-cv">How to write CV</router-link>
                            <router-link to="/browse-templates">Browse Templates</router-link>                        
                            <router-link to="/feedback">Feedback</router-link>
                            <router-link to="/faq">FAQ</router-link>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-start">
                            <router-link to="/partnership">Partnership</router-link>
                            <router-link to="/secure-payment">Secure Payment</router-link>
                            <router-link to="#">Privacy Policy</router-link>
                            <router-link to="#">Terms of Service</router-link>
                            <router-link to="#">Cookie Policy</router-link>
                            <router-link to="#">Note Legali</router-link>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-start">
                            <router-link to="/login">Il mio abbonamento</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between flex-column flex-md-row py-4">
                <p>© 2016-2022. All Rights Reserved.</p>
                <!-- <p>Lanonium B.V. ; Veembroederhof 281, <br>1019HD Amsterdam, Netherlands</p> -->
            </div>
          </div>
      </footer>
  </div>
</template>

<style lang="scss" scoped>
footer {
    padding-top: 2.5rem;
    background-color: #374151;
    p {
        font-size: 0.9rem;
        color: #fff;
        font-weight: bold;
    }
    a {
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
        color: #fff;
        font-weight: bold;
    }
}

.custom-border {
    border-bottom: 1px solid #6a6a6a;
}
</style>