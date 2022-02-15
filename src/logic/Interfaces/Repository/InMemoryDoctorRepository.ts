import { Doctor } from "../../models/Doctor";
import { DoctorReview } from "../../models/DoctorReview";
import { User } from "../../models/User";
import { IDoctorRepository } from "./IDoctorRepository";

class InMemoryDoctorRepository implements IDoctorRepository{
    getDoctors(): Promise<Doctor[]> {
        throw new Error("Method not implemented.");
    }
    getDoctorReviews(doctorId: number): Promise<DoctorReview[]> {
        throw new Error("Method not implemented.");
    }
    getDoctor(id : number) : Promise<Doctor>{
        const user : User = {
            email: "richard.bathiebo@gmail.com",
            gender: "Male",
            first_name: "Richard",
            last_name: "Bathiebo",
            profile_pic: "",
            user_id: 1
        }
        const result : Doctor = {
            user: user,
            description: "",
            speciality: "Dentist - Basketteur",
            amount_per_our: "",
            min_amount: "",
            max_amount: "",
            place: "",
            about: "",
            created_at: "",
            updated_at: "",
            features: [],
            services: [],
            specializations: [],
            educations: [],
            awards: [],
            experiences: [],
            locations: [],
            openHours: undefined,
            reviews: undefined,
            id: 0
        }
        const promise1 = new Promise<Doctor>((resolve, reject) => {
            setTimeout(() => {
              resolve(result);
            }, 300);
          });
          return promise1
    }

}

export {InMemoryDoctorRepository}