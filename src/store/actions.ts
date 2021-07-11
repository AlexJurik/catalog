import ProductInterface from '@/lib/product/interfaces';
import { RootMutations } from './mutations';
import { RootState } from './interfaces';
import { ActionTree } from 'vuex';
import axios from "../plugins/axios";
import { formatProducts } from '@/utils/helpers';

export enum RootActions {
    LOAD_PRODUCTS = 'loadProducts'
}

export const actions: ActionTree<RootState, RootState> = {
    async [RootActions.LOAD_PRODUCTS](context) {
        await axios.get(`/products`).then((response) => {
            let formattedData = formatProducts([...response.data] as ProductInterface[]);
            formattedData = formattedData.sort((a) => {
                return a.giveaway ? -2 : a.isNew ? -1 : 1;
            });

            context.commit(RootMutations.SET_PRODUCTS, formattedData);
        });
    }
}