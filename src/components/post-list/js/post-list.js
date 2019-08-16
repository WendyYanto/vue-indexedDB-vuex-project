import { mapMutations } from 'vuex';

export default {
  name: 'PostList',
  props: {
    data: Object,
    fontSize: Number,
  },
  methods: {
    ...mapMutations('about', [
      'removeLinkByIndex',
    ]),
    deleteLink(index) {
      const self = this;
      self.removeLinkByIndex(index);
    },
  }
};
