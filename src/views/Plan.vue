<template>
  <div class="container pb-5">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="card mt-4 mb-5">
          <!-- TITLE -->
          <div class="text-center pb-4">
            <h1 class="font-weight-bold">Il tuo CV è pronto!</h1>
          </div>
          <!-- PLAN -->
          <div class="row mb-5">
            <div class="col-md-12 mb-4 mb-lg-0 col-lg-6">
              <div
                @click="plan = 'CV Expert'"
                class="plan"
                :class="{ active: plan === 'CV Expert' }"
              >
                <span class="custom-checkbox"></span>
                <h2 class="font-weight-bold mb-0">CV Expert</h2>
                <p class="price">4,90 € per 3 giorni*</p>
                <ul>
                  <li v-for="i in firstPlan" :key="i">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                      />
                    </svg>
                    {{ i }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-12 mb-lg-0 col-lg-6">
              <div
                @click="plan = 'Achat Solo'"
                class="plan"
                :class="{ active: plan === 'Achat Solo' }"
              >
                <span class="custom-checkbox"></span>
                <h2 class="font-weight-bold mb-0">Achat Solo</h2>
                <p class="price">29,90 €</p>
                <ul>
                  <li
                    :class="{ overline: i >= 2 }"
                    v-for="(name, i) in secondPlan"
                    :key="i"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                      />
                    </svg>
                    {{ name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- EMAIL -->
          <div class="row mb-5">
            <div class="col-md-8 mx-auto">
              <form action="" @submit.prevent="setPlan">
                <div class="form-group text-center mb-3">
                  <label for="email"
                    >Indirizzo e-mail per ricevere una copia sicura del tuo CV:</label
                  >

                  <input
                    type="text"
                    class="w-100 form-control"
                    name="email"
                    id="email"
                    v-model="email"
                    v-validate="'required|email'"
                  />
                  <span class="error">{{ errors.first("email") ? "Richiesto l'invio di un'e-mail" : '' }}</span>
                </div>

                <div class="text-center">
                  <button type="submit" class="custom-btn mb-3 mb-md-0">
                    Ultimo passo prima del download!
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- LEGAL TEXTS -->
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
              <div class="d-flex align-items-center mt-1 mb-4">
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z"/>
                </svg>
                <p class="payment-title mb-2">Pagamento sicuro</p>
              </div>
              <p class="mb-4">Paga con fiducia con le tue carte di credito sicure:</p>
              <img
                src="../assets/images/cards.svg"
                class="img-fluid"
                alt="cards"
                width="300"
              />
            </div>
            <div class="col-md-6">
              <div class="subscribe">
                <p class="h6"><b>Abbonamento illimitato agli strumenti Expert</b></p>
                <small>* CV Expert : 4,90 € per 3 giorni, poi 29,90 € mensili per godere del nostro set di strumenti esperti per gestire il tuo CV e la tua carriera
                    nel miglior modo possibile
                  <br>Puoi annullare l’abbonamento abbonamento in qualsiasi momento con un clic.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
const dict = {
  custom: {
    email: {
      required: "Email is required",
      email: "Email is not valid",
    },
  },
};

Validator.localize("en", dict);

export default {
  data() {
    return {
      personal: {
        phoneNumber: "",
      },
      plan: "CV Expert",
      email: null,
      firstPlan: [
        "Scarica il tuo CV in PDF con un solo clic",
        "14 modelli generati automaticamente",
        "Personalizzazione per offerta di lavoro",
        "Crea la tua libreria di curricula",
        "Accessibile 24/7",
        "Trasferimento in 3 clic ai tuoi contatti",
        "Disdetta in qualsiasi momento",
      ],
      secondPlan: [
        "Scarica il tuo CV in PDF con un solo clic",
        "14 modelli generati automaticamente",
        "Personalizzazione per offerta di lavoro",
        "Crea la tua libreria di curricula",
        "Accessibile 24/7",
        "Trasferimento in 3 clic ai tuoi contatti",
        "Disdetta in qualsiasi momento",
      ],
    };
  },
  methods: {
    async setPlan() {
      const isValid = await this.$validator.validateAll();
      let plan = this.plan
      this.$store.dispatch('setPlan', plan)
      if (!isValid) return;
      this.$router.push({name: 'Payment'});
    },
  },
};
</script>

<style lang="scss" scoped>

.payment-title {
  font-size: 1.6rem;
}

.card {
  padding: 2.5rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  color: #000;
  @media (max-width: 575.98px) {
    padding: 1rem;
  }
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

.plan {
  position: relative;
  padding: 2rem;
  height: 100%;
  border: 2px solid rgb(226, 228, 228);
  border-radius: 12px;
  cursor: pointer;
  @media (max-width: 575.98px) {
    padding: 1rem;
  }
  h2 {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .price {
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      text-align: left;
      margin-bottom: 6px;
      &.overline {
        text-decoration: line-through;
        svg {
          fill: #c8ccd0 !important;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      svg {
        position: relative;
        margin-right: 6px;
        top: -2px;
        fill: currentColor;
        color: #c8ccd0;
      }
    }
  }
  .custom-checkbox {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    border: 1px solid black;
    position: absolute;
    top: 20px;
    left: 40px;
    @media (max-width: 575.98px) {
      left: 15px;
    }
  }
  &.active {
    border-color: var(--primary-color);
    .price {
      color: var(--primary-color);
    }
    ul {
      li {
        svg {
          fill: rgb(115, 201, 115);
        }
      }
    }
    .custom-checkbox {
     &::after {
       content: '';
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       width: 12px;
       height: 12px;
       background-color: var(--primary-color);
       border-radius: 999px;
     }
    }
  }
}

.pay-btn {
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

.secure-payment-img {
  width: 50%;
}

.subscribe {
  padding: 1.4rem;
  background-color: #ededed;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
}
</style>
