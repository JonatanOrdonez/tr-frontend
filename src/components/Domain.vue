<template>
  <div class="Domain" v-if="$store.getters.domain !== null">
    <b-card>
      <b-container>
        <b-row class="Row">
          <b-col cols="3" class="Row__title">Domain:</b-col>
          <b-col cols="9" class="Row__content">{{
            $store.getters.domain.url
          }}</b-col>
        </b-row>
        <b-row class="Row">
          <b-col cols="3" class="Row__title">Servers Changed:</b-col>
          <b-col cols="9" class="Row__content">{{
            $store.getters.domain.servers_changed
          }}</b-col>
        </b-row>
        <b-row class="Row">
          <b-col cols="3" class="Row__title">SSL Grade:</b-col>
          <b-col cols="9" class="Row__content">{{
            $store.getters.domain.ssl_grade
          }}</b-col>
        </b-row>
        <b-row class="Row">
          <b-col cols="3" class="Row__title">Previous SSL Grade:</b-col>
          <b-col cols="9" class="Row__content">{{
            $store.getters.domain.previous_ssl_grade
          }}</b-col>
        </b-row>
        <b-row class="Row">
          <b-col cols="3" class="Row__title">Logo:</b-col>
          <b-col cols="9" class="Row__content">
            <a :href="$store.getters.domain.logo" target="_blank">{{
              $store.getters.domain.logo
            }}</a>
          </b-col>
        </b-row>
        <b-row class="Row">
          <b-col cols="3" class="Row__title">Title:</b-col>
          <b-col cols="9" class="Row__content">{{
            $store.getters.domain.title
          }}</b-col>
        </b-row>
        <b-row class="Row">
          <b-col cols="3" class="Row__title">Is Down:</b-col>
          <b-col cols="9" class="Row__content">
            <a>{{ $store.getters.domain.is_down }}</a>
          </b-col>
        </b-row>
        <Servers :servers="$store.getters.domain.servers" />
      </b-container>
    </b-card>
  </div>
</template>

<script>
import Servers from "./Servers";

export default {
  name: "Domain",
  components: {
    Servers
  }
};
</script>

<style scoped lang="scss">
.Domain {
  margin: 2% 0;
}
.Row {
  padding: 1%;
  border-bottom: 1px solid #dfdfdf;
  &__title {
    margin: 0;
    padding: 0;
    font-size: 75%;
    font-weight: 600;
  }
  &__content {
    margin: 0;
    padding: 0;
    font-size: 75%;
  }
}
.Text {
}
</style>
