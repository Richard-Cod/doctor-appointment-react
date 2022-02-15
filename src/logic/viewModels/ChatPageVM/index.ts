import { DependencyContainer } from "../../Interfaces/DependencyContainer";

class ChatPageVM{
    dependencyContainer : DependencyContainer;
    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    async getContacts(){
       const data = await this.dependencyContainer.chatRepository.getContacts()
       return data
    }

    async getContactMessages(contactId : string){
        const data = await this.dependencyContainer.chatRepository.getContactsMessages(contactId)
        return data
    }
}

export default ChatPageVM