import BaseLayout from "../../templates/layout/BaseLayout"


function AuthLayout({children , label}) {
    return (
        <BaseLayout>

<div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Login" />	
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>{label} <span>Doccure</span></h3>
                    </div>
                    {children}

                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
        
        </BaseLayout>
    )
}

export default AuthLayout
