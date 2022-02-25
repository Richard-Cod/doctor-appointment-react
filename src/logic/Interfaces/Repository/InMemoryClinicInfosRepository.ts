import { ClinicFeature } from "../../models/ClinicFeature";
import { DoctorFeature } from "../../models/DoctorFeature";
import { IClinicInfosRepository } from "./IClinicInfosRepository";


class InMemoryClinicInfosRepository implements IClinicInfosRepository{
    
    getAvailableFeatures(): Promise<ClinicFeature[]> {
        const result  = [
            {
                description : "Patient Ward",
                image : "assets/img/features/feature-01.jpg"
            },
            {
                description : "Test Room",
                image : "assets/img/features/feature-02.jpg"
            },
            {
                description : "ICU",
                image : "assets/img/features/feature-03.jpg"
            },
            {
                description : "Operation",
                image : "assets/img/features/feature-04.jpg"
            },
            {
                description : "Medical",
                image : "assets/img/features/feature-05.jpg"
            }
          ];

        const promise1 = new Promise<ClinicFeature[]>((resolve, reject) => {
            setTimeout(() => {
              return resolve(result);
            }, 300);
        });

        return promise1
    }

    getClinicSpecialities = () : Promise<DoctorFeature[]> => {
        const result  = [
          {
              description : "Urology",
              image : "assets/img/specialities/specialities-01.png"
          },
          {
              description : "Neurology",
              image : "assets/img/specialities/specialities-02.png"
          },
          {
              description : "Orthopedic",
              image : "assets/img/specialities/specialities-03.png"
          },
          {
              description : "Cardiologist",
              image : "assets/img/specialities/specialities-04.png"
          },
          {
              description : "Dentist",
              image : "assets/img/specialities/specialities-05.png"
          }
        ];
      //   toast("On a chargé les getClinicSpecialities")
        const promise1 = new Promise<DoctorFeature[]>((resolve, reject) => {
            setTimeout(() => {
            return resolve(result);
            }, 300);
        });

        return promise1
      }

}

export {InMemoryClinicInfosRepository}

