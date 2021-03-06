import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import { IChatRepository } from "./IChatRepository";

const patient : User = {
    email: "richard.bathiebo@gmail.com",
    gender: "Male",
    first_name: "patifirs",
    last_name: "patilast",
    profile_pic: "https://redux-toolkit.js.org/img/redux.svg",
    id: 2
}

const user : User = {
    email: "richard.bathiebo@gmail.com",
    gender: "Male",
    first_name: "Richard",
    last_name: "Bathiebo",
    profile_pic: "https://redux-toolkit.js.org/img/redux.svg",
    id: 1
}
const user2 : User = {
    email: "richard.bathiebo@gmail.com",
    gender: "Male",
    first_name: "Cristine",
    last_name: "Nikita",
    profile_pic: "http://localhost:3000/assets/img/logo.png",
    id: 3
}

const user5 : User = {
    email: "bema@gmail.com",
    gender: "Male",
    first_name: "Bema",
    last_name: "Sylla",
    profile_pic: "http://localhost:3000/assets/img/logo.png",
    id: 3
}


class InMemoryChatRepository implements IChatRepository{
    getDoctorContacts(): Promise<Contact[]> {
        const data : Contact[] = [
            {
                user:patient,
                lastMessage : {
                    id:0,
                    sender:user,
                    receiver:user,
                    senderID:user.id,
                    receiverID:user.id,
                    content: "Le contenu",
                    created_at: "8H09",
                    updated_at: "8H09",
                }
            },
        ]
 
         const promise1 = new Promise<Contact[]>((resolve, reject) => {
             setTimeout(() => {
               resolve(data);
             }, 300);
         });
         return promise1
    }
    messageData : Message[] = [
        {
            id:0,
            sender:user,
            receiver:user,
            senderID:user.id,
            receiverID:user.id,
            content: "Le contenu",
            created_at: "8H09",
            updated_at: "8H09",
        }
    ]

    saveMessage(message: Message): Promise<void> {
        console.log("message");
        this.messageData.push(message)
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
                   id:0,
                   sender:user,
                   receiver:user,
                   senderID:user.id,
                   receiverID:user.id,
                   content: "Le contenu",
                   created_at: "8H09",
                   updated_at: "8H09",
               }

           },
           {
            user:user2,
            lastMessage : {
                id:0,
                sender:user,
                receiver:user,
                senderID:user.id,
                receiverID:user.id,
                content: "Le contenu",
                created_at: "8H09",
                updated_at: "8H09",
            }
        },
        {
            user:user5,
            lastMessage : {
                id:0,
                sender:user,
                receiver:user,
                senderID:user.id,
                receiverID:user.id,
                content: "Le contenu",
                created_at: "8H09",
                updated_at: "8H09",
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
        
        const promise1 = new Promise<Message[]>((resolve, reject) => {
            setTimeout(() => {
              return resolve(this.messageData);
            }, 300);
        });

        return promise1
    }
}

export {InMemoryChatRepository}

