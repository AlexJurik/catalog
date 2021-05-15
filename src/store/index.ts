import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './interfaces'
import cart from './cart/index';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    products: []
  },
  mutations,
  actions,
  getters,
  modules: { cart },
  plugins: [createPersistedState()]
}

export default new Vuex.Store<RootState>(store)
