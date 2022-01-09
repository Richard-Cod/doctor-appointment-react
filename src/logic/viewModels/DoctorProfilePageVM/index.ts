import { toast } from 'react-toastify';
import * as Yup from 'yup';
import appConstants from '../../../constants/app';
import { DependencyContainer } from '../../Interfaces/DependencyContainer';
import { LocalDataRepository } from '../../Interfaces/LocalDataRepository';
import { Doctor } from '../../models/Doctor';
import { DoctorReview } from '../../models/DoctorReview';


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


    getDoctorReviews = async (doctorId : number) : Promise<DoctorReview[]> => {
      const doctor  = await  this.dependencyContainer.doctorRepository.getDoctorReviews(doctorId);
      toast("Reviews du doctor obtenue")
      return doctor
    }
  
}

export default DoctorProfilePageVM