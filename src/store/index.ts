import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './interfaces'
import cart from './cart/index';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    products: []
  },
  mutations,
  actions,
  getters,
  modules: { cart }
}

export default new Vuex.Store<RootState>(store)
