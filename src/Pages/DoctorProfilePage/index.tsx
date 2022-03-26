import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Doctor } from '../../logic/models';
import { DoctorProfilePageVM} from '../../logic/viewModels';
import { selectDoctorProfilePageVM } from '../../redux/viewmodels/viewmodels';
import ProfilLayout from '../../templates/layout/ProfilLayout';
import DoctorDetails from './components/DoctorDetails';
import DoctorWidget from './components/DoctorWidget';


function DoctorProfilePage() {
    const [doctor, setdoctor] = useState<Doctor>()
    const doctorProfilePageVM  =  useAppSelector(selectDoctorProfilePageVM)


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
