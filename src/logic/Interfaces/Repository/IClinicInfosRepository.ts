import { ClinicFeature } from "../../models/ClinicFeature";
import { DoctorFeature } from "../../models/DoctorFeature";

interface IClinicInfosRepository{
    getAvailableFeatures() : Promise<ClinicFeature[]>
    getClinicSpecialities() : Promise<DoctorFeature[]>
}

export type {IClinicInfosRepository}