// import { toast } from 'react-toastify';
import { DependencyContainer } from '../../Interfaces/DependencyContainer';
import { ClinicFeature } from '../../models/ClinicFeature';
import { DoctorFeature } from '../../models/DoctorFeature';


class HomePageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    getClinicFeatures = () : ClinicFeature[] => {
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
        // toast("On a chargé les getClinicFeatures")
        return result
      }


     getClinicSpecialities = () : DoctorFeature[] => {
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
      return result
    }


    getDoctors = async () => {
        const result  = await  this.dependencyContainer.doctorRepository.getDoctors();
        // toast("On a chargé la liste des docteurs")
        return result
      }

   

}

export default HomePageVM