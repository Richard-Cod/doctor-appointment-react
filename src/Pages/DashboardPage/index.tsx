import { useState , useEffect } from "react"
import { useAppSelector } from "../../app/hooks"
import { formatFullname } from "../../logic/helper/formatFullname"
import { Appoinment } from "../../logic/models"
import { DashboardPageVM } from "../../logic/viewModels"
import AuthLayout from "../../templates/layout/AuthLayout"
import ProfilLayout from "../../templates/layout/ProfilLayout"

const dashboardPageVM = new DashboardPageVM()

function AppointmentList({appointments}:{appointments : Appoinment[]}) {
  return  <tbody>
      {appointments.map((value) => {
    return <tr>
    <td>
        <h2 className="table-avatar">
        <a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image" /></a>
        <a href="patient-profile.html">{formatFullname(value.patient)} <span>#{value.id}</span></a>
        </h2>
    </td>
    <td>{value.date} <span className="d-block text-info">{value.date}</span></td>
    <td>General</td>
    <td className="text-center">{value.paid_amount}</td>
    <td className="text-right">
        <div className="table-action">
        <a href="" className="btn btn-sm bg-info-light">
            <i className="far fa-eye" /> View
        </a>
        <a href="" className="btn btn-sm bg-success-light">
            <i className="fas fa-check" /> Accept
        </a>
        <a href="" className="btn btn-sm bg-danger-light">
            <i className="fas fa-times" /> Cancel
        </a>
        </div>
    </td>
    </tr>
    })}
  </tbody>
}



function DashboardPage() {
    const [appointments, setappointments] = useState<Appoinment[]>()

    useEffect(() => {

        const asyncFunc = async () => {
            const data = await dashboardPageVM.getDoctorAppointments()
            setappointments(data)
        }

        asyncFunc()
      
    }, [])


    useEffect(() => {

        const asyncFunc = async () => {
            const data = await dashboardPageVM.getDoctorAppointments()
            setappointments(data)
        }

        asyncFunc()
      
    }, [])
    

    const user = useAppSelector(s => s.user.value)

        

  return (
   <ProfilLayout title={"Dashboard"} showSidebar={true} isDoctor={true} isPatient={false}>
            <div className="row">
            <div className="col-md-12">
                <div className="card dash-card">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div className="dash-widget dct-border-rht">
                        <div className="circle-bar circle-bar1">
                            <div className="circle-graph1" data-percent={75}><canvas width={800} height={800} style={{height: '400px', width: '400px'}} />
                            <img src="assets/img/icon-01.png" className="img-fluid" alt="patient" />
                            </div>
                        </div>
                        <div className="dash-widget-info">
                            <h6>Total Patient</h6>
                            <h3>1500</h3>
                            <p className="text-muted">Till Today</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="dash-widget dct-border-rht">
                        <div className="circle-bar circle-bar2">
                            <div className="circle-graph2" data-percent={65}><canvas width={800} height={800} style={{height: '400px', width: '400px'}} />
                            <img src="assets/img/icon-02.png" className="img-fluid" alt="Patient" />
                            </div>
                        </div>
                        <div className="dash-widget-info">
                            <h6>Today Patient</h6>
                            <h3>160</h3>
                            <p className="text-muted">06, Nov 2019</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="dash-widget">
                        <div className="circle-bar circle-bar3">
                            <div className="circle-graph3" data-percent={50}><canvas width={800} height={800} style={{height: '400px', width: '400px'}} />
                            <img src="assets/img/icon-03.png" className="img-fluid" alt="Patient" />
                            </div>
                        </div>
                        <div className="dash-widget-info">
                            <h6>Appoinments</h6>
                            <h3>85</h3>
                            <p className="text-muted">06, Apr 2019</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="row">
            <div className="col-md-12">
                <h4 className="mb-4">Patient Appoinment</h4>
                <div className="appointment-tab">
                {/* Appointment Tab */}
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li className="nav-item">
                    <a className="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
                    </li> 
                </ul>
                {/* /Appointment Tab */}
                <div className="tab-content">
                    {/* Upcoming Appointment Tab */}
                    <div className="tab-pane show active" id="upcoming-appointments">
                    <div className="card card-table mb-0">
                        <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                <th>Patient Name</th>
                                <th>Appt Date</th>
                                <th>Purpose</th>
                                <th className="text-center">Paid Amount</th>
                                <th />
                                </tr>
                            </thead>
                              {appointments && <AppointmentList appointments={appointments} />}
                            </table>		
                        </div>	
                        </div>	
                    </div>	
                    </div>
                    {/* /Today Appointment Tab */}
                </div>
                </div>
            </div>
            </div>

   </ProfilLayout>
  )
}

export default DashboardPage