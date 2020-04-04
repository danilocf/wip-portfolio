import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "../modules/Auth/Auth.store";
import KanbanStore from "../modules/Kanban/Kanban.store";

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
if (modules.includes("Kanban")) {
  options.modules.Kanban = KanbanStore;
}

export default new Vuex.Store(options);
