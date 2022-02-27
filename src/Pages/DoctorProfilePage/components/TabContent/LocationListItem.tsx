import Rating from "../../../../components/shared/Rating"
import { DoctorLocation } from "../../../../logic/models"


 function LocationListItem({location} : {location : DoctorLocation}) {
   
    return (
        <div className="location-list">
        <div className="row">
          {/* Clinic Content */}
          <div className="col-md-6">
            <div className="clinic-content">
              <h4 className="clinic-name"><a href="#">{location.title}</a></h4>
              <p className="doc-speciality">{location.description}</p>
              <Rating rating={3} />
              <div className="clinic-details mb-0">
                <h5 className="clinic-direction"> <i className="fas fa-map-marker-alt" /> {location.place} <br /><a href="">Get Directions</a></h5>
                <ul>
                  <li>
                    <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery2">
                      <img src="assets/img/features/feature-01.jpg" alt="Feature Image" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Clinic Content */}
          {/* Clinic Timing */}
          <div className="col-md-4">
            <div className="clinic-timing">
              <div>
                <p className="timings-days">
                  <span> Mon - Sat </span>
                </p>
                <p className="timings-times">
                  <span>10:00 AM - 2:00 PM</span>
                  <span>4:00 PM - 9:00 PM</span>
                </p>
              </div>
              <div>
                <p className="timings-days">
                  <span>Sun</span>
                </p>
                <p className="timings-times">
                  <span>10:00 AM - 2:00 PM</span>
                </p>
              </div>
            </div>
          </div>
          {/* /Clinic Timing */}
          <div className="col-md-2">
            <div className="consult-price">
              ${location.price}
            </div>
          </div>
        </div>
      </div>
    )
}


export default LocationListItem