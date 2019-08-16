<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    ...mapMutations("about", ["setTitle"])
  },
  created: function() {
    this.setTitle("Hello World");
  }
};
</script>
