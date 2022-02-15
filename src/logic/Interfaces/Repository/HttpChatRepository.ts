import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import { IChatRepository } from "./IChatRepository";

class HttpChatRepository implements IChatRepository{
    getContacts(): Promise<Contact[]> {
       const data : Contact[] = []

        const promise1 = new Promise<Contact[]>((resolve, reject) => {
            setTimeout(() => {
              resolve(data);
            }, 300);
        });
        return promise1
    }

    getContactsMessages(contactId : string): Promise<Message[]> {
        const user : User = {
            email: "richard.bathiebo@gmail.com",
            gender: "Male",
            first_name: "Richard",
            last_name: "Bathiebo",
            profile_pic: "",
            user_id: 1
        }
        const messageData : Message[] = [
            {
                user,
                content : "Bonjour",
                createdAt : "8h01 AM",
            },
            {
                user,
                content : "ça va ?",
                createdAt : "8h01 AM",
            },
            {
                user,
                content : "Regarde ces photos",
                createdAt : "8h01 AM",
            },
        ]
        
        const promise1 = new Promise<Message[]>((resolve, reject) => {
            setTimeout(() => {
              return resolve(messageData);
            }, 300);
        });

        return promise1
    }
}

export {HttpChatRepository}

