import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import { IChatRepository } from "./IChatRepository";
const user : User = {
    email: "richard.bathiebo@gmail.com",
    gender: "Male",
    first_name: "Richard",
    last_name: "Bathiebo",
    profile_pic: "https://redux-toolkit.js.org/img/redux.svg",
    user_id: 1
}
const user2 : User = {
    email: "richard.bathiebo@gmail.com",
    gender: "Male",
    first_name: "Cristine",
    last_name: "Nikita",
    profile_pic: "http://localhost:3000/assets/img/logo.png",
    user_id: 2
}


class InMemoryChatRepository implements IChatRepository{
    saveMessage(message: string): Promise<void> {
        console.log("message");
        const promise1 = new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 300);
        });
        return promise1
        
    }
    getContacts(): Promise<Contact[]> {
       const data : Contact[] = [
           {
               user,
               lastMessage : {
                   user,
                   content: "Le contenu",
                   createdAt: "8H09"
               }

           },
           {
            user:user2,
            lastMessage : {
                user,
                content: "Le contenu",
                createdAt: "8H09"
            }
        }
       ]

        const promise1 = new Promise<Contact[]>((resolve, reject) => {
            setTimeout(() => {
              resolve(data);
            }, 300);
        });
        return promise1
    }

    getContactsMessages(contactId : number | string): Promise<Message[]> {
        
        const messageData : Message[] = [
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

export {InMemoryChatRepository}

