import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
const PostList = () => import('@/components/post-list/PostList')

export default {
  name: 'About',
  components: {
    PostList
  },
  data() {
    return {
      newLink: "",
      fontSize: 18
    }
  },
  computed: {
    ...mapState('about', [
      "title",
      "links"
    ]),
    ...mapGetters('about', [
      "countLinks"
    ])
  }, 
  methods: {
    ...mapMutations('about', [
      'addLink',
      'removeAllLinks'
    ]),
    ...mapActions('about', [
      'removeAll'
    ]),
    createLink(){
      let self = this
      if (self.newLink) {
        this.addLink(self.newLink)
        this.newLink = ''
      }
    },
    reset(){
      if (this.countLinks === 0) {
        alert("No Data Available");
        return;
      }
      this.removeAll().then(() => {
        alert('All Data Removed Successfully')
      })
    },
    increaseFontSize(){
      this.fontSize += 2
    },
    decreaseFontSize(){
      this.fontSize -= 2
    }
  },
}