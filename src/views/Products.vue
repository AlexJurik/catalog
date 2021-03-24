<template>
  <div class="p-5">
    <ProductList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductList from "../components/product/ProductList.vue";
export default Vue.extend({
  components: { ProductList },
  mounted () {
   
  },
});
</script>