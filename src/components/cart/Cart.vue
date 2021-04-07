<template>
  <div class="p-3 cart__container">
    <template v-if="cartProducts && cartProducts.length">
      <div
        class="row pb-3 d-flex align-items-center"
        v-for="(cartProduct, index) in cartProducts"
        :key="index"
      >
        <div class="col-7 text-truncate">
          <span
            >{{ cartProduct.count }}
            <span class="m-1" style="opacity: 0.5">x</span>
          </span>
          <router-link :to="`/products/${cartProduct.product.id}`">{{
            cartProduct.product.title
          }}</router-link>
        </div>
        <div class="col-3">
          <Icon
            v-on:on-click="productAction(cartProduct.product, 'minus')"
            class="cart__icon cart__margin"
            :size="24"
            icon="dash-circle"
          />
          <Icon
            v-on:on-click="productAction(cartProduct.product, 'plus')"
            class="cart__icon"
            :size="24"
            icon="plus-circle"
          />
        </div>
        <div class="col-2">
          <Icon
            v-on:on-click="productAction(cartProduct.product, 'remove')"
            class="cart__icon"
            :size="24"
            icon="trash"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#checkoutModal"
          @click="$refs.checkoutModal.show()"
        >
          Contact us
        </button>
        <CheckoutModal ref="checkoutModal" />
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
import CheckoutModal from "../checkout/CheckoutModal.vue";
import { CartInterface } from "./interfaces";
export default Vue.extend({
  name: "Cart",
  components: {
    Icon,
    CheckoutModal,
  },
  computed: {
    cartProducts: {
      get() {
        return (this.$store.getters.getProductsInCart as CartInterface[]) || [];
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