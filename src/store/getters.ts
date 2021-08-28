import { RootState } from './interfaces';
import { GetterTree } from "vuex";

export const getters: GetterTree<RootState, RootState> = {
    getProducts: (state) => {
        return state.filteredProducts;
    },
    getProduct: (state) => (id: number) => {
        return state.products.find((item) => item.id === id);
    },
    getActiveFilter(state) {
        return state.activeFilter;
    }
}