import { Doctor } from "../../models/Doctor";
import { User } from "../../models/User";

interface IDoctorRepository{
    getDoctor(id : number) : Promise<Doctor>
}

export type {IDoctorRepository}