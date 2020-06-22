<template>
  <b-form-input
    :value="value"
    @keyup="$emit('onHandleChange', $event.target.value)"
    :placeholder="placeholder"
  ></b-form-input>
</template>

<script>
export default {
  name: "Input",
  components: {},
  props: {
    value: String,
    placeholder: String
  }
};
</script>
