<template>
  <div>
    <div
      v-if="showModal"
      class="modal-backdrop fade"
      :class="{ show: showModal }"
    ></div>
    <div
      class="modal fade"
      :class="{ show: showModal }"
      id="checkoutModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Contact us</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="hide()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="alert alert-warning" role="alert">
              You should copy urls of products and send us via
              <strong>Telegram</strong>
            </div>
            <div v-if="copied" class="alert alert-success" role="alert">
              Order copied :)
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Your order</label>
              <textarea
                class="form-control"
                id="orderTextarea"
                v-model="cartProducts"
                :rows="3"
                readonly
              ></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn btn-outline-primary" @click="copyOrder()">
                Copy
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="hide()"
            >
              Close
            </button>
            <a
              href="https://t.me/vladyslav_kolesnyk_sk/"
              target="_blank"
              class="btn btn-primary"
            >
              Redirect <Icon icon="box-arrow-up-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CartInterface } from "@/store/cart/interfaces";
import Vue from "vue";
import Icon from "../icon/Icon.vue";
export default Vue.extend({
  name: "CheckoutModal",
  components: {
    Icon,
  },
  computed: {
    cartProducts: {
      get() {
        let text = `Hi, I want to order this stuff: \n\n`;
        text = text.concat(
          ((this.$store.getters.getProductsInCart as CartInterface[]) || [])
            .map((item, idx) => {
              return `${idx + 1}. ${item.product.url} (${item.count}x) \n`;
            })
            .join("")
        );
        return text;
      },
    },
  },
  data() {
    return {
      showModal: false,
      copied: false,
    };
  },
  methods: {
    show() {
      $("body").addClass("modal-open");
      $("#checkoutModal").show();
      this.showModal = true;
    },
    hide() {
      $("body").removeClass("modal-open");
      $("#checkoutModal").hide();
      this.showModal = false;
    },
    copyOrder() {
      $("#orderTextarea").trigger("select");
    },
  },
  mounted() {
    $("#orderTextarea").on("select", () => {
      document.execCommand("copy");
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 3000);
    });
  },
});
</script>

<style lang="scss">
.modal-backdrop {
  opacity: 0.5;
}
</style>