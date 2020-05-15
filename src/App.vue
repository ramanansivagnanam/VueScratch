<template>
  <div id="app">
    <div>
    <router-link to="/">Home</router-link> |
    <router-link to="about">About</router-link>
    <h1>{{ compApitest }}</h1>
    </div>
    <div v-for="video in videos" :key="video.name">
      <img :src="video.thumbnail">
        <h3>{{ video.name }} </h3>
       <div v-html="video.description"></div> 
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import dummyArr from './assets/dummy';

export default {
  name: 'App',
  components: {
  },
  setup(){
    const videos = dummyArr;
    const compApitest = 'Composition api is workin fine';
    return { compApitest, videos };
  }
}
</script>

<style>

</style>
