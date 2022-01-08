import { DoctorServices } from "../../../logic/models/DoctorServices"


function DoctorServiceComponent({service} : {service : DoctorServices}) {
    return (
        <li> {service.title} </li>
    )
}


export default DoctorServiceComponent
