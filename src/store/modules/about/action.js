import idbs from '@/idb'

export default {
  async removeAll({ commit }, storeName) {
    await idbs.deleteAll(storeName)
    commit('removeLinks')
  },
  async getAllLinksFromIndexedDB({ commit }, storeName) {
    const links = await idbs.findAll(storeName)
    const data = links.map(i => JSON.parse(i))
    commit('getAllLinks', data)
  },
  async addLinkToIndexedDB({ commit }, data) {
    await idbs.create(data.storeName, data.link)
    commit('addLink', data.link)
  },
  async deleteLinkFromIndexedDB({ commit }, data) {
    await idbs.deleteByKey(data.storeName, data.key)
    commit('removeLinkByIndex', data.index)
  },
};
