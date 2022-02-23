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
                            <router-link :to="{name: 'Contact'}">Contattaci</router-link>
                            <router-link to="/site-map">Mappa del sito</router-link>                                                        
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-3 mb-md-0">
                        <div class="d-flex flex-column align-items-start">
                            <router-link :to="{name: 'BrowseTemplates'}" v-text="$t('footer_menu')[0]">Get Started</router-link>
                            <router-link :to="{name: 'HowToWriteCv'}" v-text="$t('footer_menu')[1]">How to write CV</router-link>
                            <router-link :to="{name: 'BrowseTemplates'}" v-text="$t('footer_menu')[2]">Browse Templates</router-link>                        
                            <router-link :to="{name: 'Feedbacks'}" v-text="$t('footer_menu')[3]">Feedback</router-link>
                            <router-link :to="{name: 'Faq'}" v-text="$t('footer_menu')[4]">FAQ</router-link>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-start">
                            <router-link :to="{name: 'Partnership'}" v-text="$t('footer_menu')[5]">Partnership</router-link>
                            <router-link :to="{name: 'SecurePayment'}" v-text="$t('footer_menu')[6]">Secure Payment</router-link>
                            <router-link to="#" v-text="$t('footer_menu')[7]">Privacy Policy</router-link>
                            <router-link to="#" v-text="$t('footer_menu')[8]">Terms of Service</router-link>
                            <router-link to="#" v-text="$t('footer_menu')[9]">Cookie Policy</router-link>
                            <router-link to="#" v-text="$t('footer_menu')[10]">Note Legali</router-link>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-start">
                            <router-link :to="{name: 'Login'}">Il mio abbonamento</router-link>
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