import { Formik, useFormik } from "formik";
import { BottomPart } from "../../components/shared/authPages";
import Input from "../../components/shared/Input";
import RegisterPageVM from "../../logic/RegisterPageVM";
import AuthLayout from "../../templates/layout/AuthLayout"
import {Link} from "react-router-dom"
import routes from "../../constants/routes";

const registerPageVM = new RegisterPageVM()

function Form({label} : {label : string}) {
    const formik = useFormik({
        initialValues: registerPageVM.initialValues,
        validationSchema: registerPageVM.userSchema,
        onSubmit: values => {
          registerPageVM.register(values.name , values.password)
          // formik.setSubmitting(false)
        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="Name" name="name" formik={formik} />
            <Input label="Mobile Number" name="phoneNumber" type="password" formik={formik} />
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
