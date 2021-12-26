<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <router-link class="text" to="/"> Main </router-link>
        <router-link class="text" to="/about"> CSS </router-link>
        <router-link class="text" to="/comp"> Components </router-link>

      </div>
    </div>
    <div>
      <router-view class="view"> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./assets/styles";
</style>
