export default {
  removeAll({commit}) {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        commit('removeAllLinks')
        resolve()
      }, 1500)
    })
  }
}