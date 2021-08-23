<template>
  <div v-if="loader" class="spinner spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Loader",
  computed: {
    loader: {
      get() {
        return this.$store.getters.getLoaderState;
      },
    },
  },
});
</script>

<style lang="scss">
@import "../../../scss/variables.scss";
.spinner {
  margin: $gutter * 20;
}
</style>