import { DependencyContainer } from "../../Interfaces/DependencyContainer";
import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";

class ChatPageVM{
    dependencyContainer : DependencyContainer;
    contacts : Contact[];
    
    constructor(){
        this.dependencyContainer =  new DependencyContainer()
        this.contacts = []
    }

    filterContactsByName(name : string , contactList : Contact[]) : Contact[] {
        // console.log("Pas de name donc " , this.contacts);
        if (!name){
            return contactList
        }
        const data = contactList?.filter((value) => (value.user.first_name.toUpperCase() + value.user.last_name.toUpperCase()).includes(name.toUpperCase()))
        return data
    }

    async getContacts(){
       const data = await this.dependencyContainer.chatRepository.getContacts()
       return data
    }

    async getContactMessages(contactId : number){
        const data = await this.dependencyContainer.chatRepository.getContactsMessages(contactId)
        return data
    }

    async saveMessage(message : string){
        const data = await this.dependencyContainer.chatRepository.saveMessage(message)
        // return data
     }


    
}

export default ChatPageVM