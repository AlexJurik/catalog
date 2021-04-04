import { RootState } from './interfaces';
import ProductInterface from "@/lib/product/interfaces";
import { MutationTree } from "vuex";

export enum RootMutations {
    SET_PRODUCTS = '[ROOT] SET_PRODUCTS',
}

export const mutations: MutationTree<RootState> = {
    [RootMutations.SET_PRODUCTS](state: RootState, payload: ProductInterface[]) {
        state.products = Array.from(payload);
    },
}