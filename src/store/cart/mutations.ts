import ProductInterface from "@/lib/product/interfaces";
import { MutationTree } from "vuex";
import { CartState } from "./interfaces";

export enum CartMutations {
    ADD_PRODUCT = '[CART] ADD_PRODUCT',
    REMOVE_PRODUCT = '[Cart] REMOVE_PRODUCT',
}

export const mutations: MutationTree<CartState> = {
    [CartMutations.ADD_PRODUCT](state: CartState, payload: ProductInterface) {
        state.products.push(payload);
    },
    [CartMutations.REMOVE_PRODUCT](state: CartState, id: number) {
        const idxToRemove = state.products.findIndex((item) => item.id === id);
        if (idxToRemove !== -1) {
            state.products = state.products.splice(idxToRemove);
        }
    }
}