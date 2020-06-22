<template>
  <div id="app">
    <Loader />
    <div class="content">
      <img alt="Vue logo" class="logo" src="./assets/logo.jpg" />
      <SearchBar />
      <RecentSearches />
      <Domain />
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import Loader from "./components/Loader.vue";
import Domain from "./components/Domain.vue";
import RecentSearches from "./components/RecentSearches.vue";
import { fetchDomains } from "./services/apiService";

export default {
  name: "App",
  components: {
    SearchBar,
    Loader,
    Domain,
    RecentSearches
  },
  created() {
    this.$store.commit("setLoading", {
      isLoading: true,
      message: "Cargando información, espere un momento..."
    });
    fetchDomains().then(
      data => {
        this.$store.commit("setSearches", data.items);
        this.$store.commit("setLoading", {
          isLoading: false
        });
      },
      error => {
        this.$bvToast.toast(error.message, {
          title: `Error (${error.code})`,
          autoHideDelay: 5000,
          variant: "danger",
          appendToast: true
        });
        this.$store.commit("setLoading", {
          isLoading: false
        });
      }
    );
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
