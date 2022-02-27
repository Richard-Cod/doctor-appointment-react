import { Formik, useFormik } from "formik";
import { BottomPart } from "../../components/shared/authPages";
import Input from "../../components/shared/Input";
import routes from "../../constants/routes";
import {LoginPageVM} from "../../logic/viewModels";
import AuthLayout from "../../templates/layout/AuthLayout"
import {Link} from "react-router-dom"

import { useNavigate } from "react-router-dom";


const loginPageVM = new LoginPageVM()

function Form({label} : {label : string}) {
  const navigate = useNavigate();
  
    const formik = useFormik({
        initialValues: loginPageVM.initialValues,
        validationSchema: loginPageVM.userSchema,
        onSubmit: async (values) => {
          await loginPageVM.login(values.email , values.password)
          // formik.setSubmitting(false)
        //   setTimeout(() => {
        //     navigate(routes.home);
        // }, 300);


        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="Email" name="email" formik={formik} />
            <Input label="Password" name="password" type="password" formik={formik} />

            <div className="text-right">
                <Link className="forgot-link" to={routes.forgotPassword}>Forgot Password ?</Link>
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
                <div className="text-center dont-have">
                  Don’t have an account? 
                  <Link to={routes.register}>Register</Link>
                </div>
        </AuthLayout>
    )
}

export default LoginPage

