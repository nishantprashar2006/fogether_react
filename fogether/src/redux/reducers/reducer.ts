import { IUser } from "../domain/IUser";
import { IUserState } from "../stateInterfaces/IUserState";
import { getState } from "../store/Store";

export function getIUserState(): Readonly<IUserState> {
    return  {
        users: [{
            id : 2,
            name: 'Dikshit'
        }]
    }
}

function userReducer(state = getIUserState(), action: any)  {
    if(action.type == 'ADD_USER'){
        const users: Array<IUser> = state.users.concat(action.payload);
        const newstate = {
            ...state,
            users: users
        };
        return newstate;
    }

    return state;
};

export default userReducer;