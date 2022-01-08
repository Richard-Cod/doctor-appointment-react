import Slider from "react-slick";

function PartieSlider() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide:4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      }
    ]
  };

  return (
        <Slider {...settings}>
          {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item , i) => {
            return <div key={i} className="speicality-item text-center">
            <div  className="speicality-img mx-auto">
              <img src="/assets/img/specialities/specialities-01.png" className="img-fluid mx-auto" alt="Speciality" />
              <span><i className="fa fa-circle" aria-hidden="true" /></span>
            </div>
            <p> Speciality {i}</p>
          </div>
          })}
        </Slider>
  )
}

function ClinicAndSpecialities() {
    return (
        <section className="section section-specialities">
          <div className="container-fluid">
            <div className="section-header text-center">
              <h2>Clinic and Specialities</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9">
                {/* Slider */}
                <div className="specialities-slider slider">
                  {/* Slider Item */}
                  	<PartieSlider />
                  {/* /Slider Item */}
                </div>
                {/* /Slider */}
              </div>
            </div>
          </div>   
        </section>	 
    )
}


export default  ClinicAndSpecialities