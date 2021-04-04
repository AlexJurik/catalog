<template>
  <div class="sticky-top">
    <nav
      class="custom__navbar"
      :class="{ scrolled_navbar: scrolledDown === 1 }"
    >
      <div class="d-flex justify-content-between w-100">
        <router-link to="/" class="custom__navbar-brand"
          >Outdoorline store</router-link
        >
        <div class="d-flex align-items-center">
          <router-link to="/cart" type="button" class="btn btn-secondary"
            >Cart
            <span class="badge badge-primary">{{
              productsInCart
            }}</span></router-link
          >
        </div>
      </div>
    </nav>
    <div
      v-if="scrolledDown !== 1"
      style="height: 2px"
      class="mx-15 border-top"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavBar",
  data: () => {
    return { scrolledDown: 0 };
  },
  computed: {
    productsInCart: {
      get() {
        return this.$store.getters.getProductsLength;
      },
    },
  },
  methods: {
    updateScroll() {
      this.scrolledDown = window.scrollY > 50 ? 1 : 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
});
</script>



<style lang="scss">
@import "../../../scss/variables.scss";
.custom__navbar {
  padding: $gutter $gutter * 3;
  transition: all 0.2s ease-in;
}
.custom__navbar-brand {
  font-size: $gutter * 4;
  font-family: Satisfy;
  color: black;
  cursor: pointer;
  &:hover {
    color: #1451ac;
    text-decoration: none;
  }
}
.scrolled_navbar {
  background-color: white;
  box-shadow: 0px -15px 30px black;
  transition: all 0.2s ease-in;
}
</style>