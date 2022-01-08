import { DoctorEducation } from "../../../logic/models/DoctorEducation";



 function DoctorEducationComponent({education} : {education : DoctorEducation}) {
    return (
        <li>
        <div className="experience-user">
          <div className="before-circle" />
        </div>
        <div className="experience-content">
          <div className="timeline-content">
            <a href="#/" className="name">{education.place}</a>
            <div>{education.major}</div>
            <span className="time">{education.start_date} - {education.end_date}</span>
          </div>
        </div>
      </li>
    )
}

export default DoctorEducationComponent