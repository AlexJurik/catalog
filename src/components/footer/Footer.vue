<template>
  <footer class="footer">
    <div style="height: 2px" class="mx-15 border-bottom"></div>
    <div class="p-4">
      <h3>Contact</h3>
      <div class="d-flex justify-content-center m-2">
        <div class="mx-3">
          <a
            href="https://www.facebook.com/groups/973474723027172"
            target="_blank"
          >
            <img
              src="../../assets/icons/facebook.svg"
              width="24"
              height="24"
              alt="Instagram"
            />
          </a>
        </div>
        <div class="mx-3">
          <a href="https://instagram.com/" target="_blank">
            <img
              src="../../assets/icons/instagram.svg"
              width="24"
              height="24"
              alt="Instagram"
            />
          </a>
        </div>
        <div class="mx-3">
          <a href="mailto:alexander.jurik@outlook.com" target="_blank">
            <img
              src="../../assets/icons/envelope-fill.svg"
              width="24"
              height="24"
              alt="Mail"
            />
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="mx-3">
          <img
            src="../../assets/icons/telephone-fill.svg"
            width="24"
            height="24"
            alt="Telephone"
          />
        </div>
        <p>+421 950 000 000</p>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <span
          ><strong>Outdoorline store</strong> © 2021 All Rights Reserved.</span
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
});
</script>
