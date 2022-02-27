import { useEffect, useState } from "react";
import Slider from "react-slick";
import { ClinicFeature } from "../../../logic/models/ClinicFeature";
import {HomePageVM} from "../../../logic/viewModels";

const homePageVM = new HomePageVM()

 function PartieSlider() {
  const [features, setfeatures] = useState<ClinicFeature[]>()

  useEffect(() => {
    const asyncFunc = async () => {
      const result = await  homePageVM.getClinicFeatures()
      setfeatures(result)
    }
    asyncFunc()
  }, [])

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    // initialSlide:3,
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
          {features?.map((item , i) => {
            return   <div key={i} className="feature-item text-center">
            <img src={item.image} className="img-fluid mx-auto" alt="Feature" />
            <p>{item.description} </p>
          </div>
          })}
        </Slider>
  )
}
 


function AvailableFeatures() {
    return (
        <section className="section section-features">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 features-img">
              <img src="/assets/img/features/feature.png" className="img-fluid" alt="Feature" />
            </div>
            <div className="col-md-7">
              <div className="section-header">	
                <h2 className="mt-2">Availabe Features in Our Clinic</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>	
              <div className="slider">
                <PartieSlider />
              </div>
            </div>
          </div>
        </div>
      </section>	
    )
}


export default AvailableFeatures