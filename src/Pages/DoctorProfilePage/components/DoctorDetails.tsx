
import { Doctor } from '../../../logic/models/Doctor'
import TabContent from './TabContent'
import TabMenu from './TabMenu'

function DoctorDetails({doctor} : {doctor : Doctor}) {
    return (
        <div className="card">
        <div className="card-body pt-0">
          <TabMenu />
          <TabContent doctor={doctor} />
        </div>
      </div>
    )
}

export default DoctorDetails
