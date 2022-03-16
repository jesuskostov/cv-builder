<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-5 mb-md-5">{{ $t('login.login') }}</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-5 mx-auto">
                <div class="form">
                    <form @submit.prevent="login">
                        <h2 class="mb-4"><b>{{ $t('login.registered') }}</b></h2>
                        <input type="text" class="form-control" :placeholder="$t('login.email')" required>
                        <input type="password" class="form-control" :placeholder="$t('login.password')" required>
                        <div class="text-center mt-4">
                            <button type="submit" class="custom-btn px-5">{{ $t('login.access') }}</button>
                        </div>
                    </form>
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
  data() {
    return {
      title:
        this.$i18n.t("login.login") +
        " | " +
        this.$store.state.domain.site.htmlAttrs.title,
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  methods: {
      login() {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'This email + password combination is wrong, please try again with the good data.',
          }
        )
      }
  }
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

h2 {
    position: relative;
    font-weight: bold;
    font-size: 2rem;
    &::after {
        content: "";
        height: 2px;
        width: 3em;
        background: #f6505c;
        display: block;
        margin-top: 0.5em;
        margin-right: auto;
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