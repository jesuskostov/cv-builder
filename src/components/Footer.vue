<template>
  <div>
      <footer>
          <div class="container">
            <div class="custom-border">
                <div class="row py-4">
                    <div class="col-6 col-md-3 mb-3 mb-md-0">
                        <div class="d-flex flex-column align-items-start">
                            <router-link to="/" v-text="$t('footer_menu')[11]" />
                            <router-link :to="`/${$t('link.values')}`" v-text="$t('footer_menu')[12]" />
                            <router-link :to="`/${$t('link.help')}`" v-text="$t('footer_menu')[13]" />
                            <router-link :to="{name: 'Contact'}" v-text="$t('footer_menu')[16]" />
                            <router-link :to="`/${$t('link.siteMap')}`" v-text="$t('footer_menu')[14]" />
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-3 mb-md-0">
                        <div class="d-flex flex-column align-items-start">
                            <router-link :to="{name: 'BrowseTemplates'}" v-text="$t('footer_menu')[0]" />
                            <router-link :to="{name: 'HowToWriteCv'}" v-text="$t('footer_menu')[1]" />
                            <router-link :to="{name: 'BrowseTemplates'}" v-text="$t('footer_menu')[2]" />
                            <router-link :to="{name: 'Feedbacks'}" v-text="$t('footer_menu')[3]" />
                            <router-link :to="{name: 'Faq'}" v-text="$t('footer_menu')[4]" />
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-start">
                            <router-link :to="{name: 'Partnership'}" v-text="$t('footer_menu')[5]" />
                            <router-link :to="{name: 'SecurePayment'}" v-text="$t('footer_menu')[6]" />
                            <router-link to="#" v-text="$t('footer_menu')[7]" />
                            <router-link to="#" v-text="$t('footer_menu')[8]" />
                            <router-link to="#" v-text="$t('footer_menu')[9]" />
                            <router-link to="#" v-text="$t('footer_menu')[10]" />
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-start">
                            <router-link :to="{name: 'Login'}" v-text="$t('footer_menu')[15]" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between flex-column flex-md-row py-4">
                <!-- <p>© 2016-2022. All Rights Reserved.</p> -->
                <p v-text="$t('rights')" />
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