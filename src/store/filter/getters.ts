import { RootState } from './../interfaces';
import { FilterState } from './interfaces';
import { GetterTree } from 'vuex';

export const getters: GetterTree<FilterState, RootState> = {
    getFilterState(state) {
        return state.show;
    },
}