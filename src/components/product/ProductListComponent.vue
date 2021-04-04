<template>
  <div class="container">
    <div v-if="products && products.length" class="row">
      <div
        class="col d-flex justify-content-center"
        v-for="product in products"
        :key="product.id"
      >
        <ProductComponent v-bind:product="product" />
      </div>
    </div>
    <div v-else>
      <span>No products in the list :(</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ProductComponent from "./ProductComponent.vue";
import ProductInteface from "../../lib/product/interfaces";
export default Vue.extend({
  name: "ProductListComponent",
  components: { ProductComponent },
  props: {
    products: {
      type: Array as PropType<Array<ProductInteface>>,
    },
  },
});
</script>