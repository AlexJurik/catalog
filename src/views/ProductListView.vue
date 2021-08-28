<template>
  <div v-if="!loader" class="products__container p-5">
    <div class="products__search">
      <div class="products__search-container">
        <Search
          v-if="products.length"
          class="mb-5"
          :target="allProducts"
          :excludeKeys="excludeSearchKeys"
          @filtered="setFileteredProducts($event)"
        />
      </div>
    </div>
    <ProductListComponent :products="products" />
    <h4>
      Máte otázky? Kontaktujte nás cez
      <a href="http://m.me/tatra.hills" target="_blank"> Messenger </a>
    </h4>
  </div>
</template>

<script lang="ts">
import ProductInterface from "@/lib/product/interfaces";
import Vue from "vue";
import ProductListComponent from "../components/product/ProductListComponent.vue";
import { RootActions } from "../store/actions";
import Search from "../components/search/Search.vue";
export default Vue.extend({
  name: "ProductListView",
  components: { ProductListComponent, Search },
  computed: {
    productsFromStore: {
      get(): ProductInterface[] {
        return this.$store.getters.getProducts;
      },
    },
    loader: {
      get() {
        return this.$store.getters.getLoaderState;
      },
    },
  },
  data(): {
    allProducts: ProductInterface[];
    products: ProductInterface[];
    excludeSearchKeys: (keyof Pick<
      ProductInterface,
      "id" | "descriptionHtml" | "url" | "created_at" | "isNew" | "images"
    >)[];
  } {
    return {
      allProducts: [],
      products: [],
      excludeSearchKeys: [],
    };
  },
  created() {
    this.$store.dispatch(RootActions.LOAD_PRODUCTS);
  },
  methods: {
    setFileteredProducts(products: ProductInterface[]) {
      this.products = products;
    },
    setInternals(products: ProductInterface[]) {
      this.allProducts = products;
      this.products = products;
      this.excludeSearchKeys = [
        "id",
        "descriptionHtml",
        "url",
        "created_at",
        "isNew",
        "images",
      ];
    },
  },
  watch: {
    productsFromStore: function (products: ProductInterface[]) {
      this.setInternals(products);
    },
  },
});
</script>

<style lang="scss">
.products__search {
  display: flex;
  justify-content: center;
}

.products__search-container {
  width: 320px;
}
</style>