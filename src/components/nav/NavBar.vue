<template>
  <div class="sticky-top">
    <nav class="custom__navbar">
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
    <div style="height: 2px" class="mx-15 border-top"></div>
  </div>
</template>



<style lang="scss">
@import "../../../scss/variables.scss";
.custom__navbar {
  padding: $gutter * 3;
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
</style>