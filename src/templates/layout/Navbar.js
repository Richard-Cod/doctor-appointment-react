import constants from "../../constants/site"
import {Link} from 'react-router-dom'
import routes from "../../constants/routes"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <Link to={routes.home} className="navbar-brand logo">
            <img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to={routes.home} className="menu-logo">
              <img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
            </Link>
            <a id="menu_close" className="menu-close" href="javascript:void(0);">
              <i className="fas fa-times" />
            </a>
          </div>
          <ul className="main-nav">
            <li className="active">
              <Link to={routes.home}>Home</Link>
            </li>
            <li className="has-submenu">
              <a href="#">Doctors <i className="fas fa-chevron-down" /></a>
              <ul className="submenu">
                {/* <li><a href="doctor-dashboard.html">Doctor Dashboard</a></li>
                <li><a href="appointments.html">Appointments</a></li>
                <li><a href="schedule-timings.html">Schedule Timing</a></li>
                <li><a href="my-patients.html">Patients List</a></li>
                <li><a href="patient-profile.html">Patients Profile</a></li> */}
                <li><Link to={routes.chat}>Chat</Link></li>
                {/* <li><a href="invoices.html">Invoices</a></li>
                <li><a href="doctor-profile-settings.html">Profile Settings</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="doctor-register.html">Doctor Register</a></li> */}
              </ul>
            </li>	
            <li className="has-submenu">
              <a href="#">Patients <i className="fas fa-chevron-down" /></a>
              <ul className="submenu">
                {/* <li><a href="search.html">Search Doctor</a></li>
                <li><a href="doctor-profile.html">Doctor Profile</a></li>
                <li><a href="booking.html">Booking</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="booking-success.html">Booking Success</a></li>
                <li><a href="patient-dashboard.html">Patient Dashboard</a></li>
                <li><a href="favourites.html">Favourites</a></li> */}
                <li><Link to={routes.chat}>Chat</Link></li>
                {/* <li><a href="profile-settings.html">Profile Settings</a></li> */}
                <li><Link to={routes.changePassword}>Change Password</Link></li>
              </ul>
            </li>	
            {/* <li className="has-submenu">
              <a href="#">Pages <i className="fas fa-chevron-down" /></a>
              <ul className="submenu">
                <li><a href="voice-call.html">Voice Call</a></li>
                <li><a href="video-call.html">Video Call</a></li>
                <li><a href="search.html">Search Doctors</a></li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="components.html">Components</a></li>
                <li className="has-submenu">
                  <a href="invoices.html">Invoices</a>
                  <ul className="submenu">
                    <li><a href="invoices.html">Invoices</a></li>
                    <li><a href="invoice-view.html">Invoice View</a></li>
                  </ul>
                </li>
                <li><a href="blank-page.html">Starter Page</a></li>
                <li><Link to={routes.login}>Login</Link></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="forgot-password.html">Forgot Password</a></li>
              </ul>
            </li> */}
            <li>
              <Link to={routes.admin} target="_blank">Admin</Link>
            </li>
            <li className="login-link">
              <Link to={routes.login}>Login / Signup</Link>
            </li>
          </ul>		 
        </div>		 
        <ul className="nav header-navbar-rht">
          <li className="nav-item contact-item">
            <div className="header-contact-img">
              <i className="far fa-hospital" />							
            </div>
            <div className="header-contact-detail">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header"> {constants.phoneNumber}</p>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link header-login" to={routes.login}>login / Signup </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar
