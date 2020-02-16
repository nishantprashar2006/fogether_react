import { IState } from "./IState";
import { Store } from "../../../node_modules/redux";

export  let store: Readonly<Store<IState>>;
export function getState(): Readonly<IState> { 
    return store.getState();
}

export function setStore(storeToSet: Readonly<Store<IState>>) {
    store = storeToSet;
}

export function dispatch(action: {type: string}): void {
    if(store !== undefined) {
        store.dispatch(action);
    }
}
