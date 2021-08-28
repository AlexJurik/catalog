import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { FilterEnum, RootState } from './interfaces'
import cart from './cart/index';
import loader from './loader/index';
import filter from './filter/index';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    products: [],
    filteredProducts: [],
    activeFilter: FilterEnum.Vsetko,
  },
  mutations,
  actions,
  getters,
  modules: { cart, loader, filter },
  plugins: [createPersistedState()]
}

export default new Vuex.Store<RootState>(store)
