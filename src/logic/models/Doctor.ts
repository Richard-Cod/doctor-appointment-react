import { DoctorAward } from "./DoctorAward";
import { DoctorEducation } from "./DoctorEducation";
import { DoctorFeature } from "./DoctorFeature";
import { DoctorLocation } from "./DoctorLocation";
import { DoctorReview } from "./DoctorReview";
import { DoctorServices } from "./DoctorServices";
import { DoctorSpecialization } from "./DoctorSpecialization";
import { DoctorWorkExperience } from "./DoctorWorkExperience";
import { OpenHour } from "./OpenHour";
import { User } from "./User";

interface Doctor{
    id : number,
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
    locations : DoctorLocation[];
    openHours : OpenHour | undefined;
    reviews : DoctorReview[] | undefined;


}

export type {Doctor}