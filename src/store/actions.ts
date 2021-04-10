import ProductInterface from '@/lib/product/interfaces';
import { RootMutations } from './mutations';
import { RootState } from './interfaces';
import { ActionTree } from 'vuex';
import axios from "axios";

export enum RootActions {
    LOAD_PRODUCTS = 'loadProducts'
}

export const actions: ActionTree<RootState, RootState> = {
    async [RootActions.LOAD_PRODUCTS](context) {
        await axios.get(`${process.env.VUE_APP_BASE_URL}/products`).then((response) => {
            const formattedData = [...response.data] as ProductInterface[];
            for (const product of formattedData) {
                product.url = `${process.env.VUE_APP_BASE_URL}/products/${product.id}`;
                if (product.images?.length) {
                    for (const image of product.images) {
                        image.url = `${process.env.VUE_APP_BASE_URL}${image.url}`;
                    }
                }
            }
            context.commit(RootMutations.SET_PRODUCTS, formattedData);
        });
    }
}