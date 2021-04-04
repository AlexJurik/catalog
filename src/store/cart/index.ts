import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { Module } from "vuex"
import { RootState } from "../interfaces"
import { CartState } from "./interfaces"

const state: CartState = {
    products: []
}

const cart: Module<CartState, RootState> = {
    state,
    getters,
    mutations,
    actions,
}

export default cart;