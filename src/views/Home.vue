<template>
  <div>
    <h1>{{ compApitest }}</h1>
    <div class="video-container">
      <div  class="video" v-for="video in videos" :key="video.id">
        <router-link :to="{ path:'video', params: { id : video.id} }">
        <img :src="video.thumbnail" />
        <h3>{{ video.name }}</h3>
        <div v-html="video.description"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import { useStore } from "vuex";
import { computed } from 'vue';


export default {
  name: "Home",
  setup() {
    const store = useStore();
    const videos = computed( ()=> store.state.dummyCon); 
    const compApitest = "Composition api is workin fine";
    return { compApitest , videos };
  }
};
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: column-reverse;
}
.video{
  border: 1px solid black;
  padding: 10px;
  display: flex;
  margin : 5px;
}
img {
  max-height: 150px;
  width: 200px;
  padding: 3px;
}
</style>