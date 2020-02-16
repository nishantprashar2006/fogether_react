import {ADD_USER, GET_USERS} from '../constants/action-type'
import { User } from '../../domain/user';

export const actionCreators = {
    // constructor(){};

    addUser(payload: User) {
        return { type: ADD_USER, payload }
    }

    // getUser(){
    //     return { type: GET_USERS }
    // }
};