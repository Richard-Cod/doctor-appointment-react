import { DependencyContainer } from "../../Interfaces/DependencyContainer";
import { Doctor } from "../../models";

class VoiceCallPageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    async getDoctor(): Promise<Doctor>{
        const doc = await this.dependencyContainer.doctorRepository.getDoctor(1)
        return doc
    }

}

export {VoiceCallPageVM}