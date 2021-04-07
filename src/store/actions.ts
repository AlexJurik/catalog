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
        await axios.get("http://localhost:1337/products").then((response) => {
            const formattedData = [...response.data] as ProductInterface[];
            for (const product of formattedData) {
                product.url = `http://localhost:1337/products/${product.id}`;
            }
            context.commit(RootMutations.SET_PRODUCTS, formattedData);
        });
    }
}