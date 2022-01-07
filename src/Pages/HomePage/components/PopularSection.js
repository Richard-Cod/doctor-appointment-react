import Slider from "react-slick";

 function PartieSlider() {
  const settings = {
    slidesToShow: 3,
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
          {[1,1,1,1,1].map((item) => {
            return <div className="profile-widget">
            <div className="doc-img">
              <a href="doctor-profile.html">
                <img className="img-fluid" alt="User Image" src="/assets/img/doctors/doctor-01.jpg" />
              </a>
              <a href="javascript:void(0)" className="fav-btn">
                <i className="far fa-bookmark" />
              </a>
            </div>
            <div className="pro-content">
              <h3 className="title">
                <a href="doctor-profile.html">Ruby Perrin</a> 
                <i className="fas fa-check-circle verified" />
              </h3>
              <p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <span className="d-inline-block average-rating">(17)</span>
              </div>
              <ul className="available-info">
                <li>
                  <i className="fas fa-map-marker-alt" /> Florida, USA
                </li>
                <li>
                  <i className="far fa-clock" /> Available on Fri, 22 Mar
                </li>
                <li>
                  <i className="far fa-money-bill-alt" /> $300 - $1000 
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
                <a href="javascript:;">Read More..</a>
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