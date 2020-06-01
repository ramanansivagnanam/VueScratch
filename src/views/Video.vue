<template>
  <div>
      <h1>Video watch component</h1>
      <h1>{{ $route.params.id }}</h1>
      
        <h1>{{ video.name }}</h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from 'vue';
export default {
    name:'Videowatch',
    setup(){
      const store = useStore();
      const video = computed( ()=> store.state.dummyCon.find(vid => vid == this.$route.params.id));
      return { video }
    }
}
</script>

<style>

</style>