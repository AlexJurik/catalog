<template>
  <div class="container">
    <div v-if="products && products.length" class="row">
      <ProductComponent
        v-for="product in products"
        :key="product.id"
        v-bind:product="product"
        class="col d-flex justify-content-center"
      />
    </div>
    <div class="mb-3" v-else>
      <span>Nie sú žiadné produkty :(</span>
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