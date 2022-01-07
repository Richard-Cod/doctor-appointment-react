import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/shared/Input';
import routes from '../../constants/routes';
import ForgotPasswordConfirmPageVM from '../../logic/viewModels/ForgotPasswordConfirmPageVM';
import AuthLayout from '../../templates/layout/AuthLayout';
import ProfilLayout from '../../templates/layout/ProfilLayout';

const forgotPasswordConfirmPageVM = new  ForgotPasswordConfirmPageVM()
function Form() {
    const { uid , token } = useParams();
   const navigate =  useNavigate()

    const formik = useFormik({
        initialValues: forgotPasswordConfirmPageVM.initialValues,
        validationSchema: forgotPasswordConfirmPageVM.formSchema,
        onSubmit: values => {
          try {
            forgotPasswordConfirmPageVM.submitForm(values.email)
          } catch (error) {
            
          }
        },
      });

      
   
      return (
        <form onSubmit={formik.handleSubmit}>
           <div className="login-header">
            <h3>Forgot Password?</h3>
            <p className="small text-muted">Enter your email to get a password reset link</p>
          </div>

            <Input label="Email" name="email" type="text" formik={formik} />
            <div className="text-right">
              <a className="forgot-link" href={routes.login}>Remember your password?</a>
            </div>
            <button 
              disabled={formik.isSubmitting}
              className="btn btn-primary btn-block btn-lg login-btn" 
              type="submit">
                Reset Password
            </button>
        </form>
      )  
}




function ForgotPasswordConfirmPage() {
    return (
        <AuthLayout>
         
        <Form />
     </AuthLayout>
    )
}

export default ForgotPasswordConfirmPage
