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
  min-width: 400px;

  background: linear-gradient(
    45deg,
    rgba(46, 46, 46, 0.6951155462184874) 0%,
    rgba(113, 113, 113, 0) 49%,
    rgba(37, 37, 37, 0.6895133053221288) 100%
  );
}
</style>
