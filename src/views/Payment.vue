<template>
  <div>
    <div class="container pt-5">
        <div class="row">
            <div class="col-12 col-md-7">
               <div class="payment">
                   <h1 class="title">100% secure payment <span class="line"></span></h1>
                   <div class="text-left">
                    <p class="price">Price <span>1.99 €*</span></p>
                   </div>
                   <div class="row text-left">
                        <div class="col-md-12 mb-3 text-left">
                            <label for="firstName"><span class="red">*</span> Your Name:</label>
                            <br>
                            <input type="text" class="w-100 form-control" name="firstName" id="firstName" v-validate="'alpha_spaces'">
                            <span class="error">{{ errors.first('firstName') }}</span>
                        </div>
                        <div class="col-md-12 mb-3 text-left">
                            <label for="creditCard"><span class="red">*</span> Card number:</label>
                            <br>
                            <input type="text" :value="cardNumber | formatCardNumber" @input="updateValue" class="w-100 form-control" name="creditCard" id="firstName" v-validate="'credit_card'">
                            <span class="error">{{ errors.first('creditCard') }}</span>
                        </div>
                        <div class="col-md-5 text-left">
                            <label for="expiryDay"><span class="red">*</span> Expiry Date:</label>
                            <br>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" class="w-100 form-control" name="expiryDay" id="expiryDay" v-validate="'date_format:MM'" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="w-100 form-control" name="expiryYear" id="expiryYear" v-validate="'digits:4'" required>
                                </div>
                            </div>
                            <span class="error">{{ errors.first('expiryDay') }}</span>
                            <span class="error">{{ errors.first('expiryYear') }}</span>
                        </div>
                        <div class="col-md-7 text-left">
                            <label for="cvv"><span class="red">*</span> CVV:</label>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="text" class="w-100 form-control" name="cvv" id="cvv" v-validate="'digits:3'">
                                </div>
                                <span class="error">{{ errors.first('cvv') }}</span>
                            </div>
                        </div>
                   </div>
                   <div class="text-center">
                       <button class="pay-btn">Complete Payment</button>
                   </div>
                   <div class="row">
                       <div class="col-12 col-md-8 mx-auto">
                            <img src="../assets/images/cards.png" alt="cards" class="w-100">
                       </div>
                   </div>
               </div>
            </div>
            <div class="col-md-4 offset-md-1">
                <div class="preview">
                  <svg :viewBox="`0 0 780 ${previewHeight}`" xmlns="http://www.w3.org/2000/svg">
                    <!-- Common use case: embed HTML text into SVG -->
                    <foreignObject x="0" y="0" width="100%" :height="previewHeight">
                        <templates :onBuilder="true" :selected="selectedCv" />
                    </foreignObject>
                  </svg>
                  <button @click="bigPreview = true" class="view-large-btn">
                      <img src="../assets/images/zoom.svg" alt="view icon">
                      View large
                  </button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="bigPreview" class="big-preview">
      <button @click="bigPreview = false" class="close-btn">
        <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
        </svg>
      </button>
      <div class="row h-100">
        <div class="col-md-6 h-100">
          <div class="cv-list">
            <div class="row">
              <div v-for="(item, i) in templates" :key="i" class="col-md-4">
                <img @click="onClick(i)" class="cv-list-img" :class="{'active': selectedCv == i}" :src="require(`@/assets/images/cv-templates/${item.thumb}`)" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 h-100">
          <div class="d-flex align-items-center justify-content-center w-100 h-100">
            <div class="scene">
              <svg :viewBox="`0 0 700 ${previewHeight}`" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="0" y="0" width="100%" :height="previewHeight">
                    <templates :onBuilder="true" :selected="selectedCv" />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Templates from '../components/Template.vue'

export default {
    name: 'Payment',
    components: {
        Templates
    },
    data() {
        return {
            bigPreview: false,
            cardNumber: ''
        }
    },
    computed: {
        selectedCv() {
            return this.$store.state.selectedCv
        },
        templates() {
            return this.$store.state.templates
        },
        previewHeight() {
            return this.$store.state.previewHeight
        },        
    },
    filters: {
        formatCardNumber(value){
            return value ? value.match(/.{1,4}/g).join(' ') : '';
        } 
    },
    methods: {
        updateValue(e){
            this.cardNumber = e.target.value.replace(/ /g,'');

            // Show fake error
            if (this.cardNumber.length == 8) {
                this.$router.push('/error')
            }
        },
        onClick(i) {
            let payload = i
            localStorage.setItem('cv_variant', payload);
            this.$store.dispatch('selectCv', {payload});
        },
    },
    async created() {
      let step = await this.$store.state.step
      if (step === null && step !== 5) {
        this.$router.push('/builder')
      }
    }
}
</script>

<style lang="scss" scoped>
.payment {
    padding: 2.5rem 2rem;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.16);
    border-radius: 4px;
    color: #000;
    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 2.5rem;
        @media (max-width: 575.98px) {
            font-size: 1.4rem;
        }
        .line {
            margin-top: 1rem;
            display: block;
            width: 15%;
            height: 2px;
            background-color: var(--primary-color);
        }
    }
}

.price {
    font-size: 1rem;
    font-weight: bold;
    span {
        color: var(--primary-color);
    }
}

.pay-btn {
    margin: 1.8rem 0;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    background-color: #279857;
    height: 52px;
    font-size: 1.2rem;
    min-width: 290px;
    padding: 0 8px;
}

.cards {
    width: 360px;
}

.preview {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #E9ECF0;
  height: 100%;
  padding: 20px;
  .edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 43px;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 9px;
    border: 0;    
    background-color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.16);  
  }
}


.big-preview {
  position: fixed;
  inset: 0;
  background-color: #fff;
  max-height: 100vh;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: 0;
  z-index: 9999;
  svg {
      width: 25px;
      height: 25px;
  }
}

.cv-list {
  padding: 20px;
  background-color: rgb(240, 240, 240);
  box-shadow: 4px 0 8px 0 rgba(0,0,0,0.16);
  height: 100%;
  overflow: scroll;
}

.cv-list-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 40px;
  &.active {
    outline: 2px solid red;
  }
}


.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.cv-preview-shadow {
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
}

.view-large-btn {
  margin-top: 1rem;
  color: #000;
  font-weight: bold;
  border: 0;
  background-color: transparent;
  img {
    position: relative;
    top: -2px;
  }
}

.preview {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #E9ECF0;
  height: 100%;
  padding: 20px;
  .edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 43px;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 9px;
    border: 0;    
    background-color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.16);  
  }
}

.scene {
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.16);
  width: 400px;
  overflow: scroll;
  svg {
    width: 100%;
  }
}
</style>