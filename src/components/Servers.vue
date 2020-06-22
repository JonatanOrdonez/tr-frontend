<template>
  <div class="TableWrapper scrollbar-primary" v-if="servers.length > 0">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="ServerTable__head">Address</th>
          <th scope="col" class="ServerTable__head">SSL Grade</th>
          <th scope="col" class="ServerTable__head">Country</th>
          <th scope="col" class="ServerTable__head">Owner</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(server, key) in servers" v-bind:key="key">
          <td class="ServerTable__title">{{ server.address }}</td>
          <td class="ServerTable__title">{{ server.ssl_grade }}</td>
          <td class="ServerTable__title">{{ server.country }}</td>
          <td class="ServerTable__title">{{ server.owner }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Servers",
  props: {
    servers: Array
  }
};
</script>

<style scoped lang="scss">
.TableWrapper {
  overflow: auto;
  max-height: 25vh;
  max-width: 45vw;
}
.scrollbar-primary::-webkit-scrollbar {
  width: 7px;
  background-color: #f5f5f5;
}

.scrollbar-primary::-webkit-scrollbar-thumb {
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: #007bff;
}

.scrollbar-primary {
  scrollbar-color: #007bff #f5f5f5;
}

.ServerTable {
  &__head {
    margin: 0;
    padding: 1%;
    font-size: 75%;
    font-weight: 600;
  }
  &__title {
    margin: 0;
    padding: 1%;
    font-size: 75%;
  }
}
</style>
