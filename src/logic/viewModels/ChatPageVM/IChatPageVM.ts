import { injectable } from "inversify";
import { DependencyContainer } from "../../Interfaces/DependencyContainer";
import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";

interface IChatPageVM{
    filterContactsByName(name : string , contactList : Contact[] , contactListFiltered : Contact[]  ) : Contact[]
    getContacts(): Promise<Contact[]>
    getContactMessages(contactId : number) : Promise<Message[]>
    boujoumboura():void
}

export default IChatPageVM