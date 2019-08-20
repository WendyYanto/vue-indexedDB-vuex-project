import idbs from '@/idb'

export default {
  removeAll({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('removeLinks');
        resolve();
      }, 1500);
    });
  },
  async getAllLinksFromIndexedDB({ commit }, storeName) {
    const links = await idbs.findAll(storeName)
    const data = links.map(i => JSON.parse(i))
    commit('getAllLinks', data)
  },
  async addLinkToIndexedDB({ commit }, data) {
    await idbs.create(data.storeName, data.link)
    commit('addLink', data.link)
  }
};
