import { FilterMutations } from './mutations';
import { RootState } from './../interfaces';
import { FilterState } from './interfaces';
import { ActionTree } from 'vuex';

export enum FilterActions {
    SHOW_FILTER = 'showFilter',
    HIDE_FILTER = 'hideFilter',
    SET_FILTER = 'setFilter',
}

export const actions: ActionTree<FilterState, RootState> = {
    [FilterActions.SHOW_FILTER](context) {
        context.commit(FilterMutations.SHOW_FILTER, true)
    },
    [FilterActions.HIDE_FILTER](context) {
        context.commit(FilterMutations.SHOW_FILTER, false)
    },
}