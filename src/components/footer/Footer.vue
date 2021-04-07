<template>
  <footer class="footer">
    <div style="height: 2px" class="mx-15 border-bottom"></div>
    <div class="p-4">
      <h3>Contact</h3>
      <div class="d-flex justify-content-center m-2">
        <div class="mx-3">
          <a
            href="https://www.facebook.com/groups/973474723027172"
            target="_blank"
          >
            <Icon icon="facebook" />
          </a>
        </div>
        <div class="mx-3">
          <a href="https://instagram.com/" target="_blank">
            <Icon icon="instagram" />
          </a>
        </div>
        <div class="mx-3">
          <a href="mailto:alexander.jurik@outlook.com" target="_blank">
            <Icon icon="envelope-fill" :size="24" />
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="mx-3">
          <Icon icon="telephone-fill" />
        </div>
        <p>+421 950 000 000</p>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <span
          ><strong>Outdoorline store</strong> © 2021 All Rights Reserved.</span
        >
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
