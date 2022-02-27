import {formatImageFromBackend} from '../../../logic/helper/getImageFromBackend'
import { Doctor , DoctorFeature } from '../../../logic/models'

 function DoctorFeatureImage({feature} : {feature : DoctorFeature}) {
  return (
    <li>
      <a href={formatImageFromBackend(feature.image)} data-fancybox="gallery">
        <img src={formatImageFromBackend(feature.image)} alt="Feature" />
      </a>
    </li>
  )
}


function DoctorWidget({doctor} : {doctor : Doctor}) {

    return  ( <div className="card">
        <div className="card-body">
           <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <img src={formatImageFromBackend(doctor.user.profile_pic)} className="img-fluid" alt="User Image" />
                
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">Dr.  {doctor.user.last_name} {doctor.user.first_name}</h4>
                <p className="doc-speciality">{doctor.description}</p>
                <p className="doc-department"><img src="assets/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />{doctor.speciality}</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(35)</span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location"><i className="fas fa-map-marker-alt" /> {doctor.place} - <a href="">Get Directions</a></p>
                  <ul className="clinic-gallery">
                    {doctor.features.map((feature) => <DoctorFeatureImage feature={feature} /> )}
                  </ul>
                </div>
                <div className="clinic-services">
                  {doctor.features.map((feature) => feature.description && <span> {feature.description} </span> )}
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li><i className="far fa-thumbs-up" /> 99%</li>
                  <li><i className="far fa-comment" /> 35 Feedback</li>
                  <li><i className="fas fa-map-marker-alt" /> {doctor.place}</li>
                  <li><i className="far fa-money-bill-alt" /> ${doctor.amount_per_our} per hour </li>
                </ul>
              </div>
              <div className="doctor-action">
                <a href="" className="btn btn-white fav-btn">
                  <i className="far fa-bookmark" />
                </a>
                <a href="chat.html" className="btn btn-white msg-btn">
                  <i className="far fa-comment-alt" />
                </a>
                <a href="" className="btn btn-white call-btn" data-toggle="modal" data-target="#voice_call">
                  <i className="fas fa-phone" />
                </a>
                <a href="" className="btn btn-white call-btn" data-toggle="modal" data-target="#video_call">
                  <i className="fas fa-video" />
                </a>
              </div>
              <div className="clinic-booking">
                <a className="apt-btn" href="booking.html">Book Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>)
    
}

export default DoctorWidget
