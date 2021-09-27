<template>
  <div>
    <navbar />
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
                            <input type="text" class="w-100" name="firstName" id="firstName" v-validate="'required'">
                            <span class="error">{{ errors.first('firstName') }}</span>
                        </div>
                        <div class="col-md-12 mb-3 text-left">
                            <label for="firstName"><span class="red">*</span> Card number:</label>
                            <br>
                            <input type="text" :value="cardNumber | formatCardNumber" @input="updateValue" class="w-100" name="firstName" id="firstName" v-validate="'required'">
                            <span class="error">{{ errors.first('firstName') }}</span>
                        </div>
                        <div class="col-md-5 text-left">
                            <label for="firstName"><span class="red">*</span> Expiry Date:</label>
                            <br>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" class="w-100" name="expiryDay" id="expiryDay" v-validate="'required'">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="w-100" name="expiryYear" id="expiryYear" v-validate="'required'">
                                </div>
                            </div>
                            <span class="error">{{ errors.first('firstName') }}</span>
                        </div>
                        <div class="col-md-7 text-left">
                            <label for="firstName"><span class="red">*</span> CVV:</label>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="text" class="w-100" name="expiryYear" id="expiryYear" v-validate="'required'">
                                </div>
                                <span class="error">{{ errors.first('firstName') }}</span>
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
                    <svg viewBox="0 0 780 2000" xmlns="http://www.w3.org/2000/svg">
                    <!-- Common use case: embed HTML text into SVG -->
                    <foreignObject x="0" y="0" width="100%" height="2000">
                        <templates :onBuilder="true" :selected="selectedCv" />
                    </foreignObject>
                    </svg>
                    <button @click="bigPreview = true">View large</button>
                </div>
            </div>
        </div>
    </div>


  </div>
</template>

<script>
import Navbar from '../components/Navigation.vue'
import Templates from '../components/Template.vue'

export default {
    name: 'Payment',
    components: {
        Navbar,
        Templates
    },
    data() {
        return {
            cardNumber: ''
        }
    },
    computed: {
        selectedCv() {
            return this.$store.state.selectedCv
        }
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
</style>