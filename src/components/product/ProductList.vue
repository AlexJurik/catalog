<template>
  <div class="container">
    <div class="row row-cols-auto">
      <div class="col-sm" v-for="item in items" :key="item.message">
        <Product />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Product from "./Product.vue";
export default Vue.extend({
  name: "ProductList",
  components: { Product },
  data: () => {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }, { message: "Bar" }, { message: "Bar" }, { message: "Bar" }, { message: "Bar" }],
    };
  },
});
</script>