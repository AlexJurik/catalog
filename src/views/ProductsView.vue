<template>
  <div class="p-5">
    <ProductList :products="products" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import ProductList from "../components/product/ProductListComponent.vue";
import ProductInterface from "../lib/product/interfaces";
export default Vue.extend({
  name: "ProductsView",
  components: { ProductList },
  data() {
    return {
      products: [] as Array<ProductInterface>,
    };
  },
  async created() {
    console.log(process.env.API_URL);
    await axios.get("/products").then((response) => {
      this.products = Array.from(response.data);
      this.$emit("products", response.data);
    });
  },
});
</script>