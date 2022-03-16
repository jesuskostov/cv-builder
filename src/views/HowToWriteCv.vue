<template>
  <div>
    <div id="how-to-write-cv">
      <div class="container">
        <div class="section-title mb-5">
          <h2 v-text="$t('howToWriteCV.title')" />
          <span class="line"></span>
        </div>
        <div class="row pt-4">
            <div class="col-md-8 mx-auto">
                <div v-for="(item, i) in $t('howToWriteCV.information')" :key="i" class="row mb-4">
                    <div class="col-md-12">
                        <div class="box text-left left">
                            <div class="inner">
                                <h4 class="text-center" data-aos="fade" data-aos-duration="1000" v-html="item.title" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <p class="text-left text pl-md-3 pl-0" v-html="item.text" />
                        <ul v-if="item.ul">
                            <li v-for="(li, i) in item.ul" :key="i" v-html="li" class="mb-4" />
                        </ul>
                        <p v-if="item.text2" class="text-left text pl-md-3 pl-0" v-html="item.text2" />
                    </div>
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
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import '../../node_modules/swiper/dist/css/swiper.css'

export default {
  components: {
      Footer
  },
  data() {
    return {
      title:
        this.$i18n.t("howToWriteCV.title") +
        " | " +
        this.$store.state.domain.site.htmlAttrs.title,
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
}
</script>

<style lang="scss" scoped>
#how-to-write-cv {
  overflow: hidden;
  background-color: #fff;
  padding: 3rem 0;
}

.box {
  border-radius: 8px;
  border: 1px dashed rgb(154, 225, 154);
  position: relative;
  margin-bottom: 4rem;
  &.left {
       
    &::after {
        content: '';
        position: absolute;
        top: calc(100% + 6px);
        left: 50%;
        height: 30px;
        width: 1px;
        border: 1px dashed rgb(154, 225, 154);
        transform: translateX(-50%);
    }
  }
  .inner {
    text-align: center;
    border-radius: 8px;
    padding: 15px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 100%;
    h4, p {
      margin-bottom: 0;
    }
  }
}
</style>