import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cv_variant: null,
    step: null,
    personal: null,
    workHistory: []
  },
  mutations: {
    SET_STEP: (state, step) => {
      state.step = step;
      localStorage.step = step;
    },
    SET_CV_VARIANT: (state, variant) => {
      state.cv_variant = variant
    },
    SET_PERSONAL: (state, {personal}) => {
      state.personal = personal
    },
    SET_WORK_HISTORY: (state, {workHistory}) => {
      state.workHistory = workHistory
    }
  },
  actions: {
    step: ({commit}, {step}) => {
      commit('SET_STEP', step)
    },
    selectCvVariant: ({commit}, {variant}) => {
      commit('SET_CV_VARIANT', variant)
    },
    savePersonal: ({commit}, {personal}) => {
      commit('SET_PERSONAL', {personal})
    },
    saveWorkHistory: ({commit}, {workHistory}) => {
      commit('SET_WORK_HISTORY', {workHistory})
    }
  },
  modules: {
  }
})
