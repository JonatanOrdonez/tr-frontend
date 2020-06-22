<template>
  <div class="SearchBar">
    <b-form @submit="onSubmit">
      <div class="SearchBar__content">
        <Input
          :value="searchText"
          @onHandleChange="onChangeSearchText"
          placeholder="Ingrese la url que desea buscar..."
        />
        <b-button type="submit" variant="primary">Search</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Input from "./Input.vue";
import { fetchDomain } from "../services/apiService";

export default {
  name: "SearchBar",
  components: {
    Input
  },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (!this.$store.getters.loader.isLoading) {
        if (this.searchText == "") {
          this.$bvToast.toast(`You must enter a value in the search bar`, {
            title: `Warning`,
            autoHideDelay: 5000,
            variant: "warning",
            appendToast: true
          });
        } else {
          this.$store.commit("setLoading", {
            isLoading: true,
            message: "Procesando solicitud, espere un momento..."
          });
          this.$store.commit("setDomain", null);
          fetchDomain(this.searchText).then(
            data => {
              this.$store.commit("setLoading", {
                isLoading: false
              });
              this.$store.commit("setDomain", data);
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
              this.$store.commit("setDomain", null);
            }
          );
        }
      }
    },
    onChangeSearchText(text) {
      this.searchText = text;
    }
  }
};
</script>

<style scoped lang="scss">
.SearchBar {
  box-sizing: border-box;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
