import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signin: true,
    admin: {
      name: "nikita",
      pass: "1111"
    }
  },
  mutations: {
    checkdata(state) {
      state.signin = false;

    }
  },
  actions: {},
  modules: {}
});
