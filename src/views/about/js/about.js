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
    ...mapActions('about', [
      'removeAll',
      'getAllLinksFromIndexedDB',
      'addLinkToIndexedDB'
    ]),
    createLink() {
      const self = this;
      if (self.link) {
        const data = {
          'storeName': 'posts',
          'link': self.link
        }
        this.addLinkToIndexedDB(data).then(() => {
          this.link = '';
        })
      }
    },
    reset() {
      if (this.countLinks === 0) {
        alert('No Data Available');
        return;
      }
      this.removeAll('posts').then(() => {
        alert('All Data Removed Successfully')
      });
    },
    increaseFontSize() {
      this.fontSize += 2;
    },
    decreaseFontSize() {
      this.fontSize -= 2;
    },
  },
  mounted() {
    this.getAllLinksFromIndexedDB('posts')
  }
};
