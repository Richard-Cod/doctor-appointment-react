import BaseLayout from '../../templates/layout/BaseLayout'


function ProfileSidebar() {
    return (
        <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
            <div className="profile-info-widget">
            <a href="#" className="booking-doc-img">
                <img src="/assets/img/patients/patient.jpg" alt="User Image" />
            </a>
            <div className="profile-det-info">
                <h3>Richard Wilson</h3>
                <div className="patient-details">
                <h5><i className="fas fa-birthday-cake" /> 24 Jul 1983, 38 years</h5>
                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Newyork, USA</h5>
                </div>
            </div>
            </div>
        </div>
        <div className="dashboard-widget">
            <nav className="dashboard-menu">
            <ul>
                <li>
                <a href="patient-dashboard.html">
                    <i className="fas fa-columns" />
                    <span>Dashboard</span>
                </a>
                </li>
                <li>
                <a href="favourites.html">
                    <i className="fas fa-bookmark" />
                    <span>Favourites</span>
                </a>
                </li>
                <li>
                <a href="chat.html">
                    <i className="fas fa-comments" />
                    <span>Message</span>
                    <small className="unread-msg">23</small>
                </a>
                </li>
                <li>
                <a href="profile-settings.html">
                    <i className="fas fa-user-cog" />
                    <span>Profile Settings</span>
                </a>
                </li>
                <li className="active">
                <a href="change-password.html">
                    <i className="fas fa-lock" />
                    <span>Change Password</span>
                </a>
                </li>
                <li>
                <a href="index-2.html">
                    <i className="fas fa-sign-out-alt" />
                    <span>Logout</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    )
}





function ProfilLayout({children}) {
    return (
        <BaseLayout>

            <div>
                    {/* Breadcrumb */}
                    <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                            </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Change Password</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Page Content */}
                    <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <ProfileSidebar />
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="card">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    {/* Change Password Form */}

                                    {children}
                                    {/* /Change Password Form */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>		
                    {/* /Page Content */}
            </div>

        </BaseLayout>
    )
}

export default ProfilLayout
