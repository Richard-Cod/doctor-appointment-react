import { DoctorAward } from "./DoctorAward";
import { DoctorEducation } from "./DoctorEducation";
import { DoctorFeature } from "./DoctorFeature";
import { DoctorServices } from "./DoctorServices";
import { DoctorSpecialization } from "./DoctorSpecialization";
import { DoctorWorkExperience } from "./DoctorWorkExperience";
import { User } from "./User";

interface Doctor{
    user : User,
    description : string;
    speciality  : string;
    amount_per_our  : string;
    min_amount  : string;
    max_amount  : string;
    place  : string;
    about  : string;

    created_at  : string;
    updated_at  : string;

    features : DoctorFeature[];

    educations : DoctorEducation[];
    awards : DoctorAward[];
    experiences : DoctorWorkExperience[];
    services : DoctorServices[];
    specializations : DoctorSpecialization[];

}

export type {Doctor}