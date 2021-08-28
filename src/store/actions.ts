import { LoaderActions } from './loader/actions';
import ProductInterface from '@/lib/product/interfaces';
import { RootMutations } from './mutations';
import { FilterEnum, RootState } from './interfaces';
import { ActionTree } from 'vuex';
import axios from "../plugins/axios";
import { formatProducts } from '@/utils/helpers';

export enum RootActions {
    LOAD_PRODUCTS = 'loadProducts',
    SET_FILTER = 'setFilter',
}

export const actions: ActionTree<RootState, RootState> = {
    async [RootActions.LOAD_PRODUCTS](context) {
        this.dispatch(LoaderActions.START_LOADER);
        await axios.get(`/products`).then((response) => {
            let formattedData = formatProducts([...response.data] as ProductInterface[]);
            formattedData = formattedData.sort((a) => {
                return a.giveaway ? -2 : a.isNew ? -1 : 1;
            });

            context.commit(RootMutations.SET_PRODUCTS, formattedData);
            this.dispatch(LoaderActions.REMOVE_LOADER);
        });
    },
    [RootActions.SET_FILTER]({ commit, state }, filterType: FilterEnum) {
        this.dispatch(LoaderActions.START_LOADER);
        const filteredProducts = filterType === FilterEnum.Vsetko ? [...state.products]
            : [...state.products].filter((product) => product.filterType === filterType);
        commit(RootMutations.SET_FILTER,
            { products: filteredProducts, activeFilter: filterType });
        this.dispatch(LoaderActions.REMOVE_LOADER);
    }
}