<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>  |
      <router-link to="/contact">About</router-link>  |
      <router-link to="/video">Video watch</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
</style>
