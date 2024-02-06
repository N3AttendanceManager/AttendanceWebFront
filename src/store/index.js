import { createStore } from 'vuex';



export default createStore({
  state: {
    username: ''
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    }
  },
  getters: {
    getUsername(state) {
      return state.username;
    }
  }
});
