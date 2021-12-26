import axios from "axios";
export default {
  namespaced: true,
  state: {
    information: null,
  },
  getters: {
    getInformation: ({ information }) => information,
  },
  mutations: {
    setInformation(state, data) {
      state.information = data;
    },
  },
  actions:{
      loadInformation({commit}){
        axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) =>  response.data)
        .then(data=> {
            commit('setInformation', data)
        })
      }
  }
}
