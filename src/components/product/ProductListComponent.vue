<template>
  <div class="container">
    <div v-if="products && products.length" class="row">
      <ProductComponent
        v-for="product in [...products].slice(0, offset)"
        :key="product.id"
        v-bind:product="product"
        class="col d-flex justify-content-center"
      />
    </div>
    <button
      v-if="showMoreButton"
      type="button"
      class="btn btn-outline-success mb-4"
      @click="showMore()"
    >
      Načítať viac
    </button>
    <div v-if="!products || !products.length" class="mb-5">
      <span style="color: red"
        >Nenašli sme žiadné produkty podľa vašich požiadaviek :(</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ProductComponent from "./ProductComponent.vue";
import ProductInteface from "../../lib/product/interfaces";
export default Vue.extend({
  name: "ProductListComponent",
  components: { ProductComponent },
  data: () => {
    return {
      offset: 12,
      showMoreButton: true,
    };
  },
  props: {
    products: {
      type: Array as PropType<Array<ProductInteface>>,
    },
  },
  methods: {
    showMore() {
      this.offset = this.offset * 2;
      if (this.offset >= this.products.length) {
        this.showMoreButton = false;
      }
    },
    checkShowMoreButton() {
      if (this.products.length < this.offset) {
        this.showMoreButton = false;
      }
    },
    setScrollListener() {
      if (window.innerHeight + 300 <= document.body.offsetHeight) {
        window.addEventListener("scroll", () => {
          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            this.showMore();
          }
        });
      }
    },
  },
  mounted() {
    this.checkShowMoreButton();
    // this.setScrollListener();
  },
});
</script>