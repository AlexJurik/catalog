<template>
  <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
    <img src="../../assets/logo.png" class="card-img-top" />
    <div class="card-body">
      <h5 class="font-weight-bold card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <a href="#" class="btn btn-primary">Open</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ProductInteface from "./interfaces";
export default Vue.extend({
  name: "Product",
  props: {
    product: {
      type: Object as PropType<ProductInteface>,
    },
  },
});
</script>