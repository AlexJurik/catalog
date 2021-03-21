<template>
  <div class="footer">
    <div style="height: 2px" class="mx-15 border-top"></div>
    <div class="footer__content">
      <h3>Contact</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
});
</script>


<style lang="scss">
@import "../../../scss/variables.scss";
.footer {
  padding: $gutter $gutter * 3;
}
.footer__content {
  padding: $gutter * 3;
}
</style>