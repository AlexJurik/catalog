<template>
  <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 20rem">
    <ImagesComponent :images="product.images" />
    <div class="card-body">
      <h5 class="text-uppercase text-truncated card-title">
        <strong> {{ product.title }}</strong>
      </h5>
      <p class="card-text text-truncate">{{ product.description }}</p>
      <h5 class="text-right text-muted">
        <strong>{{ product.price }} €</strong>
      </h5>
      <router-link :to="'/products/' + product.id" class="btn btn-primary"
        >Open</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ProductInteface from "../../lib/product/interfaces";
import ImagesComponent from "../images/ImagesComponent.vue";
export default Vue.extend({
  name: "ProductComponent",
  components: {
    ImagesComponent,
  },
  props: {
    product: {
      type: Object as PropType<ProductInteface>,
    },
  },
});
</script>