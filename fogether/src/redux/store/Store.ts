import { IState } from "../state/IState";
import { Store } from "redux";

export  let store: Readonly<Store>;
export function getState(): Readonly<IState> { 
    return store.getState();
}

export function setStore(storeToSet: Readonly<Store>) {
    store = storeToSet;
}

export function dispatch(action: {type: string}): void {
    if(store !== undefined) {
        store.dispatch(action);
    }
}
