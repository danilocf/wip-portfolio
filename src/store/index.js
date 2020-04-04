import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "../modules/Auth/Auth.store";

Vue.use(Vuex);

const options = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
};

const modules =
  process.env.VUE_APP_MODULES && JSON.parse(process.env.VUE_APP_MODULES);
if (modules.includes("Auth")) {
  options.modules.Auth = AuthStore;
}

export default new Vuex.Store(options);
