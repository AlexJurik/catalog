<template>
  <i
    :class="`bi bi-${icon}`"
    :style="{ fontSize: `${size}px`, color: color }"
    @click="$emit('on-click')"
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
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: null,
    },
  },
});
</script>
