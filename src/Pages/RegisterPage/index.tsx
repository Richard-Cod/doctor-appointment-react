import { Formik, useFormik } from "formik";
import { BottomPart } from "../../components/shared/authPages";
import Input from "../../components/shared/Input";
import AuthLayout from "../../templates/layout/AuthLayout"
import {Link} from "react-router-dom"
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import {RegisterPageVM} from "../../logic/viewModels";

const registerPageVM = new RegisterPageVM()

function Form({label} : {label : string}) {
  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: registerPageVM.initialValues,
        validationSchema: registerPageVM.userSchema,
        onSubmit: values => {
          registerPageVM.register(values.email , values.password)
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
            <div>
              <div className="text-right">
                <Link className="forgot-link" to={routes.login}>Already have an account?</Link>
              </div>
            </div>
            <button 
                disabled={formik.isSubmitting}
                className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                {label}
            </button>
        </form>
      )  
}

function RegisterPage() {
    const label = "Register"
    return (
        <AuthLayout label={label}>
          <Form label={label} />
          <BottomPart label={label}
           onClickGoogle={registerPageVM.registerWithGoogle} 
           onClickFacebook={registerPageVM.registerWithFacebook} 
        />
        </AuthLayout>
    )
}

export default RegisterPage
