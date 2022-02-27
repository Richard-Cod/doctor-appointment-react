import formatDate from "../../../logic/helper/formatDate";
import { DoctorWorkExperience } from "../../../logic/models";


function DoctorExperienceComponent({experience} : {experience : DoctorWorkExperience}) {
    return (
        <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">{experience.place}</a>
                                <span className="time">{formatDate(experience.start_date)} - {formatDate(experience.end_date)} </span>
                              </div>
                            </div>
                          </li>
    )
}


export default DoctorExperienceComponent