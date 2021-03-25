<template>
  <div class="container p-5">
    <div class="col d-flex justify-content-center" v-if="!!product">
      <div class="mb-5">
        <img
          :src="'http://localhost:1337' + product.images[0].url"
          :alt="product.alternativeText"
          width="300"
          height="400"
          class="img-fluid rounded"
        />
      </div>
    </div>
    <a :href="'/'" class="btn btn-primary">Go back</a>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import axios from "axios";
import ProductInterface from "../lib/product/interfaces";
export default Vue.extend({
  name: "ProductView",
  data() {
    return {
      product: Object as PropType<ProductInterface>,
    };
  },
  async created() {
    await axios.get(`/products/${this.$route.params.id}`).then((response) => {
      this.product = response.data;
      this.$emit("products", response.data);
    });
  },
});
</script>