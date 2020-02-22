import { combineReducers, createStore, Store, Reducer } from "redux";
import { getReducers } from "../reducers/GetReducers";

export function setupStore() : Readonly<Store> {
    const reducer: Reducer<{}> = combineReducers(getReducers());
    return createStore(reducer) as Store;
}