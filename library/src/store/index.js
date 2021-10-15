import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      data: {
        f_name:'',
        l_name:'',
        email:'',
        doc_type:'',
        doc_num:'',
        phone:'',
      },
      logged: false,
    }
  },
  getters: {
    userData: state => {
      return state.user.logged === true ? state.user.data : null
    }
  },
  mutations: {
    setLogged(state, logged) {
      state.user.logged = logged
      if (logged === false) {
        state.user.data.f_name = ''
        state.user.data.l_name = ''
        state.user.data.email = ''
        state.user.data.doc_type = ''
        state.user.data.doc_num = ''
        state.user.data.phone = ''
      }
    },

    setUserData(state, data) {
      state.user.data = data
    }
  },
  actions: {
  },
  modules: {
  }
})
