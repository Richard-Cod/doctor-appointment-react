import { DependencyContainer } from "../../Interfaces/DependencyContainer";
import { Appoinment, Doctor } from "../../models";

class DashboardPageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    async getDoctorAppointments(): Promise<Appoinment[]>{
        const result = await this.dependencyContainer.apptRepository.getDoctorAppointments()
        return result
    }



}

export {DashboardPageVM}