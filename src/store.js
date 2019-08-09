import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "My Current Title",
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },
  getters:{
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_ALL: state => {
      state.links = []
    }
  },
  actions: {
    removeAll({commit}) {
      return new Promise( (resolve, reject) => {
        setTimeout( () => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  },
});
