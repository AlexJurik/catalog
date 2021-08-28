<template>
  <div class="d-flex align-items-center">
    <a
      class="mx-3 text-dec_none"
      href="https://www.facebook.com/tatra.hills"
      target="_blank"
    >
      <Icon
        class="d-flex align-self-center"
        icon="facebook"
        :size="24"
        :color="'green'"
      />
    </a>
    <a
      class="mx-3 text-dec_none"
      href="https://www.instagram.com/tatrahills"
      target="_blank"
    >
      <Icon
        class="d-flex align-self-center"
        icon="instagram"
        :size="24"
        :color="'green'"
      />
    </a>
    <a
      class="mx-3 text-dec_none"
      href="mailto:tatrahill.sk@gmail.com"
      target="_blank"
    >
      <Icon
        class="d-flex align-self-center"
        icon="envelope-fill"
        :size="24"
        :color="'green'"
      />
    </a>
  </div>
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