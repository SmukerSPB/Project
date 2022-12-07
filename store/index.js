export const state = () => ({
  login: "",
  password: ""
})

export const mutations = {
  loginUser(state, payload) {
    state.login = payload.login
    state.password = payload.password
  }
}

export const actions = {
  async loginUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        // Работа с базой данных
        commit('loginUser', payload)
        resolve(payload)
      } catch (e) {
        reject(e)
      }
    })
  }
}

export const getters = {
  login(state) {
    return state.login
  },
  password(state) {
    return state.password
  },
  isLoggedIn(state) {
    return !!state.login
  }
}
