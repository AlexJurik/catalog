import ProductInterface from '@/lib/product/interfaces';
import { RootState } from '../interfaces';
import { ActionTree } from "vuex";
import { CartState } from "./interfaces";
import { CartMutations } from './mutations';

export enum CartActions {
    ADD_PRODUCT = 'addProductToCart',
    MINUS_PRODUCT = 'minusProductFromCart',
    REMOVE_PRODUCT = 'removeProductFromCart'
}

export const actions: ActionTree<CartState, RootState> = {
    [CartActions.ADD_PRODUCT](context, product: ProductInterface) {
        context.commit(CartMutations.ADD_PRODUCT, product)
    },
    [CartActions.MINUS_PRODUCT](context, product: ProductInterface) {
        context.commit(CartMutations.MINUS_PRODUCT, product)
    },
    [CartActions.REMOVE_PRODUCT](context, id: number) {
        context.commit(CartMutations.REMOVE_PRODUCT, id)
    }
}