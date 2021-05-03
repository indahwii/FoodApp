export const state = () => ({
  detailProduct: [],
})

export const mutations = {
  setDetail(state, payload) {
    state.detailProduct = payload
  },
}

export const actions = {
  async getDetail({ commit }, payload) {
    await this.$axios.get(`/search.php?s=${payload}`).then((response) => {
      commit('setDetail', response.data.meals)
        console.log(response.data.meals)
    })
  },
}
