import { useEffect, useState } from "react";
import Slider from "react-slick";
import Rating from "../../../components/shared/Rating";
import { formatImageFromBackend } from "../../../logic/helper/getImageFromBackend";
import { Doctor } from "../../../logic/models";
import {HomePageVM} from "../../../logic/viewModels";

const homePageVM = new HomePageVM()

function ProfileWidget({doctor} : {doctor : Doctor}) {
  return (
    <div className="profile-widget">
            <div className="doc-img">
              <a href="doctor-profile.html">
                <img style={{maxWidth : 300}} className="img-fluid mx-auto" alt="User Image" src={formatImageFromBackend(doctor.user.profile_pic)} />
              </a>
              <a href="" className="fav-btn">
                <i className="far fa-bookmark" />
              </a>
            </div>
            <div className="pro-content">
              <h3 className="title">
                <a href="doctor-profile.html">{doctor.user.first_name} {doctor.user.last_name}</a> 
                <i className="fas fa-check-circle verified" />
              </h3>
              <p className="speciality">{doctor.description}</p>
              <Rating rating={3} />
              <ul className="available-info">
                <li>
                  <i className="fas fa-map-marker-alt" /> {doctor.place}
                </li>
                <li>
                  <i className="far fa-clock" /> Available on Fri, 22 Mar
                </li>
                <li>
                  <i className="far fa-money-bill-alt" /> ${doctor.min_amount} - ${doctor.max_amount} 
                  <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                </li>
              </ul>
              <div className="row row-sm">
                <div className="col-6">
                  <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                </div>
                <div className="col-6">
                  <a href="booking.html" className="btn book-btn">Book Now</a>
                </div>
              </div>
            </div>
          </div>
  )
}

 function PartieSlider() {
   const [doctors, setdoctors] = useState<Doctor[]>()

   useEffect(() => {

    const asyncFunc =async () => {
      const result = await homePageVM.getDoctors();
      setdoctors(result)
    }

    asyncFunc()
     
   }, [])
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
        <Slider {...settings}>
          {doctors?.map((doctor , i) => {
            return <ProfileWidget key={i} doctor={doctor} />
          })}
        </Slider>
  )
}
 
 
 function PopularSection() {
    return (
        <section className="section section-doctor">
        <div className="container-fluid">

          
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header ">
                <h2>Book Our Doctor</h2>
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
              <div className="about-content">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>					
                <a href="">Read More..</a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="doctor-slider slider">
                {/* Doctor Widget */}
                <PartieSlider />
                {/* /Doctor Widget */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default PopularSection