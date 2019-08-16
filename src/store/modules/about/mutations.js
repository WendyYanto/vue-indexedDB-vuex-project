export default {
  addLink: (state, link) => {
    state.links.push(link);
  },
  removeLinks: (state) => {
    state.links = [];
  },
  removeLinkByIndex: (state, index) => {
    state.links.splice(index, 1);
  },
  setTitle: (state, title) => {
    state.title = title
  }
};
