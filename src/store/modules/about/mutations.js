import { stat } from "fs";

export default {
  addLink: (state, link) => {
    state.links.push(link)
  },
  removeAllLinks: state => {
    state.links = []
  },
  removeLink: (state, index) => {
    state.links.splice(index, 1)
  }
}