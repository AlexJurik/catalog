import ProductInterface from '@/lib/product/interfaces';
import { RootMutations } from './mutations';
import { RootState } from './interfaces';
import { ActionTree } from 'vuex';
import axios from "axios";
import { Remarkable } from 'remarkable';

export enum RootActions {
    LOAD_PRODUCTS = 'loadProducts'
}

export const actions: ActionTree<RootState, RootState> = {
    async [RootActions.LOAD_PRODUCTS](context) {
        await axios.get(`${process.env.VUE_APP_BASE_URL}/products`).then((response) => {
            let formattedData = [...response.data] as ProductInterface[];
            for (const product of formattedData) {
                product.url = `${window.location.origin}/products/${product.id}`;
                const converter = new Remarkable({
                    html: true,
                    breaks: true,
                });
                product.descriptionHtml = converter.render(product.description);
                product.created_at = new Date(product.created_at);
                const today = new Date();
                if (
                    product.created_at >=
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3)
                ) {
                    product.isNew = true;
                }
                if (product.images?.length) {
                    for (const image of product.images) {
                        image.url = `${process.env.VUE_APP_BASE_URL}${image.url}`;
                    }
                }
            }

            formattedData = formattedData.sort((a) => {
                return a.isNew ? -1 : 1;
            });
            context.commit(RootMutations.SET_PRODUCTS, formattedData);
        });
    }
}