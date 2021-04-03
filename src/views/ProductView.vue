<template>
  <div class="p-5" v-if="!!product">
    <img
      class="position-fixed product-view__back"
      src="../assets/icons/arrow-left.svg"
      width="40"
      height="40"
      alt="Go back"
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
      <button class="btn btn-primary btn-lg w-100">Add to cart</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import ProductInterface from "../lib/product/interfaces";
import ImagesComponent from "../components/images/ImagesComponent.vue";
export default Vue.extend({
  name: "ProductView",
  components: {
    ImagesComponent,
  },
  data(): { product?: ProductInterface } {
    return {
      product: undefined,
    };
  },
  async created() {
    await axios
      .get(`http://localhost:1337/products/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data as ProductInterface;
        this.$emit("products", response.data);
      });
  },
  methods: {
    goBack() {
      this.$router.push("/");
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