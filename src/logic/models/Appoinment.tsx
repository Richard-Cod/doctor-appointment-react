import { User } from "./User"

interface Appoinment{
    id: number,
    patient : User,
    date : string,
    purpose : string,
    paid_amount: Number

}

export type {Appoinment}