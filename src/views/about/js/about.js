import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';
import idbs from '@/idb/index'
const PostList = () => import('@/components/post-list/PostList');

export default {
  name: 'About',
  components: {
    PostList,
  },
  data() {
    return {
      link: '',
      fontSize: 18,
    };
  },
  computed: {
    ...mapState('about', [
      'title',
      'links',
    ]),
    ...mapGetters('about', [
      'countLinks',
    ]),
  },
  methods: {
    ...mapMutations('about', [
      'addLink',
      'removeAllLinks',
    ]),
    ...mapActions('about', [
      'removeAll',
    ]),
    async createLink() {
      const self = this;
      if (self.link) {
        await idbs.create('posts', self.link)
        this.addLink(self.link);
        this.link = '';
      }
    },
    async reset() {
      await idbs.deleteAll('posts')
      if (this.countLinks === 0) {
        alert('No Data Available');
        return;
      }
      this.removeAll().then(() => {
        alert('All Data Removed Successfully');
      });
    },
    increaseFontSize() {
      this.fontSize += 2;
    },
    decreaseFontSize() {
      this.fontSize -= 2;
    },
  },
};
