import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flavor: "",
    loader: {
      isLoading: false,
      message: null
    },
    domain: null
  },
  mutations: {
    change(state, flavor) {
      state.flavor = flavor;
    },
    setLoading(state, payload) {
      state.loader = {
        isLoading: payload.isLoading,
        message: payload.message ? payload.message : null
      };
    },
    setDomain(state, domain) {
      state.domain = domain;
    }
  },
  getters: {
    flavor: state => state.flavor,
    loader: state => state.loader,
    domain: state => state.domain
  },
  actions: {},
  modules: {}
});
