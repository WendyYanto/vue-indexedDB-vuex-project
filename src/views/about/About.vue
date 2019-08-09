<template>
  <div class="about">
    <button @click="reset">Reset</button>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="link in links">{{link}}</li>
    </ul>
    <p>Total Current Link is {{countLinks}} </p>

    <form @submit.prevent="addLink">
      <input type="text" v-model="newLink" />
    </form>
  </div>
</template>

<script src="./about.js"></script>