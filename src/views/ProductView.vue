<template>
  <div class="p-5" v-if="!!product">
    <Icon
      class="position-fixed product-view__back"
      icon="arrow-left"
      :size="40"
      v-on:on-click="goBack()"
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
          <h2 class="text-truncate">
            {{ product.title }}
          </h2>
        </div>
        <h3>
          <strong class="text-muted">{{ product.price }} €</strong>
        </h3>
      </div>
      <template v-if="product.description">
        <h4 class="d-flex align-content-start">
          <strong>Popis:</strong>
        </h4>
        <p
          class="d-flex align-content-start mb-3 product-view__desc"
          v-html="product.descriptionHtml"
        ></p>
      </template>
      <template v-if="product.state">
        <h4 class="d-flex align-content-start"><strong>Stav:</strong></h4>
        &nbsp;
        <p class="d-flex align-content-start">{{ product.state }}</p>
      </template>
      <template v-if="product.size">
        <h4 class="d-flex align-content-start"><strong>Veľkosť:</strong></h4>
        &nbsp;
        <p class="d-flex align-content-start">{{ product.size }}</p>
      </template>
      <button class="btn btn-secondary btn-lg w-100" @click="addToCart()">
        Pridať do košíka
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { RootActions } from "@/store/actions";
import { CartActions } from "@/store/cart/actions";
import Vue from "vue";
import ImagesComponent from "../components/images/ImagesComponent.vue";
import Icon from "../components/icon/Icon.vue";
export default Vue.extend({
  name: "ProductView",
  components: {
    ImagesComponent,
    Icon,
  },
  computed: {
    product: {
      get() {
        return this.$store.getters.getProduct(Number(this.$route.params.id));
      },
    },
  },
  mounted() {
    if (!this.product) {
      this.$store.dispatch(RootActions.LOAD_PRODUCTS);
    }
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