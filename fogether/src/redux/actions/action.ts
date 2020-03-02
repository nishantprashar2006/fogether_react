import {ADD_USER} from '../constants/action-type'
import { IUser } from '../../homepage/interfaces/IUser';

export const actionCreators = {

    addUser(payload: IUser) {
        return { type: ADD_USER, payload }
    }

};