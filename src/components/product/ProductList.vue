<template>
  <div class="container">
    <div class="row row-cols-auto">
      <div
        class="col d-flex justify-content-center"
        v-for="product in products"
        :key="product.id"
      >
        <Product v-bind:product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Product from "./Product.vue";
import ProductInteface from "./interfaces";
export default Vue.extend({
  name: "ProductList",
  components: { Product },
  props: {
    products: { type: Array as PropType<Array<ProductInteface>>, default() {
      return [{id: 1, title: 'The north face', description: 'Super stuff', size: 'xxl', state: 'new'}];
    }}, 
  },
});
</script>