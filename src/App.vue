<template>
  <div id="app">
    <Loader />
    <div class="content">
      <img alt="Vue logo" class="logo" src="./assets/logo.jpg" />
      <SearchBar />
      <Domain />
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import Loader from "./components/Loader.vue";
import Domain from "./components/Domain.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    Loader,
    Domain
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content {
  padding: 0 25%;
  box-sizing: border-box;
}
.logo {
  text-align: center;
  margin: 4%;
  height: 12vh;
  width: 12vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
