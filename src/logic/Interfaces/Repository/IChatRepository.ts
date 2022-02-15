import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";

interface IChatRepository{
    getContacts() : Promise<Contact[]>
    getContactsMessages(contactId : string) : Promise<Message[]>
}

export type {IChatRepository}