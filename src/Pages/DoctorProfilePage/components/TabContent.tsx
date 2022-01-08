import { Doctor } from "../../../logic/models/Doctor";
import BusinessHours from "./TabContent/BusinessHours";
import LocationsContent from "./TabContent/LocationsContent";
import OverviewContent from "./TabContent/OverviewContent";
import ReviewsContent from "./TabContent/ReviewsContent";



function TabContent({doctor} : {doctor : Doctor}) {
    return (
      <div className="tab-content pt-0">
              <OverviewContent doctor={doctor} />
              <LocationsContent />
              <ReviewsContent  />
              <BusinessHours />
            </div>
    )
  }


  export default TabContent