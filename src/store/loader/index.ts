import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { Module } from "vuex"
import { RootState } from "../interfaces"
import { LoaderState } from './interfaces';

const state: LoaderState = {
    loader: false,
}

const loader: Module<LoaderState, RootState> = {
    state,
    getters,
    mutations,
    actions,
}

export default loader;