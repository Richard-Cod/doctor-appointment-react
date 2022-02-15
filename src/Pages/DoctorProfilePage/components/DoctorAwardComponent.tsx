import { DoctorAward } from "../../../logic/models/DoctorAward"



function DoctorAwardComponent({award} : {award : DoctorAward}) {
    return (
        <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <p className="exp-year">{award.date}</p>
                                <h4 className="exp-title">{award.title}</h4>
                                <p> {award.description} </p>
                              </div>
                            </div>
                          </li>
    )
}

export default DoctorAwardComponent