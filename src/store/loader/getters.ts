import { RootState } from './../interfaces';
import { LoaderState } from './interfaces';
import { GetterTree } from 'vuex';

export const getters: GetterTree<LoaderState, RootState> = {
    getLoaderState(state) {
        return state.loader;
    },
}