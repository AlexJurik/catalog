<template>
  <div class="p-3">
    <template v-if="cartProducts.length">
      <div v-for="(product, index) in cartProducts" :key="index">
        <router-link :to="`/products/${product.id}`">{{
          product.title
        }}</router-link>
      </div>
    </template>
    <template v-else>
      <span>No products in cart :(</span>
    </template>
  </div>
</template>

<script lang="ts">
import ProductInterface from "@/lib/product/interfaces";
import Vue from "vue";
export default Vue.extend({
  name: "Cart",
  computed: {
    cartProducts: {
      get() {
        return this.$store.getters.getProductsInCart as ProductInterface[];
      },
    },
  },
});
</script>
