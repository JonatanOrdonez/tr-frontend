<template>
  <div class="RecentSearches">
    <a class="RecentSearches__title" id="popover-target-1">Recent searches</a>
    <b-popover target="popover-target-1" triggers="hover" placement="bottom">
      <p
        class="RecentSearches__search"
        v-for="(search, key) in $store.getters.searches"
        v-bind:key="key"
      >{{search.url}}</p>
    </b-popover>
  </div>
</template>

<script>
export default {
  name: "RecentSearches",
  components: {}
};
</script>

<style scoped lang="scss">
.RecentSearches {
  margin: 1% 0;
  box-sizing: border-box;
  &__title {
    color: #8e8d93;
    font-size: 80%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      color: #4e4e4e;
    }
  }

  &__search {
    margin: 0;
    color: #8e8d93;
    font-size: 80%;
  }
}
</style>