import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";

interface IChatRepository{
    getContacts() : Promise<Doctor[]>
    getContactsMessages(contactId : string) : Promise<Message[]>
}

export type {IChatRepository}