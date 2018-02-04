import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  total: 0
};

const getters = {
  getTotal(state) {
    return state.total;
  }
};

const mutations = {
  increment(state, payload) {
    state.count += payload.price
  
  },
  decrement(state, payload ) {
    state.count -= payload.price
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
})
