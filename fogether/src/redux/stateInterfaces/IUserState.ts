import { IUser } from "../domain/IUser";

export interface IUserState {
    users: ReadonlyArray<IUser>;
};