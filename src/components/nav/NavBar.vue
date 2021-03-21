<template>
  <div class="sticky-top">
    <nav
      class="custom__navbar"
      :class="{ scrolled_navbar: scrolledDown === 1 }"
    >
      <div class="d-flex justify-content-between w-100">
        <router-link to="/" class="custom__navbar-brand"
          >Kolesnyk shop</router-link
        >
        <div class="d-flex align-items-center">
          <router-link to="/cart" type="button" class="btn btn-secondary"
            >Cart</router-link
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
    color: #1e6111;
  }
}
.scrolled_navbar {
  background-color: white;
  box-shadow: 0px -15px 30px black;
  transition: all 0.2s ease-in;
}
</style>