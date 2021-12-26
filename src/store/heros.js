import { getId } from './utils'

export default {
  namespaced: true,
  state: {
    taskList: [
      {
        id: 1,
        name: 't1111',
        age: 1,
        part: 123,
      },
      {
        id: 2,
        name: 't1111',
        age: 1,
        part: 123,
      },
      {
        id: 3,
        name: 't1111',
        age: 1,
        part: 123,
      },
    ],
  },
  getters: {
    getTaskList: ({ taskList }) => taskList,
  },
  mutations: {
    addNewTask(state, dataObj) {
      state.taskList.push({
        id: getId(),
        ...dataObj,
      })
    },
  },
  actions: {
    addTask({ commit }, data) {
      commit('addNewTask', data)
    },

    
  },
}
