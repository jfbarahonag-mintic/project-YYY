import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      logged: false,
      username: '',
    }
  },
  mutations: {
    setLogged(state, logged) {
      state.user.logged = logged
      if (logged === false) {
        state.user.username = ''
      }
    },

    setUsername(state, username) {
      state.user.username = username
    }
  },
  actions: {
  },
  modules: {
  }
})
