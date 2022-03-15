import { User } from "../../models";
import { IAuthenticator, LoginResult, RegisterResult } from "./IAuthenticator";


class NodejsAuthenticator implements IAuthenticator{
    login(email: string, password: string): Promise<LoginResult> {
        throw new Error("Method not implemented.");
    }
    me(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    loginWithGoogle(): void {
        throw new Error("Method not implemented.");
    }
    loginWithFacebook(): void {
        throw new Error("Method not implemented.");
    }
    register(email: string, password: string): Promise<RegisterResult> {
        throw new Error("Method not implemented.");
    }
    registerWithGoogle(): void {
        throw new Error("Method not implemented.");
    }
    registerWithFacebook(): void {
        throw new Error("Method not implemented.");
    }
    
}

export  {NodejsAuthenticator}