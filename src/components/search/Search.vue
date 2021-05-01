<template>
  <div class="input-group">
    <span class="input-group-text">
      <Icon :size="24" icon="search" />
    </span>
    <input
      v-model="q"
      type="text"
      class="form-control"
      placeholder="Vyhľadať"
      aria-label="Vyhľadať"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Icon from "../icon/Icon.vue";
import { search } from "../../lib/utils/search";
export default Vue.extend({
  name: "NavBar",
  components: {
    Icon,
  },
  data(): { q: string; itemsCopy: Record<string, unknown>[] } {
    return {
      q: "",
      itemsCopy: [],
    };
  },
  props: {
    target: {
      type: Array as PropType<Record<string, unknown>[]>,
    },
    excludeKeys: {
      type: Array as PropType<Array<string>>,
    },
  },
  mounted() {
    this.itemsCopy = [...this.target];
  },
  watch: {
    q: function (value: string) {
      const filtered = search(this.target, this.excludeKeys, value);

      if (!this.q) {
        this.$emit("filtered", this.target);
        return;
      }

      if (filtered.length) {
        this.$emit("filtered", filtered);
      } else {
        this.$emit("filtered", []);
      }
    },
  },
});
</script>