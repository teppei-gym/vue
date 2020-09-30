import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sex: '',
    birthday: '',
    q1: '',
    q2: '',
    q3: '',
    consultation: ''
  },
  getters: {
    getFormData(state) {
      return state
    }
  },
  mutations: {
    setBirthday(state, birthday) {
      state.birthday = birthday;
    },
    setSex(state, sex) {
      state.sex = sex;
    },
    setQuestionnaire(state, { q1, q2, q3 }) {
      state.q1 = q1;
      state.q2 = q2;
      state.q3 = q3;
    },
    setConsultation(state, consultation) {
      state.consultation = consultation;
    }
  }
})