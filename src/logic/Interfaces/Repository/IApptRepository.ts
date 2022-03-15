import { Appoinment } from "../../models";
import { Contact } from "../../models/Contact";
import { Doctor } from "../../models/Doctor";
import { Message } from "../../models/Message";

interface IApptRepository{
    getDoctorAppointments() : Promise<Appoinment[]>
}

export type {IApptRepository}