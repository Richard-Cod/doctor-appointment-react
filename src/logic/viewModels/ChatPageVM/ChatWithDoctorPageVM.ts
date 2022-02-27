import { DependencyContainer } from "../../Interfaces/DependencyContainer";
import ChatPageVM from "./ChatPageVM";

class ChatWithDoctorPageVM extends ChatPageVM{
    async getPatientContacts(){
       const data = await this.dependencyContainer.chatRepository.getContacts()
       return data
    }    
}

export default ChatWithDoctorPageVM