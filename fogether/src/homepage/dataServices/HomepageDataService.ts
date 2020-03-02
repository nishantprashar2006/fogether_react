import axios from 'axios';
import { IUser } from '../../homepage/interfaces/IUser';

// use this file to add functions for api calls
export const createUser = async (user: Readonly<IUser>): Promise<Readonly<IUser>> => {
    const response = await createUserPostCall(user);
    return response;
}

function createUserPostCall(user: Readonly<IUser>): Promise<IUser> {
    return new Promise<Readonly<IUser>>((resolve, reject) => {
       axios.post("http://localhost:5000/user/signupUser", user).then(data => {
            console.log("HomepageDataService: create user executed successfully");
            resolve();
        }).catch((e: Error | undefined) => {
            console.log(`Error encountered while creating user`);
            reject(e);
        });
    });
}