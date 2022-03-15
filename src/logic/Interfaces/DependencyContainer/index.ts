import HttpAuthenticator from "../Authenticator/HttpAuthenticator";
import { IAuthenticator } from "../Authenticator/IAuthenticator";
import { LocalDataRepository } from "../LocalDataRepository";
import { IDoctorRepository } from "../Repository/IDoctorRepository";
import { HttpDoctorRepository } from "../Repository/HttpDoctorRepository";
import { IChatRepository } from "../Repository/IChatRepository";
import { InMemoryChatRepository } from "../Repository/InMemoryChatRepository";
import { InMemoryClinicInfosRepository } from "../Repository/InMemoryClinicInfosRepository";
import { IClinicInfosRepository } from "../Repository/IClinicInfosRepository";
import { HttpChatRepository } from "../Repository/HttpChatRepository";
import { InMemoryApptRepository } from "../Repository/InMemoryApptRepository";
import { IApptRepository } from "../Repository/IApptRepository";


class DependencyContainer{
    authenticator : IAuthenticator
    localDataRepository : LocalDataRepository
    doctorRepository : IDoctorRepository
    chatRepository: IChatRepository
    clinicInfosRepository: IClinicInfosRepository
    apptRepository : IApptRepository
    
    constructor(){
        this.authenticator = new HttpAuthenticator()
        this.localDataRepository = new LocalDataRepository()
        this.doctorRepository = new HttpDoctorRepository()
        this.chatRepository = new HttpChatRepository()
        this.clinicInfosRepository = new InMemoryClinicInfosRepository()
        this.apptRepository = new InMemoryApptRepository()
    }

}

export {DependencyContainer}