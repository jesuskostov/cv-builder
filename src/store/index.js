import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cv_variant: null,
    step: null
  },
  mutations: {
    SET_STEP: (state, step) => {
      state.step = step;
      localStorage.step = step;
    },
    SET_CV_VARIANT: (state, variant) => {
      state.cv_variant = variant
      console.log(variant);          
    },
  },
  actions: {
    step: ({commit}, {step}) => {
      commit('SET_STEP', step)
    },
    selectCvVariant: ({commit}, {variant}) => {
      commit('SET_CV_VARIANT', variant)
    }
  },
  modules: {
  }
})
