import { Doctor } from "../../models/Doctor";
import { DoctorReview } from "../../models/DoctorReview";
import { User } from "../../models/User";

interface IDoctorRepository{
    getDoctors() : Promise<Doctor[]>
    getDoctor(id : number) : Promise<Doctor>
    getDoctorReviews(doctorId : number) : Promise<DoctorReview[]>
}

export type {IDoctorRepository}