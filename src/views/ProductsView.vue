<template>
  <div class="p-5">
    <ProductListComponent :products="products" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import ProductListComponent from "../components/product/ProductListComponent.vue";
import ProductInterface from "../lib/product/interfaces";
export default Vue.extend({
  name: "ProductsView",
  components: { ProductListComponent },
  data() {
    return {
      products: [] as Array<ProductInterface>,
    };
  },
  async created() {
    await axios.get("http://localhost:1337/products").then((response) => {
      this.products = Array.from(response.data);
      this.$emit("products", response.data);
    });
  },
});
</script>