<template>
  <div class="p-5" v-if="!!product">
    <Icon
      class="position-fixed product-view__back"
      icon="arrow-left"
      :size="40"
      @click="goBack()"
    />

    <div class="m-auto mb-5 product-view__container">
      <ImagesComponent
        class="mb-5"
        :images="product.images"
        :width="600"
        :height="700"
      />
      <div class="d-flex justify-content-between mb-5">
        <div
          class="product-view__title"
          data-toggle="tooltip"
          :title="product.title"
        >
          <h3 class="text-truncate">
            {{ product.title }}
          </h3>
        </div>
        <h3>
          <strong class="text-muted">{{ product.price }} €</strong>
        </h3>
      </div>
      <template v-if="product.description">
        <h5 class="d-flex align-content-start">
          <strong>Description:</strong>
        </h5>
        <p class="d-flex align-content-start mb-5 product-view__desc">
          {{ product.description }}
        </p>
      </template>
      <template v-if="product.state">
        <h5 class="d-flex align-content-start"><strong>State:</strong></h5>
        &nbsp;
        <p class="d-flex align-content-start">{{ product.state }}</p>
      </template>
      <button class="btn btn-secondary btn-lg w-100" @click="addToCart()">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { RootActions } from "@/store/actions";
import { CartActions } from "@/store/cart/actions";
import Vue from "vue";
import ImagesComponent from "../components/images/ImagesComponent.vue";
export default Vue.extend({
  name: "ProductView",
  components: {
    ImagesComponent,
  },
  computed: {
    product: {
      get() {
        return this.$store.getters.getProduct(Number(this.$route.params.id));
      },
    },
  },
  mounted() {
    this.$store.dispatch(RootActions.LOAD_PRODUCTS);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    addToCart() {
      this.$store.dispatch(CartActions.ADD_PRODUCT, this.product);
    },
  },
});
</script>

<style lang="scss">
@import "../../scss/variables.scss";
.product-view__container {
  max-width: $gutter * 51;
}

.product-view__title {
  max-width: 80%;
}

.product-view__desc {
  text-align: left;
}

.product-view__back {
  cursor: pointer;
  top: 114px;
  left: 48px;
}
</style>