import { Doctor } from "../../../logic/models";
import BusinessHours from "./TabContent/BusinessHours";
import LocationsContent from "./TabContent/LocationsContent";
import OverviewContent from "./TabContent/OverviewContent";
import ReviewsContent from "./TabContent/ReviewsContent";



function TabContent({doctor} : {doctor : Doctor}) {
    return (
      <div className="tab-content pt-0">
              <OverviewContent doctor={doctor} />
              <LocationsContent locations={doctor.locations} />
              { doctor.reviews && <ReviewsContent doctorId={doctor.id}  />}
              {doctor.openHours && <BusinessHours openHours={doctor.openHours} />}
            </div>
    )
  }


  export default TabContent