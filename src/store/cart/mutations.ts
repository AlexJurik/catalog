import ProductInterface from "@/lib/product/interfaces";
import { MutationTree } from "vuex";
import { CartState } from "./interfaces";

export enum CartMutations {
    ADD_PRODUCT = '[CART] ADD_PRODUCT',
    REMOVE_PRODUCT = '[CART] REMOVE_PRODUCT',
    MINUS_PRODUCT = '[CART] MINUS_PRODUCT',
}

export const mutations: MutationTree<CartState> = {
    [CartMutations.ADD_PRODUCT](state: CartState, payload: ProductInterface) {
        const idx = state.products.findIndex(
            (item) => item.product.id === payload.id
        );
        if (idx !== -1) {
            state.products[idx].count++;
        } else {
            state.products.push({ count: 1, product: payload });
        }
    },
    [CartMutations.MINUS_PRODUCT](state: CartState, payload: ProductInterface) {
        const idx = state.products.findIndex(
            (item) => item.product.id === payload.id
        );
        if (idx !== -1) {
            if (state.products[idx].count === 1) {
                state.products.splice(idx, 1);
            } else {
                state.products[idx].count--;
            }
        }
    },
    [CartMutations.REMOVE_PRODUCT](state: CartState, id: number) {
        const idxToRemove = state.products.findIndex((item) => item.product.id === id);
        if (idxToRemove !== -1) {
            state.products.splice(idxToRemove, 1);
        }
    }
}
