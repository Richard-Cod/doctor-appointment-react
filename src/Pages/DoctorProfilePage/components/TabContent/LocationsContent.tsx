import { DoctorLocation } from '../../../../logic/models'
import LocationListItem from './LocationListItem'

function LocationsContent({locations} : {locations : DoctorLocation[]}) {
    return (
        <div role="tabpanel" id="doc_locations" className="tab-pane fade">
                { locations.map((location) => <LocationListItem location={location} /> )}
        </div>
    )
}

export default LocationsContent
