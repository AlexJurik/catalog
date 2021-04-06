import { RootState } from '../interfaces';
import { GetterTree } from "vuex";
import { CartState } from "./interfaces";

export const getters: GetterTree<CartState, RootState> = {
    getProductsInCart(state) {
        return state.products;
    },
    getProductsLength(state) {
        let count = 0;
        for (const product of state.products) {
            count += product.count;
        }
        return count;
    }
}