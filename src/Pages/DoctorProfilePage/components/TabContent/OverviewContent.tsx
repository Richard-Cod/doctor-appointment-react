import { Doctor } from "../../../../logic/models/Doctor"
import DoctorAwardComponent from "../DoctorAwardComponent"
import DoctorEducationComponent from "../DoctorEducationComponent"
import DoctorExperienceComponent from "../DoctorExperienceComponent"
import DoctorServiceComponent from "../DoctorServiceComponent"
import DoctorSpecializationComponent from "../DoctorSpecializationComponent"

function OverviewContent({doctor } : {doctor : Doctor}) {
    return (
        <div role="tabpanel" id="doc_overview" className="tab-pane fade show active">
        <div className="row">
          <div className="col-md-12 col-lg-9">
            {/* About Details */}
            <div className="widget about-widget">
              <h4 className="widget-title">About Me</h4>
              <p> {doctor.about} </p>
            </div>
            {/* /About Details */}
            {/* Education Details */}
            <div className="widget education-widget">
              <h4 className="widget-title">Education</h4>
              <div className="experience-box">
                <ul className="experience-list">
                  {doctor.educations.map((education) => <DoctorEducationComponent education={education} />
                  )}
                </ul>
              </div>
            </div>
            {/* /Education Details */}
            {/* Experience Details */}
            <div className="widget experience-widget">
              <h4 className="widget-title">Work &amp; Experience</h4>
              <div className="experience-box">
                <ul className="experience-list">
                {doctor.experiences.map((experience) => <DoctorExperienceComponent experience={experience} />
                  )}
                  
                 
                </ul>
              </div>
            </div>
            {/* /Experience Details */}
            {/* Awards Details */}
            <div className="widget awards-widget">
              <h4 className="widget-title">Awards</h4>
              <div className="experience-box">
                <ul className="experience-list">
                {doctor.awards.map((award) =>  <DoctorAwardComponent award={award} /> )}
                </ul>
              </div>
            </div>
            {/* /Awards Details */}
            {/* Services List */}
            <div className="service-list">
              <h4>Services</h4>
              <ul className="clearfix">
                {doctor.services.map((service) => <DoctorServiceComponent service={service} /> )}
              </ul>
            </div>
            {/* /Services List */}
            {/* Specializations List */}
            <div className="service-list">
              <h4>Specializations</h4>
              <ul className="clearfix">
                {doctor.specializations.map((specialization) => <DoctorSpecializationComponent specialization={specialization} />)}
              </ul>
            </div>
            {/* /Specializations List */}
          </div>
        </div>
      </div>
    )
}

export default OverviewContent
