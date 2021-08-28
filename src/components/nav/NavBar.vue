<template>
  <div class="sticky-top">
    <nav
      class="custom__navbar"
      :class="{ scrolled_navbar: scrolledDown === 1 }"
    >
      <div class="d-flex align-items-center me-auto">
        <router-link to="/" class="custom__navbar-brand ml-3"
          ><img src="../../assets/logo.png" alt="Logo" width="64" height="64"
        /></router-link>
      </div>
      <div v-if="windowWidth > 440" class="d-flex align-items-center m-3">
        <Social />
      </div>

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
      <Icon
        class="d-flex align-self-center ml-4"
        role="button"
        :icon="filterIcon"
        :size="28"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Filter"
        v-on:on-click="showFilterSidebar()"
      />
    </nav>
    <div
      v-if="scrolledDown !== 1"
      style="height: 2px"
      class="mx-15 border-top"
    ></div>
  </div>
</template>

<script lang="ts">
import { FilterActions } from "@/store/filter/actions";
import Vue from "vue";
import Cart from "../cart/Cart.vue";
import Icon from "../icon/Icon.vue";
import Social from "../social/Social.vue";

export default Vue.extend({
  name: "NavBar",
  components: {
    Cart,
    Icon,
    Social,
  },
  data: () => {
    return {
      scrolledDown: 0,
      showCart: false,
      showFilter: false,
      filterIcon: "filter",
      windowWidth: window.outerWidth,
    };
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
    showFilterSidebar() {
      this.showFilter = true;
      if (this.showFilter) {
        this.$store.dispatch(FilterActions.SHOW_FILTER);
      } else {
        this.filterIcon = "filter";
        this.$store.dispatch(FilterActions.HIDE_FILTER);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    window.addEventListener(
      "resize",
      () => (this.windowWidth = window.innerWidth)
    );
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

.text-dec_none:hover {
  text-decoration: none;
}
</style>