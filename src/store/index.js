import Vue from 'vue'
import Vuex from 'vuex'
import { templates } from './templates'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCv: 1,
    domain: {},
    step: null,
    personal: null,
    workHistory: [],
    education: [],
    skills: [],
    languages: [],
    motherLang: {},
    interests: [],
    licenses: [],
    accomplishments: '',
    previewHeight: 500,
    templates:templates
  },
  mutations: {
    SET_CV_TEMPLATE: (state, payload) => {
      state.selectedCv = payload
    },
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
    SET_MOTHER_LANGUAGES: (state, {lang}) => {
      state.motherLang = lang
    },
    SET_INTERESTS: (state, {interests}) => {
      state.interests = interests
    },
    SET_LICENSES: (state, {licenses}) => {
      state.licenses = licenses
    },
    SET_ACCOMP: (state, {accomp}) => {
      state.accomplishments = accomp
    },
    SET_PREVIEW_HEIGHT: (state, {height}) => {
      state.previewHeight = height
    },
    SET_DOMAIN: (state, payload) => {
      state.domain = payload
    },
    
  },
  actions: {
    selectCv: ({commit}, {payload}) => {
      commit('SET_CV_TEMPLATE', payload)
    },
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
    saveMotherLanguages: ({commit}, {lang}) => {
      commit('SET_MOTHER_LANGUAGES', {lang})
    },
    saveInterests: ({commit}, {interests}) => {
      commit('SET_INTERESTS', {interests})
    },
    saveLicenses: ({commit}, {licenses}) => {
      commit('SET_LICENSES', {licenses})
    },
    saveAccomp: ({commit}, {accomp}) => {
      commit('SET_ACCOMP', {accomp})
    },
    setPreviewHeight: ({commit}, {height}) => {
      commit('SET_PREVIEW_HEIGHT', {height})
    },
    setDomain: ({commit}, payload) => {
      console.log(payload);
      commit('SET_DOMAIN', payload)
    },
  },
  modules: {
  }
})
