import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { Module } from "vuex"
import { RootState } from "../interfaces"
import { FilterState } from './interfaces';

const state: FilterState = {
    show: false,
}

const filter: Module<FilterState, RootState> = {
    state,
    getters,
    mutations,
    actions,
}

export default filter;