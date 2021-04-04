import { RootState } from '../interfaces';
import { GetterTree } from "vuex";
import { CartState } from "./interfaces";

export const getters: GetterTree<CartState, RootState> = {
    getProductsInCart(state) {
        return state.products;
    },
    getProductsLength(state) {
        return state.products.length;
    }
}