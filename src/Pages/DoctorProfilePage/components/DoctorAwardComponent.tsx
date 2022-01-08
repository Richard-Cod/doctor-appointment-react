import { DoctorAward } from "../../../logic/models/DoctorAward"



function DoctorAwardComponent({award} : {award : DoctorAward}) {
    return (
        <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <p className="exp-year">July 2019</p>
                                <h4 className="exp-title">Humanitarian Award</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                              </div>
                            </div>
                          </li>
    )
}

export default DoctorAwardComponent