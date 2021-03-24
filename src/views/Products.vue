<template>
  <div class="p-5">
    <ProductList :products="products" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import ProductList from "../components/product/ProductList.vue";
import ProductInterface from "../components/product/interfaces";
export default Vue.extend({
  components: { ProductList },
  data() {
    return {
      products: [] as Array<ProductInterface>,
    };
  },
  created() {
    axios.get("http://localhost:1337/products").then((response) => {
      this.products = Array.from(response.data);
      this.$emit("products", response.data);
    });
  },
});
</script>