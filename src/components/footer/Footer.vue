<template>
  <footer class="footer">
    <div style="height: 2px" class="mx-15 border-bottom"></div>
    <div class="p-4">
      <h3>Kontakt</h3>
      <div class="d-flex justify-content-center m-2">
        <div class="mx-3">
          <a href="https://www.facebook.com/tatra.hills" target="_blank">
            <Icon icon="facebook" :size="24" />
          </a>
        </div>
        <!-- <div class="mx-3">
          <a href="https://instagram.com/" target="_blank">
            <Icon icon="instagram" :size="24" />
          </a>
        </div> -->
        <div class="mx-3">
          <a href="mailto:tatrahill.sk@gmail.com" target="_blank">
            <Icon icon="envelope-fill" :size="24" />
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="mx-3">
          <Icon icon="telephone-fill" :size="24" />
        </div>
        <p>+421 951 130 072</p>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <span><strong>Tatra hills</strong> © 2021 Všetky práva vyhradené.</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "../icon/Icon.vue";
export default Vue.extend({
  name: "Footer",
  components: {
    Icon,
  },
});
</script>

<style lang="scss">
@import "../../../scss/variables.scss";
footer {
  height: $gutter * 28;
  width: 100%;
}
</style>