<template>  
  <li class="postList" 
      @click="deleteLink(data.index)"
      :style="{ fontSize: `${fontSize}px` }">
    {{ data.text }}
  </li>
</template>

<script src="./js/post-list.js"></script>

<style scoped>
  .postList {
    padding: 10px;
  }
</style>