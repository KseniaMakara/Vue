import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import axObj from './axObj'
import heros from './heros'

import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    axObj,
    heros
  },
});
