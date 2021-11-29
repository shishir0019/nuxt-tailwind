export const state = () => ({
    announcement: null
  })
  
  export const mutations = {
    SET_ANNOUNCEMENT(state, message){
      state.announcement = message
    }
  }
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      const res = { body: [1,2,3] }
    commit('SET_ANNOUNCEMENT', res)
  }
}