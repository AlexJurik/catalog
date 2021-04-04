<template>
  <div class="p-5">
    <ProductListComponent :products="products" />
  </div>
</template>

<script lang="ts">
import ProductInterface from "@/lib/product/interfaces";
import Vue from "vue";
import ProductListComponent from "../components/product/ProductListComponent.vue";
import { RootActions } from "../store/actions";
export default Vue.extend({
  name: "ProductListView",
  components: { ProductListComponent },
  computed: {
    products: {
      get(): ProductInterface[] {
        return this.$store.getters.getProducts;
      },
    },
  },
  mounted() {
    this.$store.dispatch(RootActions.LOAD_PRODUCTS);
  },
});
</script>