import actions from './action';
import getters from './getters';
import mutations from './mutations';

const state = {
  title: '',
  links: [],
};
const namespaced = true;

export default {
  state, getters, actions, mutations, namespaced,
};
