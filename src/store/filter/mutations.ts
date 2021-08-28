import { FilterState } from './interfaces';
import { MutationTree } from "vuex";

export enum FilterMutations {
    SHOW_FILTER = '[FILTER] SHOW_FILTER',
}

export const mutations: MutationTree<FilterState> = {
    [FilterMutations.SHOW_FILTER](state: FilterState, payload: boolean) {
        state.show = payload;
    },
}
