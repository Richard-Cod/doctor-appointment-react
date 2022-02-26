import { User } from "../../models/User";

interface LoginResult {
    access : string,
    refresh : string,
}

interface RegisterResult {
    email : string,
    id : number
}

interface IAuthenticator{
    login(email:string , password:string) : Promise<LoginResult>

    me() : Promise<User>

    loginWithGoogle() : void

    loginWithFacebook() : void

    register(email : string , password:string) : Promise<RegisterResult>

    registerWithGoogle() : void

    registerWithFacebook() : void

}

export  type {IAuthenticator , LoginResult , RegisterResult}