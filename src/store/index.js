import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: null,
    personal: null,
    workHistory: [],
    education: [],
    skills: [],
    languages: [],
    interests: [],
    accomplishments: ''
  },
  mutations: {
    SET_STEP: (state, step) => {
      state.step = step;
      localStorage.step = step;
    },
    SET_PERSONAL: (state, {personal}) => {
      state.personal = personal
    },
    SET_WORK_HISTORY: (state, {workHistory}) => {
      state.workHistory = workHistory
    },
    SET_EDUCATION: (state, {education}) => {
      state.education = education;
    },
    SET_SKILLS: (state, {skills}) => {
      state.skills = skills;
    },
    SET_LANGUAGES: (state, {lang}) => {
      state.languages = lang
    },
    SET_INTERESTS: (state, {interests}) => {
      state.interests = interests
    },
    SET_ACCOMP: (state, {accomp}) => {
      state.accomplishments = accomp
    }
  },
  actions: {
    step: ({commit}, {step}) => {
      commit('SET_STEP', step)
    },
    savePersonal: ({commit}, {personal}) => {
      commit('SET_PERSONAL', {personal})
    },
    saveWorkHistory: ({commit}, {workHistory}) => {
      commit('SET_WORK_HISTORY', {workHistory})
    },
    saveEducation: ({commit}, {education}) => {
      commit('SET_EDUCATION', {education})
    },
    saveSkills: ({commit}, {skills}) => {
      commit('SET_SKILLS', {skills})
    },
    saveLanguages: ({commit}, {lang}) => {
      commit('SET_LANGUAGES', {lang})
    },
    saveInterests: ({commit}, {interests}) => {
      commit('SET_INTERESTS', {interests})
    },
    saveAccomp: ({commit}, {accomp}) => {
      commit('SET_ACCOMP', {accomp})
    }
  },
  modules: {
  }
})
