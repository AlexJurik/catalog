import { LoaderState } from './interfaces';
import { MutationTree } from "vuex";

export enum LoaderMutations {
    RUN_LOADER = '[CART] RUN_LOADER',
}

export const mutations: MutationTree<LoaderState> = {
    [LoaderMutations.RUN_LOADER](state: LoaderState, payload: boolean) {
        state.loader = payload;
    },
}
