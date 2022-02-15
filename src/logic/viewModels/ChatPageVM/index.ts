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

    filterContactsByName(name : string , contactList : Contact[] , contactListFiltered : Contact[]  ) : Contact[] {
        // console.log("Pas de name donc " , this.contacts);
        if (!name){
            return contactList
        }
        const data = contactListFiltered?.filter((value) => (value.user.first_name + value.user.last_name).includes(name))
        return data
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