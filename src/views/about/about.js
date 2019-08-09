import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'About',
  data() {
    return {
      newLink: ""
    }
  },
  computed: {
    ...mapState([
      "title",
      "links"
    ]),
    ...mapGetters([
      "countLinks"
    ])
  }, 
  methods: {
    ...mapMutations([
      'ADD_LINK',
      'REMOVE_ALL'
    ]),
    ...mapActions([
      'removeAll'
    ]),
    addLink(){
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    reset(){
      if (this.countLinks === 0) {
        alert("No Data Available");
        return;
      }
      this.removeAll().then(() => {
        alert('All Data Removed Successfully')
      })
    }
  },
}