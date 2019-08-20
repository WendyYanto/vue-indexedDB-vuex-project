<template>
  <div class="about">
    <button @click="reset">Reset</button>
    <button @click="increaseFontSize">Increase Font Size</button>
    <button @click="decreaseFontSize">Descrease Font Size</button>
    <h1>{{title}}</h1>
    <ul class="post-lists">
      <PostList
        v-for="(link, index) in links"
        :data="{
          'text': link,
          'index': index
        }"
        :key="index"
        :fontSize="fontSize"
      />
    </ul>
    <p>Total Current Link is {{countLinks}}</p>

    <form @submit.prevent="createLink">
      <input type="text" v-model="link" />
    </form>
    
  </div>
</template>

<script src="./js/about.js"></script>

<style scoped>
ul.post-lists {
  list-style-type: none;
}
</style>
