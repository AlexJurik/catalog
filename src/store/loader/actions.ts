import { LoaderMutations } from './mutations';
import { RootState } from './../interfaces';
import { LoaderState } from './interfaces';
import { ActionTree } from 'vuex';

export enum LoaderActions {
    START_LOADER = 'startLoader',
    REMOVE_LOADER = 'removeLoader',
}

export const actions: ActionTree<LoaderState, RootState> = {
    [LoaderActions.START_LOADER](context) {
        context.commit(LoaderMutations.RUN_LOADER, true)
    },
    [LoaderActions.REMOVE_LOADER](context) {
        context.commit(LoaderMutations.RUN_LOADER, false)
    }
}