<template>
  <div
    class="filter__container offcanvas offcanvas-end"
    v-bind:class="{ show: showFilter }"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="filter"
    aria-labelledby="offcanvasScrollingLabel"
    :aria-modal="showFilter"
    :aria-hidden="!showFilter"
    :role="showFilter ? 'dialog' : null"
    :style="{ visibility: showFilter ? 'visible' : 'hidden' }"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filter</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        @click="hideFilter()"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="accordion" id="accordionMens">
        <div class="accordion-item">
          <h2
            v-on:click="toggleAccordion('mens')"
            class="accordion-header"
            id="headingOne"
          >
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              :aria-expanded="showMens"
              aria-controls="collapseOne"
              v-bind:class="{
                show: showMens,
                collapsed: showMens,
              }"
            >
              Muži
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse"
            v-bind:class="{
              collapse: showMens,
              collapsed: !showMens,
            }"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'MBundy' }"
                  @click="setFilter('MBundy')"
                >
                  Bundy
                </li>
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'MMikiny' }"
                  @click="setFilter('MMikiny')"
                >
                  Mikiny
                </li>
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'MTricka' }"
                  @click="setFilter('MTricka')"
                >
                  Trička
                </li>
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'MKrataseNohavice' }"
                  @click="setFilter('MKrataseNohavice')"
                >
                  Kraťase - nohavice
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2
            v-on:click="toggleAccordion('womens')"
            class="accordion-header"
            id="headingTwo"
          >
            <button
              class="accordion-button"
              v-bind:class="{ show: showWomens, collapsed: showWomens }"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              :aria-expanded="showWomens"
              aria-controls="collapseTwo"
            >
              Ženy
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse"
            v-bind:class="{
              collapse: showWomens,
              collapsed: !showWomens,
            }"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'ZBundy' }"
                  @click="setFilter('ZBundy')"
                >
                  Bundy
                </li>
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'ZMikiny' }"
                  @click="setFilter('ZMikiny')"
                >
                  Mikiny
                </li>
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'ZTricka' }"
                  @click="setFilter('ZTricka')"
                >
                  Trička
                </li>
                <li
                  class="list-group-item"
                  role="button"
                  :class="{ active: activeFilter === 'ZKrataseNohavice' }"
                  @click="setFilter('ZKrataseNohavice')"
                >
                  Kraťase - nohavice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul class="mt-3 list-group">
        <li
          class="list-group-item"
          role="button"
          :class="{ active: activeFilter === 'Prislusenstvo' }"
          @click="setFilter('Prislusenstvo')"
        >
          Príslušenstvo
        </li>
        <li
          class="list-group-item"
          role="button"
          :class="{ active: activeFilter === 'Obuv' }"
          @click="setFilter('Obuv')"
        >
          Obuv
        </li>
        <li
          class="list-group-item"
          role="button"
          :class="{ active: activeFilter === 'Ostatne' }"
          @click="setFilter('Ostatne')"
        >
          Ostatné
        </li>
      </ul>
      <div class="mt-2 flex justify-content-end">
        <a style="color: red" role="button" @click="setFilter('Vsetko')"
          >Zrušiť filter</a
        >
      </div>
    </div>
    <!-- <div class="offcanvas-footer">Napoveda</div> -->
  </div>
</template>

<script lang="ts">
import { FilterActions } from "@/store/filter/actions";
import { FilterSidebarDataInterface } from "./interfaces";
import { FilterEnum } from "../../store/interfaces";
import Vue from "vue";
import { RootActions } from "@/store/actions";
export default Vue.extend({
  name: "FilterSidebar",
  data: (): FilterSidebarDataInterface => {
    return {
      showMens: false,
      showWomens: false,
    };
  },
  computed: {
    showFilter: {
      get() {
        return this.$store.getters.getFilterState;
      },
    },
    activeFilter: {
      get() {
        return this.$store.getters.getActiveFilter;
      },
    },
  },
  methods: {
    hideFilter() {
      this.$store.dispatch(FilterActions.HIDE_FILTER);
    },
    toggleAccordion(type: "mens" | "womens") {
      if (type === "mens") {
        this.showMens = !this.showMens;
      }

      if (type === "womens") {
        this.showWomens = !this.showWomens;
      }
    },
    setFilter(filterType: FilterEnum) {
      if (filterType === this.activeFilter) {
        this.$store.dispatch(RootActions.SET_FILTER, FilterEnum.Vsetko);
      } else {
        this.$store.dispatch(RootActions.SET_FILTER, filterType);
      }
    },
  },
});
</script>

<style lang="scss">
.filter__container {
  max-width: 100%;
}
</style>