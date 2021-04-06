<template>
  <img
    :src="require(`../../assets/icons/${icon}.svg`)"
    :style="{ width: `${width}px`, height: `${height}px` }"
    :alt="alt"
  />
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
    width: {
      type: Number as PropType<16 | 24>,
      default: 24,
    },
    height: {
      type: Number as PropType<16 | 24>,
      default: 24,
    },
    alt: {
      type: String,
      default: "Img",
    },
  },
});
</script>