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
            <h5 class="modal-title">Kontaktujte nás</h5>
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
              Zkopírujte text a pošlite nám cez
              <strong>Messenger</strong> alebo <strong>Instagram</strong>
            </div>
            <div v-if="isGiveaway" class="alert alert-success" role="alert">
              Gratulujeme! Po tejto objednávke sa automaticky zapojíte do našej
              súťaže ;)
            </div>
            <div v-if="copied" class="alert alert-success" role="alert">
              Objednávka bola skopirovaná :)
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Vaša objednávka</label>
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
                Kopirovať
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
              Zatvoriť
            </button>
            <div @click="cleanCart()">
              <a
                class="btn btn-primary"
                href="http://m.me/tatra.hills"
                target="_blank"
              >
                Presmerovať <Icon icon="facebook" />
              </a>
            </div>
            <div @click="cleanCart()">
              <a
                href="https://www.instagram.com/tatrahills"
                target="_blank"
                class="btn btn-primary"
              >
                Presmerovať <Icon icon="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CartActions } from "@/store/cart/actions";
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
        let text = `Ahojte, chcem si objednáť tieto produkty: \n\n`;
        let products =
          (this.$store.getters.getProductsInCart as CartInterface[]) || [];
        let giveaway = false;
        products.forEach((item, idx) => {
          text = text.concat(
            `${idx + 1}. ${item.product.url} (${item.count}x) \n`
          );

          if (item.product.giveaway) {
            giveaway = true;
          }
        });

        if (giveaway) {
          text = text.concat(`\nZúčastňujem sa vašej súťaží! ;)`);
        }

        return text;
      },
    },
  },
  data() {
    return {
      showModal: false,
      copied: false,
      isGiveaway: false,
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
    cleanCart() {
      this.hide();
      this.$store.dispatch(CartActions.CLEAN_CART);
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

.text-dec_none {
  text-decoration: none;
}
</style>