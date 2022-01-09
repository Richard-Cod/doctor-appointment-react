import { Doctor } from "./Doctor";
import { User } from "./User";

interface DoctorReview{
    reviewer : User,
    doctor : Doctor,
    createdAt : string,
    is_recommanding : boolean,
    description : string,
}

export type {DoctorReview}