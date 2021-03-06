import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";

interface IChatRepository{
    getContacts() : Promise<Contact[]>
    getDoctorContacts() : Promise<Contact[]>
    getContactsMessages(contactId : number) : Promise<Message[]>
    saveMessage(message : Message) : Promise<void>
}

export type {IChatRepository}