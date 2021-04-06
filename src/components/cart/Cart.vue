<template>
  <div class="p-3 cart__container">
    <template v-if="cartProducts.length">
      <div
        class="row"
        v-for="(cartProduct, index) in cartProducts"
        :key="index"
      >
        <div class="pb-3 col-7 text-truncate">
          <span
            >{{ cartProduct.count }}
            <span class="m-1" style="opacity: 0.5">x</span>
          </span>
          <router-link :to="`/products/${cartProduct.product.id}`">{{
            cartProduct.product.title
          }}</router-link>
        </div>
        <div class="col-3">
          <span @click="productAction(cartProduct.product, 'minus')">
            <Icon class="cart__icon cart__margin" icon="minus-circle" />
          </span>
          <span @click="productAction(cartProduct.product, 'plus')">
            <Icon class="cart__icon" icon="plus-circle" />
          </span>
        </div>
        <div class="col-2">
          <span @click="productAction(cartProduct.product, 'remove')">
            <Icon class="cart__icon" icon="trash" />
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <span>No products in cart :(</span>
    </template>
  </div>
</template>

<script lang="ts">
import ProductInterface from "@/lib/product/interfaces";
import { CartActions } from "@/store/cart/actions";
import Vue from "vue";
import Icon from "../icon/Icon.vue";
import { CartInterface } from "./interfaces";
export default Vue.extend({
  name: "Cart",
  components: {
    Icon,
  },
  computed: {
    cartProducts: {
      get() {
        return this.$store.getters.getProductsInCart as CartInterface[];
      },
    },
  },
  methods: {
    productAction(
      product: ProductInterface,
      action: "plus" | "minus" | "remove"
    ) {
      switch (action) {
        case "plus":
          this.$store.dispatch(CartActions.ADD_PRODUCT, product);
          break;
        case "minus":
          this.$store.dispatch(CartActions.MINUS_PRODUCT, product);
          break;
        case "remove":
          this.$store.dispatch(CartActions.REMOVE_PRODUCT, product.id);
          break;
      }
    },
  },
});
</script>

<style lang="scss">
@import "../../../scss/variables.scss";
.cart__container {
  width: 400px;
}

.cart__icon {
  cursor: pointer;
}

.cart__margin {
  margin-right: $gutter;
}
</style>