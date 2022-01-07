import HttpAuthenticator from "../Authenticator/HttpAuthenticator";
import { IAuthenticator } from "../Authenticator/IAuthenticator";
import { LocalDataRepository } from "../LocalDataRepository";

class DependencyContainer{
    authenticator : IAuthenticator  ;
    localDataRepository : LocalDataRepository;
    
    constructor(){
        this.authenticator = new HttpAuthenticator()
        this.localDataRepository = new LocalDataRepository();
    }

}

export {DependencyContainer}