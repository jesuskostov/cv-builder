<template>
  <div class="container pb-5">
    <div class="text-center py-4">
      <h1>Your CV is ready!</h1>
    </div>
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="card">
          <div class="row mb-5">
            <div class="col-md-6">
              <div @click="plan = 'CV Expert'" class="plan" :class="{'active': plan === 'CV Expert'}">
                <h2>CV Expert</h2>
                <p class="price">1 € for 3 days*</p>
                <ul>
                  <li v-for="i in firstPlan" :key="i">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/>
                    </svg>{{ i }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div @click="plan = 'Achat Solo'" class="plan" :class="{'active': plan === 'Achat Solo'}">
                <h2>Achat Solo</h2>
                <p class="price">29,90 €</p>
                <ul>
                  <li :class="{'overline': i >= 2}" v-for="(name, i) in secondPlan" :key="i">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/>
                    </svg>{{ name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- EMAIL -->
          <div class="row">
            <div class="col-md-8 mx-auto">
              <form @submit.prevent="setPlan">
                  <div class="text-left mb-3">
                      <label for="email">Email address to receive a safe copy of your CV :</label>
                      <br>
                      <input type="email" class="w-100 form-control" name="email" id="email" v-model="email" v-validate="'email'">
                      <span class="error">{{ errors.first('email')}}</span>
                  </div>
                  <div class="text-center">
                      <button type="submit" class="custom-btn mb-3 mb-md-0">Final Step before Download!</button>
                  </div>
              </form>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from 'vee-validate';

const dict = {
  custom: {
    email: {
      required: 'Email is required',
      email: 'Email is not valid',
    },
  },
};

Validator.localize('en', dict);

export default {
  data() {
    return {
      personal: {
        phoneNumber: ''
      },
      plan: 'CV Expert',
      email: '',
      firstPlan: [
        "Download your PDF CV in one click",
        "14 automatic generated models",
        "Personalization by job offer",
        "Create your resume library",
        "Accessible 24/7",
        "Transfer in 3 clicks to your contacts",
        "Termination at any time",
      ],
      secondPlan: [
        "Download your PDF CV in one click",
        "14 automatic generated models",
        "Personalization by job offer",
        "Create your resume library",
        "Accessible 24/7",
        "Transfer in 3 clicks to your contacts",
        "Termination at any time",
      ]
    }
  },
  methods: {
    setPlan() {
      this.$router.push('/Payment')
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
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

.plan {
  padding: 2rem;
  height: 100%;
  border: 4px solid rgb(247, 247, 247);
  border-radius: 4px;
  cursor: pointer;
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
      }
      &:last-child {
        margin-bottom: 0;
      }
      svg {
        position: relative;
        margin-right: 6px;
        top: -2px;
      }
    }
  }
  &.active {
    border: 4px solid var(--primary-color);
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
</style>
