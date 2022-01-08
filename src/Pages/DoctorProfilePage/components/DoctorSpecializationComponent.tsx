import { DoctorSpecialization } from "../../../logic/models/DoctorSpecialization";



function DoctorSpecializationComponent({specialization} : {specialization : DoctorSpecialization}) {
    return (
        <li>{specialization.title}</li>	
    )
}


export default DoctorSpecializationComponent
