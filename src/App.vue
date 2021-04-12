<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/nav/NavBar.vue";
import Footer from "./components/footer/Footer.vue";

export default Vue.extend({
  components: {
    NavBar,
    Footer,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,200;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
#app {
  font-family: Josefin Sans, Avenir, Helvetica, Arial, sans-serif, Satisfy,
    cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 410px;
}
</style>
