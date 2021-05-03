export const state = () => ({
  productCart: [],
});

export const mutations = {
  setCart(state, data) {
    state.productCart.push(data);
  },
};

export const actions = {
  triggerFunction(context, payload) {
     context.commit('setCart', payload)
   },
};


