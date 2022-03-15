import { Appoinment } from "../../models";
import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import { IApptRepository } from "./IApptRepository";
import { IChatRepository } from "./IChatRepository";


const patient : User = {
    email: "richard.bathiebo@gmail.com",
    gender: "Male",
    first_name: "Cristine",
    last_name: "Nikita",
    profile_pic: "http://localhost:3000/assets/img/logo.png",
    id: 3
}




class InMemoryApptRepository implements IApptRepository{
    getDoctorAppointments(): Promise<Appoinment[]> {
        const data : Appoinment[] = [
            {
                id: 2,
                patient,
                date: new Date().toDateString(),
                purpose: "general",
                paid_amount: 234
            },
        ]
 
         const promise1 = new Promise<Appoinment[]>((resolve, reject) => {
             setTimeout(() => {
               resolve(data);
             }, 300);
         });
         return promise1
    }
  
}

export {InMemoryApptRepository}

