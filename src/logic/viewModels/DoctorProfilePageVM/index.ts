import { toast } from 'react-toastify';
import * as Yup from 'yup';
import appConstants from '../../../constants/app';
import { DependencyContainer } from '../../Interfaces/DependencyContainer';
import { LocalDataRepository } from '../../Interfaces/LocalDataRepository';
import { Doctor } from '../../models/Doctor';


class DoctorProfilePageVM{
    dependencyContainer : DependencyContainer;
    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }
    getDoctor = async (id : number) : Promise<Doctor> => {
      const doctor  = await  this.dependencyContainer.doctorRepository.getDoctor(id);
      toast("Informations du docteur obtenue")
      return doctor
    }
  
}

export default DoctorProfilePageVM