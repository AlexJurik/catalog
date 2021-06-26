<template>
  <div
    v-if="images && images.length"
    id="productImageCarousel"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(image, index) in images"
        :key="index"
        type="button"
        data-bs-target="#productImageCarousel"
        :data-bs-slide-to="index"
        @click="switchImage(undefined, index)"
        :class="{ active: index === activeImageId }"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item"
        :class="{ active: index === activeImageId }"
      >
        <img
          :src="image.url"
          class="d-block img-fluid rounded"
          :class="{ 'w-100': !width, 'h-100': !height }"
          :width="width"
          :height="height"
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
      @click="switchImage('prev')"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#productImageCarousel"
      data-bs-slide="next"
      v-if="activeImageId !== images.length - 1"
      @click="switchImage('next')"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div v-else>
    <p class="mt-5">Obrázky neboli najdené</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ImageInterface from "../../lib/product/interfaces";
export default Vue.extend({
  name: "ImagesComponent",
  props: {
    images: {
      type: Array as PropType<Array<ImageInterface>>,
      default: () => [],
    },
    width: {
      type: Number,
      default: () => null,
    },
    height: {
      type: Number,
      default: () => null,
    },
  },
  data(): { activeImageId: number } {
    return {
      activeImageId: 0,
    };
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