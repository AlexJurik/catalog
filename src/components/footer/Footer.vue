<template>
  <footer class="footer">
    <div style="height: 2px" class="mx-15 border-bottom"></div>
    <div class="p-4">
      <h3>Kontakt</h3>
      <div v-if="windowWidth < 440" class="d-flex justify-content-center m-3">
        <Social />
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
import Social from "../social/Social.vue";

export default Vue.extend({
  name: "Footer",
  components: {
    Icon,
    Social,
  },
  data: () => {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => (this.windowWidth = window.innerWidth)
    );
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