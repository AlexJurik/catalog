<template>
  <div class="product__wrapper">
    <div class="card shadow mb-5 rounded" style="width: 20rem">
      <ImagesComponent :images="product.images" />
      <div class="card-body d-flex flex-column justify-content-end">
        <h5 class="text-uppercase text-truncated card-title">
          <strong> {{ product.title }}</strong>
        </h5>
        <p class="card-text text-truncate">{{ product.short_description }}</p>
        <h4 v-if="product.isNew">
          <span class="badge-pill badge-danger">Nové</span>
        </h4>
        <h5 class="text-muted">
          <strong>{{ product.price }} €</strong>
        </h5>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-secondary"
          style="margin-right: 8px"
          @click="addToCart()"
        >
          <Icon icon="cart-plus" />
        </button>
        <router-link :to="'/products/' + product.id" class="btn btn-primary"
          >Viac</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CartActions } from "@/store/cart/actions";
import Vue, { PropType } from "vue";
import ProductInteface from "../../lib/product/interfaces";
import ImagesComponent from "../images/ImagesComponent.vue";
import Icon from "../icon/Icon.vue";
export default Vue.extend({
  name: "ProductComponent",
  components: {
    ImagesComponent,
    Icon,
  },
  props: {
    product: {
      type: Object as PropType<ProductInteface>,
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch(CartActions.ADD_PRODUCT, this.product);
    },
  },
});
</script>

<style lang="scss">
@import "../../../scss/variables.scss";
.product__wrapper {
  position: relative;
  left: 0px;
  top: 0px;
}

.product__badge {
  position: absolute;
  top: -$gutter * 2;
  left: $gutter * 22;
  z-index: 2;
}
</style>