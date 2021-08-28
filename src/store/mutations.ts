import { FilterEnum, RootState } from './interfaces';
import ProductInterface from "@/lib/product/interfaces";
import { MutationTree } from "vuex";

export enum RootMutations {
    SET_PRODUCTS = '[ROOT] SET_PRODUCTS',
    SET_FILTER = '[ROOT] SET_FILTER',
}

export const mutations: MutationTree<RootState> = {
    [RootMutations.SET_PRODUCTS](state: RootState, payload: ProductInterface[]) {
        state.products = Array.from(payload);
        state.filteredProducts = Array.from(payload);
    },
    [RootMutations.SET_FILTER](state: RootState, payload:
        { products: ProductInterface[], activeFilter: FilterEnum }) {
        state.filteredProducts = payload.products.length ? Array.from(payload.products) : [];
        state.activeFilter = payload.activeFilter;
    },
}