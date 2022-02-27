import { DoctorServices } from "../../../logic/models"


function DoctorServiceComponent({service} : {service : DoctorServices}) {
    return (
        <li> {service.title} </li>
    )
}


export default DoctorServiceComponent
