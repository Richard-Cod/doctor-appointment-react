import { DoctorSpecialization } from "../../../logic/models";



function DoctorSpecializationComponent({specialization} : {specialization : DoctorSpecialization}) {
    return (
        <li>{specialization.title}</li>	
    )
}


export default DoctorSpecializationComponent
