<template>
  <div class="sticky-top">
    <nav
      class="custom__navbar"
      :class="{ scrolled_navbar: scrolledDown === 1 }"
    >
      <div class="d-flex justify-content-between w-100">
        <router-link to="/" class="custom__navbar-brand ml-3"
          ><img src="../../assets/logo.png" alt="Logo" width="64" height="64"
        /></router-link>
        <div class="d-flex align-items-center">
          <div class="dropdown" :class="{ show: showCart }">
            <button
              type="button"
              class="btn btn-secondary"
              id="cartButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              :aria-expanded="showCart"
              @click="showCart = !showCart"
            >
              <div class="d-flex align-items-center">
                <Icon icon="cart" />
                <span class="nav__badge">{{ productsInCart }}</span>
              </div>
            </button>
            <div
              style="right: 0; left: auto"
              class="dropdown-menu dropdown-menu-right"
              :class="{ show: showCart }"
              aria-labelledby="cartButton"
            >
              <Cart />
            </div>
          </div>
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
import Cart from "../cart/Cart.vue";
import Icon from "../icon/Icon.vue";
export default Vue.extend({
  name: "NavBar",
  components: {
    Cart,
    Icon,
  },
  data: () => {
    return { scrolledDown: 0, showCart: false };
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
  display: flex;
  height: $gutter * 10;
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
.nav__badge {
  color: white;
  padding: 0 $gutter;
  font-size: 18px;
}
</style>