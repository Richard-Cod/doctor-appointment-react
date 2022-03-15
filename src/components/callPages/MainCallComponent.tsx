import { formatFullname } from "../../logic/helper/formatFullname"
import { formatImageFromBackend } from "../../logic/helper/getImageFromBackend"
import { Doctor, User } from "../../logic/models"
import BaseLayout from "../../templates/layout/BaseLayout"


function MainCallComponent({children , callingDoctor , user} : {children : any,callingDoctor : Doctor| undefined,user : User | null}) {
  console.log(callingDoctor);
  
    return (
      <BaseLayout>
      {!callingDoctor && <h1>Loading.....</h1>}
      {!user && <h1>Loading.....</h1>}
         {user && callingDoctor && <div className="content" style={{minHeight: '278.5px'}}>
          <div className="container">
            {/* Call Wrapper */}
            <div className="call-wrapper">
              <div className="call-main-row">
                <div className="call-main-wrapper">
                  <div className="call-view">
                    <div className="call-window">
                      {/* Call Header */}
                      <div className="fixed-header">
                        <div className="navbar">
                          <div className="user-details mr-auto">
                            <div className="float-left user-img">
                              <a className="avatar avatar-sm mr-2" href="patient-profile.html" title={formatFullname(user)}>
                                <img src={formatImageFromBackend(user.profile_pic)} alt="User Image" className="rounded-circle" />
                                <span className="status online" />
                              </a>
                            </div>
                            <div className="user-info float-left">
                              <a href="patient-profile.html"><span>{formatFullname(user)}</span></a>
                              <span className="last-seen">Online</span>
                            </div>
                          </div>
                          <ul className="nav float-right custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="" className="dropdown-item">Settings</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Call Header */}
                      {/* Call Contents */}
                      {children}
                      {/* /Call Contents */}
                      {/* Call Footer */}
                      <div className="call-footer">
                        <div className="call-icons">
                          <ul className="call-items">
                            <li className="call-item">
                              <a href="#" data-placement="top" data-toggle="tooltip" data-original-title="Enable Video">
                                <i className="fas fa-video camera" />
                              </a>
                            </li>
                            <li className="call-item">
                              <a href="#" data-placement="top" data-toggle="tooltip" data-original-title="Mute">
                                <i className="fa fa-microphone microphone" />
                              </a>
                            </li>
                            <li className="call-item">
                              <a href="#" data-placement="top" data-toggle="tooltip" data-original-title="Add User">
                                <i className="fa fa-user-plus" />
                              </a>
                            </li>
                          </ul>
                          <div className="end-call">
                            <a href="">
                              <i className="material-icons">call_end</i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* /Call Footer */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Call Wrapper */}
          </div>
        </div>}
      </BaseLayout>
    )
  }

  export default MainCallComponent