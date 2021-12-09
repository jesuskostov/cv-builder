<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-6 ml-lg-auto">
          <div class="payment">
            <h1 class="title">
              100% secure payment <span class="line"></span>
            </h1>
            <div class="text-left">
              <p v-if="offer === 'free'" class="price">Price <span>1.99 €*</span></p>
              <p v-if="offer === 'paid'" class="price">Price <span>1.99 €</span></p>
            </div>
            <div class="form-group">
              <label for="firstName">
                <span class="red">*</span> Your Name:
              </label>
              <input
                type="text"
                class="form-control"
                name="firstName"
                id="firstName"
                v-validate="'alpha_spaces'"
              />
              <span class="error">{{ errors.first("firstName") }}</span>
            </div>
            <div class="form-group">
              <label for="creditCard">
                <span class="red">*</span> Card Number:
              </label>

              <input
                type="text"
                :value="cardNumber | formatCardNumber"
                @input="updateValue"
                class="form-control"
                name="creditCard"
                id="firstName"
                v-validate="'credit_card'"
              />
              <span class="error">{{ errors.first("creditCard") }}</span>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="expiryMonth">
                    <span class="red">*</span>
                    Expiry Date:
                  </label>
                  <div class="row no-gutters mx-n1">
                    <div class="col-6 px-1">
                      <input
                        type="text"
                        class="form-control "
                        name="expiryMonth"
                        id="expiryMonth"
                        v-validate="'date_format:MM'"
                        required
                        maxlength="2"
                      />
                    </div>
                    <div class="col-6 px-1">
                      <input
                        type="text"
                        class="form-control"
                        name="expiryYear"
                        id="expiryYear"
                        v-validate="'digits:4'"
                        required
                        maxlength="4"
                      />
                    </div>
                  </div>
                  <span class="error">{{ errors.first("expiryMonth") }}</span>
                  <span class="error">{{ errors.first("expiryYear") }}</span>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="cvv"><span class="red">*</span> CVV:</label>
                  <div class="d-flex align-items-center">
                    <span class="mr-2">
                      <input
                        type="text"
                        class="form-control mb-0 w-auto"
                        name="cvv"
                        id="cvv"
                        size="3"
                        maxlength="3"
                        v-validate="'digits:3'"
                      />
                    </span>
                    <span class="ccv">
                      <img src="../assets/images/ccv.svg" alt="" />
                    </span>
                  </div>
                  <span class="error">{{ errors.first("cvv") }}</span>
                </div>
              </div>
            </div>
            <p class="text-center mb-1">
              <button class="pay-btn">
                Complete Payment
              </button>
            </p>
            <p class="text-center">
              <img
                src="../assets/images/cards.svg"
                class="img-fluid"
                alt="cards"
                width="300"
              />
            </p>
          </div>
        </div>
        <div class="col-md-4 mr-auto">
          <div class="preview">
            <div class="px-5 py-3 text-center">
              <svg
                :viewBox="`0 0 780 ${previewHeight}`"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Common use case: embed HTML text into SVG -->
                <foreignObject x="0" y="0" width="100%" :height="previewHeight">
                  <templates :color="color" :onBuilder="true" :selected="selectedCv" />
                </foreignObject>
              </svg>
              <button @click="showBigPreview" class="view-large-btn">
                <img src="../assets/images/zoom.svg" alt="view icon" />
                View large
              </button>
            </div>

            <ul class="mt-4">
              <li class="d-flex items-center mb-2">
                <span class="mr-2 flex-shrink-0">
                  <svg
                    class="text-success fill-current"
                    style="fill: currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    /></svg
                ></span>
                CV in PDF format
              </li>
               <li class="d-flex items-center mb-2">
                <span class="mr-2 flex-shrink-0">
                  <svg
                    class="text-success fill-current"
                    style="fill: currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    /></svg
                ></span>
                1 click for 14 CV at once!
              </li>
              <li class="d-flex items-center mb-2">
                <span class="mr-2 flex-shrink-0">
                  <svg
                    class="text-success fill-current"
                    style="fill: currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    /></svg
                ></span>
                Change template at anytime
              </li>
              <li class="d-flex items-center mb-2">
                <span class="mr-2 flex-shrink-0"
                  ><svg
                    class="text-success fill-current"
                    style="fill: currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    />
                  </svg>
                </span>
                Print from anywhere
              </li>
              <li class="d-flex items-center mb-2">
                <span class="mr-2 flex-shrink-0"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="text-success fill-current"
                    style="fill: currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    />
                  </svg>
                </span>
                Send instantly to email
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bigPreview" class="big-preview">
      <button @click="hideBigPreview" class="close-btn">
        <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
          />
        </svg>
      </button>
      <div class="row no-gutters h-100">
        <div class="col-md-5 col-lg-4 h-100">
          <div class="cv-list">
            <div class="row mx-n2">
              <div
                v-for="(item, i) in templates"
                :key="i"
                class="col-6 col-md-4 px-2 mb-3"
              >
                <div class="img-holder" :class="{ active: selectedCv == i }">
                  <img
                    @click="onClick(i)"
                    class="cv-list-img"
                    :src="require(`@/assets/images/cv-templates/it/${item.thumb}`)"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-8 h-100">
          <div class="overflow-auto h-100">
            <div class="scene-holder">
              <div class="scene">
                <svg
                  :viewBox="`0 0 700 ${previewHeight}`"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <foreignObject
                    x="0"
                    y="0"
                    width="100%"
                    :height="previewHeight"
                  >
                    <templates
                      :color="color"
                      :onBuilder="true"
                      :selected="selectedCv"
                    />
                  </foreignObject>
                </svg>
                <div class="colors in-builder">
                  <button
                    v-for="(item, i) in colors"
                    :key="i"
                    @click="color = item"
                    :class="color === item && 'is-active'"
                    :style="`background-color: ${item}`"
                  ></button>
                </div>
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
import Templates from "../components/Template.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Payment",
  components: {
    Templates,
    Footer,
  },
  data() {
    return {
      bigPreview: false,
      cardNumber: "",
      color: "#91976f",
      colors: {
        orange: "#e78738",
        blue: "#4f51df",
        green: "#9ba76a",
        lightBlue: "#5182c2",
        purple: "#8a75aa",
      },
    };
  },
  computed: {
    selectedCv() {
      return this.$store.state.selectedCv;
    },
    templates() {
      return this.$store.state.templates;
    },
    previewHeight() {
      return this.$store.state.previewHeight;
    },
    offer() {
      return this.$store.state.domain.offer
    }
  },
  filters: {
    formatCardNumber(value) {
      return value ? value.match(/.{1,4}/g).join(" ") : "";
    },
  },
  methods: {
    updateValue(e) {
      this.cardNumber = e.target.value.replace(/ /g, "");

      // Show fake error
      if (this.cardNumber.length == 8) {
        this.$router.push("/error");
      }
    },
    onClick(i) {
      let payload = i;
      localStorage.setItem("cv_variant", payload);
      this.$store.dispatch("selectCv", { payload });
    },
    showBigPreview() {
      this.bigPreview = true;
      document.body.style.overflow = "hidden";
    },
    hideBigPreview() {
      this.bigPreview = false;
      document.body.style.overflow = "auto";
    },
  },
  async created() {
    let step = await this.$store.state.step;
    if (step === null && step !== 5) {
      this.$router.push("/builder");
    }
  },
};
</script>

<style lang="scss" scoped>
.ccv {
  img {
    width: 2.5rem;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(2);
    }
  }
}

.colors {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
  &.in-builder {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 1rem 2rem 1rem 1em;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 4px 15px 10px rgba(22, 22, 23, 0.08);
    transform: translateY(-50%);
    flex-direction: column;
    background-color: #fff;
  }
  button {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    flex-shrink: 0;
    transition: transform 0.25s ease;
    will-change: transform;

    &:hover {
      transform: scale(1.1);
    }

    &.is-active {
      box-shadow: 0px 0px 0px 2px white, 0 0 3px 2px rgba(44, 46, 46, 0.4);
    }
  }
}

.payment {
  padding: 2.5rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  color: #000;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: clamp(1.5rem, 1vw + 1rem, 2.2rem);
    font-weight: bold;
    margin-bottom: 1em;
    letter-spacing: -0.02em;

    .line {
      margin-top: 0.3em;
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
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  background: rgb(252, 241, 207);
  border-radius: 4px;
  span {
    color: var(--primary-color);
    font-weight: bold;
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

.scene-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 100%;
}

.scene {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
  min-width: 50vh;

  svg {
    width: 100%;
  }
}

.preview {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #e9ecf0;
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
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
  }
}

.big-preview {
  position: fixed;
  inset: 0;
  background-color: #e9ecf0;
  max-height: 100vh;
  z-index: 10000;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: 0;
  z-index: 9999;
  padding: 0.5rem;
  svg {
    width: 18px;
    height: 18px;
  }
}

.cv-list {
  padding: 20px;
  background-color: white;
  height: 100%;
  overflow: scroll;
}

.cv-list::-webkit-scrollbar {
  width: 0.4em;
  border-radius: 10px;
}

.cv-list::-webkit-scrollbar-thumb {
  background-color: #9ca0a5;
  border-radius: 10px;
}

.img-holder {
  position: relative;
  height: 0;
  border: 1px solid #e2e4e6;

  padding-top: 144%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &.active {
    border: 1px solid var(--blue);
    box-shadow: 0px 0px 0 3px #007bff31;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(204, 241, 255, 0.146);
      z-index: 10;
    }
  }

  &:hover:not(.active) {
    box-shadow: 0 2px 3px rgba(44, 46, 46, 0.1);
  }
}

.cv-list-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0.5rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.cv-preview-shadow {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);
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
  background-color: #e9ecf0;
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
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);
  }
}
</style>
