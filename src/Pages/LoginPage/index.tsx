import { Formik, useFormik } from "formik";
import { BottomPart } from "../../components/shared/authPages";
import Input from "../../components/shared/Input";
import LoginPageVM from "../../logic/LoginPageVM";
import AuthLayout from "../../templates/layout/AuthLayout"

const loginPageVM = new LoginPageVM()

function Form({label} : {label : string}) {
    const formik = useFormik({
        initialValues: loginPageVM.initialValues,
        validationSchema: loginPageVM.userSchema,
        onSubmit: values => {
          loginPageVM.login(values.email , values.password)
          // formik.setSubmitting(false)
        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="Email" name="email" formik={formik} />
            <Input label="Password" name="password" type="password" formik={formik} />

            <div className="text-right">
                <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
            </div>
            <button 
                disabled={formik.isSubmitting}
                className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                {label}
            </button>
                 
        </form>
      )  
}

function LoginPage() {
    const label = "login"
    return (
        <AuthLayout label={label}>
          <Form label={label} />
          <BottomPart label={label}
           onClickGoogle={loginPageVM.loginWithGoogle} 
           onClickFacebook={loginPageVM.loginWithFacebook} 
        />
                <div className="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>

        </AuthLayout>
    )
}

export default LoginPage
