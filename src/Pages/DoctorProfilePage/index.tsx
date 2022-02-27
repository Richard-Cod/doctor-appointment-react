import { useEffect, useState } from 'react';
import { Doctor } from '../../logic/models/Doctor';
import { DoctorProfilePageVM} from '../../logic/viewModels';
import ProfilLayout from '../../templates/layout/ProfilLayout';
import DoctorDetails from './components/DoctorDetails';
import DoctorWidget from './components/DoctorWidget';

const doctorProfilePageVM  =  new DoctorProfilePageVM()

function DoctorProfilePage() {
    const [doctor, setdoctor] = useState<Doctor>()

    useEffect(() => {
        const asyncFunc = async () => {
        const result =await  doctorProfilePageVM.getDoctor(1)
        setdoctor(result)
        }
        asyncFunc()
    }, [])


    return (
        <ProfilLayout showSidebar={false} isDoctor title="Doctor profile" isPatient={false}>
            { doctor === undefined ? (
            <div>
                <div style={{width : 50 , height : 50}} className="spinner-border mr-5" role="status" />
                Chargement ...

            </div> ): 
            (<div>
            <DoctorWidget doctor={doctor} />
            <DoctorDetails doctor={doctor}  />
        </div>)
                }
        </ProfilLayout>
    )
}

export default DoctorProfilePage
