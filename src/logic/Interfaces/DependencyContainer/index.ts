import HttpAuthenticator from "../Authenticator/HttpAuthenticator";
import { IAuthenticator } from "../Authenticator/IAuthenticator";
import { LocalDataRepository } from "../LocalDataRepository";
import { InMemoryDoctorRepository } from "../Repository/InMemoryDoctorRepository";
import { IDoctorRepository } from "../Repository/IDoctorRepository";
import { HttpDoctorRepository } from "../Repository/HttpDoctorRepository";

class DependencyContainer{
    authenticator : IAuthenticator  ;
    localDataRepository : LocalDataRepository;
    doctorRepository : IDoctorRepository;
    
    constructor(){
        this.authenticator = new HttpAuthenticator()
        this.localDataRepository = new LocalDataRepository();
        this.doctorRepository = new HttpDoctorRepository()
    }

}

export {DependencyContainer}