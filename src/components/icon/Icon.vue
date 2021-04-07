<template>
  <i :class="`bi bi-${icon}`" @click="$emit('on-click')" />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IconsType } from "./interfaces";
export default Vue.extend({
  name: "Icon",
  props: {
    icon: {
      type: String as PropType<IconsType>,
      required: true,
    },
    size: {
      type: Number as PropType<16 | 24>,
      default: 24,
    },
  },
});
</script>
