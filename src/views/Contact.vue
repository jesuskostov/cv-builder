<template>
  <div class="home">
    <div id="intro-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
              <div class="d-flex flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-ease="ease" data-aos-duration="1500" class="mb-4 mb-md-5" v-text="$t('contact.title')" />
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="form contact-form">
                    <form @submit.prevent="alertDisplay">
                      <div class="row">
                          <div class="col-md-6">
                              <input type="text" v-model="name" class="w-100 form-control" minlength="2" :placeholder="$t('contact.fields.name')" required>
                          </div>
                          <div class="col-md-6">
                              <input type="text" v-model="surname" class="w-100 form-control" minlength="2" :placeholder="$t('contact.fields.surname')" required>
                          </div>
                          <div class="col-md-6">
                              <input type="email" v-model="email" class="w-100 form-control" :placeholder="$t('contact.fields.email')" required>
                          </div>
                          <div class="col-md-6">
                              <input type="text" v-model="subject" class="w-100 form-control" :placeholder="$t('contact.fields.subject')" required>
                          </div>
                          <div class="col-md-12 mt-3">
                              <textarea v-model="message" cols="10" rows="5" class="form-control" :placeholder="$t('contact.fields.message')" required></textarea>
                              <div class="text-center">
                                  <button type="submit" class="custom-btn big" v-text="$t('contact.send')" />
                              </div>
                          </div>
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
  data() {
    return {
      title:
        this.$i18n.t("contact.title") +
        " | " +
        this.$store.state.domain.site.htmlAttrs.title,
      name: '',
      surname: '',
      subject: '',
      email: '',
      message: '',
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  components: {
    Footer,
  },
  methods: {
    alertDisplay() {
        this.$swal(
          'Message sent successfully',
          '',
          'success'
        )
    }
  }
}
</script>

<style>
.swal2-styled.swal2-confirm {
  background-color: var(--primary-color) !important;
}
</style>

<style lang="scss" scoped>
.contact-form {
  position: relative;
  top: -50px;
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