<template>
  <div v-if="$store.getters.loader.isLoading === true">
    <div class="LoaderBackground"></div>
    <div class="Loader">
      <b-spinner
        class="Loader__spinner"
        variant="primary"
        label="Spinning"
      ></b-spinner>
      <p class="Loader__text" v-if="$store.getters.loader.message !== null">
        {{ $store.getters.loader.message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style scoped lang="scss">
.Loader {
  position: absolute;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  &__spinner {
    width: 5rem;
    height: 5rem;
  }
  &__text {
    margin-top: 1%;
    box-sizing: border-box;
    color: #8e8d93;
    font-weight: 500;
  }
}
</style>
