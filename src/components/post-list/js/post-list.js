import {mapMutations} from 'vuex'

export default {
  name: "PostList", 
  props: {
    data: Object,
    fontSize: Number
  },
  methods: {
    ...mapMutations('about', [
      'removeLink'
    ]),
    deleteLink(index){
      let self = this
      self.removeLink(index)
    }
  },
}