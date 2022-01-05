import AuthLayout from '../../templates/layout/AuthLayout'

function ForgotPasswordPage() {
    return (
        <AuthLayout>
                  <div className="login-header">
                    <h3>Forgot Password?</h3>
                    <p className="small text-muted">Enter your email to get a password reset link</p>
                  </div>
                  <form action="https://dreamguys.co.in/demo/doccure/login.html">
                    <div className="form-group form-focus">
                      <input type="email" className="form-control floating" />
                      <label className="focus-label">Email</label>
                    </div>
                    <div className="text-right">
                      <a className="forgot-link" href="login.html">Remember your password?</a>
                    </div>
                    <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
                  </form>
        </AuthLayout>
    )
}

export default ForgotPasswordPage
