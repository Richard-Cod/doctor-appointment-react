import { DependencyContainer } from "../../Interfaces/DependencyContainer";
import ChatPageVM from "./ChatPageVM";

class ChatWithDoctorPageVM extends ChatPageVM{
    async getContacts(){
       const data = await this.dependencyContainer.chatRepository.getContacts()
       return data
    }    
}

export default ChatWithDoctorPageVM