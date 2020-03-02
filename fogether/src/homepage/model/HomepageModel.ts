import { IUser } from "../interfaces/IUser";
import { dispatch } from "../../redux/store/Store";
import { actionCreators } from "../../redux/actions/action";
import { createUser } from "../dataServices/HomepageDataService";

export function addUser(email: string, phone: string, password: string):void {
    const user: Readonly<IUser> = {
        email: email,
        phone: phone,
        password: password
    }

    createUser(user).then((data) => {
        dispatch(actionCreators.addUser(data));
        console.log(user);
    });
}
