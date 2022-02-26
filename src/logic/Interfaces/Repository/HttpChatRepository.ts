import { AxiosError } from "axios";
import { toast } from "react-toastify";
import appConstants from "../../../constants/app";
import makeRequest from "../../helper/makeRequest";
import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import { DependencyContainer } from "../DependencyContainer";
import { IChatRepository } from "./IChatRepository";

class HttpChatRepository implements IChatRepository{

    async saveMessage(message: Message): Promise<void> {
        const token = localStorage.getItem(appConstants.ACCESS_TOKEN_KEY)
        
        console.log("bjbjbj ");
        console.log(message);
        
        const config = {
            method: 'post',url: 'api/pok/',headers: {"Authorization" : `JWT ${token}`},
            data: {content : message.content , "receiverId": message.receiverID}
        };

        const handleErrorReponse = (error : AxiosError) => {
        const data = error.response?.data
            if(data){
                console.log(data)
                toast(JSON.stringify(data))
            }
        }
    
        const result = await makeRequest(config , handleErrorReponse)
        return result
    }
    async getContacts(): Promise<Contact[]> {
        const token = localStorage.getItem(appConstants.ACCESS_TOKEN_KEY)
        
        const config = {method: 'get',url: 'api/chats/list_doctors_contacts',headers: {
            "Authorization" : `JWT ${token}`
        } };

        const handleErrorReponse = (error : AxiosError) => {
        const data = error.response?.data
            if(data){
                console.log(data)
                toast(JSON.stringify(data))
            }
        }
    
        const result : Contact[] = await makeRequest(config , handleErrorReponse)
        return result
    }

    async getContactsMessages(contactId : number | string): Promise<Message[]> {
        const token = localStorage.getItem(appConstants.ACCESS_TOKEN_KEY)
        
        const config = {method: 'get',url: 'api/chats/',headers: {
            "Authorization" : `JWT ${token}`
        } };

        const handleErrorReponse = (error : AxiosError) => {
        const data = error.response?.data
            if(data){
                console.log(data)
                toast(JSON.stringify(data))
            }
        }
    
        const result : Message[] = await makeRequest(config , handleErrorReponse)
        console.log(result);
        return result

    }
}

export {HttpChatRepository}

