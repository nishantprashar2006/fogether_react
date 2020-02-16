import { useStore } from "react-redux";
import { IUser } from "../interfaces/IUser";

// import { Action } from "../../../node_modules/redux";
// import { User } from "../../domain/user";

// export class RootReducer{

//     initialState = {
//         users: []
//      };
//      state: any;
//     constructor(){
//         this.state = this.initialState
//     }

//     reducer(this.state, action: any){
//         if(action.type == 'ADD_USER'){
//             return Object.assign({}, this.state, {
//                 users: this.state.users.concat(action.payload)
//             });
//         }
//       return this.state;
//     }
// }

export interface IInitialState {
    users: ReadonlyArray<IUser>;
};

export function getInitialState(): Readonly<IInitialState> {
    return  {
        users: []
    }
}

function initialReducer(state = getInitialState(), action: any) {
    console.log(state);
    if(action.type == 'ADD_USER'){
        console.log(Object.assign({}, state, {
            users: state.users.concat(action.payload)
            
        }));
    }
    if(action.type == 'GET_USERS'){
    console.log(Object.assign({}, state, {
        users: state.users
        
    }));
}
    return state;
};

// export function getUsersFromStore() {
//     console.log(state.users);
// }

export default initialReducer;