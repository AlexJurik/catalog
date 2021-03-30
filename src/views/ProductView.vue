<template>
  <div class="container p-5">
    <div class="col d-flex justify-content-center" v-if="!!product">
      <div class="mb-5">
        <div
          v-if="product.images && product.images.length"
          id="productImageCarousel"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              type="button"
              data-bs-target="#productImageCarousel"
              :data-bs-slide-to="index"
              v-on:click="switchImage(undefined, index)"
              :class="{ active: index === activeImageId }"
            ></button>
          </div>
          <div
            v-if="product.images && product.images.length"
            class="carousel-inner"
          >
            <div
              v-for="(image, index) in product.images"
              :key="index"
              class="carousel-item"
              :class="{ active: index === activeImageId }"
            >
              <img
                :src="'http://localhost:1337' + image.url"
                class="d-block img-fluid rounded"
                width="400"
                height="500"
                :alt="image.alternativeText"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#productImageCarousel"
            data-bs-slide="prev"
            v-if="activeImageId > 0"
            v-on:click="switchImage('prev')"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#productImageCarousel"
            data-bs-slide="next"
            v-if="activeImageId !== product.images.length - 1"
            v-on:click="switchImage('next')"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <a :href="'/'" class="btn btn-primary">Go back</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import ProductInterface from "../lib/product/interfaces";
export default Vue.extend({
  name: "ProductView",
  data(): { product?: ProductInterface; activeImageId: number } {
    return {
      product: undefined,
      activeImageId: 0,
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
    switchImage(direction?: "prev" | "next", index?: number) {
      if (direction) {
        this.activeImageId =
          direction === "prev" ? --this.activeImageId : ++this.activeImageId;
      }

      if (index !== undefined && index >= 0) {
        this.activeImageId = index;
      }
    },
  },
});
</script>