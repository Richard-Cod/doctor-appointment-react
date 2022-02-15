import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";
import { IChatRepository } from "./IChatRepository";

class ChatRepository implements IChatRepository{
    getContacts(): Promise<any> {
        const data = [
            {
                id : 1 ,
                username : "Sarah Wilson",
                lastMessage : "Hey , How are youffvfvfvdfvdfvdfvdfvdfvdvdfvfdvdvf ?",
                unseenMessageCount : 15,
                createdAt : "8h:01 PM",
                profilePic : "/assets/img/patients/patient1.jpg",
            },
            {
                id : 2,
                username : "Richard Bathiebo",
                lastMessage : "Salut comment ça va ?",
                unseenMessageCount : 15,
                createdAt : "8h:01 PM",
                profilePic : "/assets/img/patients/patient2.jpg",
            }
        ]

        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(data);
            }, 300);
        });
        return promise1
    }

    getContactsMessages(contactId : string): Promise<Message[]> {
        const messageData : Message[] = [
            {
                userId : 1,
                content : "Bonjour",
                createdAt : "8h01 AM",
            },
            {
                userId : 2,
                content : "ça va ?",
                createdAt : "8h01 AM",
            },
            {
                userId : 2,
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

export {ChatRepository}

