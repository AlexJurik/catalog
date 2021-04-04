import { RootState } from './interfaces';
import { GetterTree } from "vuex";

export const getters: GetterTree<RootState, RootState> = {
    getProducts: (state) => {
        return state.products;
    },
    getProduct: (state) => (id: number) => {
        return state.products.find((item) => item.id === id);
    }
}