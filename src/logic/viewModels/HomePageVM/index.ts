// import { toast } from 'react-toastify';
import { DependencyContainer } from '../../Interfaces/DependencyContainer';
import { ClinicFeature } from '../../models/ClinicFeature';
import { DoctorFeature } from '../../models/DoctorFeature';


class HomePageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    getClinicFeatures = async () : Promise<ClinicFeature[]> => {
        const result = await this.dependencyContainer.clinicInfosRepository.getAvailableFeatures()
        // toast("On a chargé les getClinicFeatures")
        return result
      }


     getClinicSpecialities = async() : Promise<DoctorFeature[]> => {
        const result = await this.dependencyContainer.clinicInfosRepository.getClinicSpecialities()
        // toast("On a chargé les getClinicSpecialities")
        return result

      
    }


    getDoctors = async () => {
        const result  = await  this.dependencyContainer.doctorRepository.getDoctors();
        // toast("On a chargé la liste des docteurs")
        return result
      }

   

}

export default HomePageVM