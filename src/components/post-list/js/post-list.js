import { mapActions } from 'vuex';

export default {
  name: 'PostList',
  props: {
    data: Object,
    fontSize: Number,
  },
  methods: {
    ...mapActions('about', [
      'deleteLinkFromIndexedDB',
    ]),
    deleteLink(index) {
      const self = this;
      const data = {
        "storeName": "posts",
        "key": self.data.text,
        "index": index
      }
      self.deleteLinkFromIndexedDB(data);
    },
  }
};
