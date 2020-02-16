import { combineReducers, createStore, Store, Reducer } from "../../../node_modules/redux";
import { IState } from "./IState";
import { initialStoreState } from "./initialState";
import { getReducers } from "./GetReducers";

export function setupStore(initialState: IState = initialStoreState()) : Readonly<Store<IState>> {
    const reducer: Reducer<{}> = combineReducers(getReducers());
    return createStore(reducer, initialState) as Store<IState>;
}