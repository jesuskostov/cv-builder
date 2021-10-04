<template>
  <div>
    <div id="how-to-write-cv">
      <div class="container">
        <div class="section-title mb-5">
          <h2>How to write your CV well</h2>
          <span class="line"></span>
        </div>
        <div class="row pt-4">
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box text-left left">
                            <div class="inner" data-aos="fade-right" data-aos-duration="1000">
                                <h4>Pick the right resume template</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="text-left text pl-md-3 pl-0">With the help of CV Generator, your CV will stand out from the crowd. Easily personalise the resume design and your CV will be ready and exported in PDF under 5 minutes.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box text-left left">
                            <div class="inner" data-aos="fade-right" data-aos-duration="1000">
                                <h4>Write down your contact information correctly</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="text-left text pl-md-3 pl-0">With the help of CV Generator, your CV will stand out from the crowd. Easily personalise the resume design and your CV will be ready and exported in PDF under 5 minutes.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box text-left left">
                            <div class="inner" data-aos="fade-right" data-aos-duration="1000">
                                <h4>Include a resume objective</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="text-left text pl-md-3 pl-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ex laboriosam numquam dolores, modi doloremque inventore nesciunt temporibus aliquam, aspernatur voluptatem. In dolorum voluptate laboriosam distinctio repellendus doloremque laborum molestiae?</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box text-left left">
                            <div class="inner" data-aos="fade-right" data-aos-duration="1000">
                                <h4>List your education in detail</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="text-left text pl-md-3 pl-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum culpa provident voluptatem, ut odio dolor praesentium veritatis velit quis neque quidem voluptatum alias mollitia maxime. Consectetur ratione voluptatibus optio laboriosam?</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box text-left left">
                            <div class="inner" data-aos="fade-right" data-aos-duration="1000">
                                <h4>Highlight your skills, languages, iterests and ect...</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="text-left text pl-md-3 pl-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ex laboriosam numquam dolores, modi doloremque inventore nesciunt temporibus aliquam, aspernatur voluptatem. In dolorum voluptate laboriosam distinctio repellendus doloremque laborum molestiae?</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box text-left left">
                            <div class="inner" data-aos="fade-right" data-aos-duration="1000">
                                <h4>Stick to the one-page limit</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="text-left text pl-md-3 pl-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum culpa provident voluptatem, ut odio dolor praesentium veritatis velit quis neque quidem voluptatum alias mollitia maxime. Consectetur ratione voluptatibus optio laboriosam?</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box text-left left">
                            <div class="inner" data-aos="fade-right" data-aos-duration="1000">
                                <h4>Get inspired by a first-job resume example</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="text-left text pl-md-3 pl-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ex laboriosam numquam dolores, modi doloremque inventore nesciunt temporibus aliquam, aspernatur voluptatem. In dolorum voluptate laboriosam distinctio repellendus doloremque laborum molestiae?</p>
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
  name: 'Home',
  components: {
      Footer
  }
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
  margin-bottom: 38px;
  &.left {
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + 6px);
        width: 30px;
        border: 1px dashed rgb(154, 225, 154);
        @media (max-width: 767.98px) { 
            height: 30px;
            width: 1px;
            top: calc(100% + 6px);
            left: 50%;
            transform: translateX(-50%);
        }
    }
  }
  .inner {
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

@media (max-width: 767.98px) { 
    h4 {
        font-size: 1rem;
    }
    p {
        font-size: .8rem;
    }
}


</style>