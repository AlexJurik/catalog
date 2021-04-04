import ProductInterface from '@/lib/product/interfaces';
import { RootState } from '../interfaces';
import { ActionTree } from "vuex";
import { CartState } from "./interfaces";
import { CartMutations } from './mutations';

export enum CartActions {
    ADD_PRODUCT = 'addProductToCart'
}

export const actions: ActionTree<CartState, RootState> = {
    [CartActions.ADD_PRODUCT](context, product: ProductInterface) {
        context.commit(CartMutations.ADD_PRODUCT, product)
    }
}