import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/shared/Input';
import routes from '../../constants/routes';
import ResetPasswordConfirmPageVM from '../../logic/viewModels/ResetPasswordConfirmPageVM';
import AuthLayout from '../../templates/layout/AuthLayout';
import ProfilLayout from '../../templates/layout/ProfilLayout';

const resetPasswordConfirmPageVM = new  ResetPasswordConfirmPageVM()
function Form() {
    const { uid , token } = useParams();
   const navigate =  useNavigate()

    const formik = useFormik({
        initialValues: resetPasswordConfirmPageVM.initialValues,
        validationSchema: resetPasswordConfirmPageVM.validationSchema,
        onSubmit: values => {
          if(uid && token)
            resetPasswordConfirmPageVM.submitForm(uid , token , values.newPassword)
            navigate(routes.login)
          // formik.setSubmitting(false)
        },
      });

      
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="New Password" name="newPassword" type="password" formik={formik} />
            <Input label="Confirm Password" name="confirmPassword" type="password" formik={formik} />
            <div className="submit-section">
            <button 
                disabled={formik.isSubmitting}
                type="submit" className="btn btn-primary submit-btn">Save Changes
            </button>
        </div>
                 
        </form>
      )  
}




function ResetPasswordConfirmPage() {

    return (
        <AuthLayout label={undefined}>
        <Form />
     </AuthLayout>
    )
}

export default ResetPasswordConfirmPage
