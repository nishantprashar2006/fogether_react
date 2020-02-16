import { IInitialState, getInitialState } from "../reducers";
import { IState } from "./IState";

export function initialStoreState(): Readonly<IState> {
    const initialState: IInitialState = getInitialState();

    return {
        initialState: initialState
    };
}