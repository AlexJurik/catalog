<template>
  <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
    <!-- @TODO -->
    <img
      :src="'http://localhost:1337' + product.images[0].url"
      :alt="product.alternativeText"
      class="card-img-top rounded"
    />
    <div class="card-body">
      <h5 class="font-weight-bold card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <a :href="'/product/' + product.id" class="btn btn-primary">Open</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ProductInteface from "../../lib/product/interfaces";
export default Vue.extend({
  name: "ProductComponent",
  props: {
    product: {
      type: Object as PropType<ProductInteface>,
    },
  },
});
</script>