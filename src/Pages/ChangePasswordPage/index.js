import { useFormik } from 'formik';
import Input from '../../components/shared/Input';
import ChangePasswordPageVM from '../../logic/viewModels/ChangePasswordPageVM';
import ProfilLayout from '../../templates/layout/ProfilLayout';

const changePasswordPageVM = new  ChangePasswordPageVM()



function Form() {
    const formik = useFormik({
        initialValues: changePasswordPageVM.initialValues,
        validationSchema: changePasswordPageVM.validationSchema,
        onSubmit: values => {
            alert("on submit")
          // formik.setSubmitting(false)
        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="Old Password" name="oldPassword" formik={formik} />
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




function ChangePasswordPage() {
    return (
        <ProfilLayout title="Change password">
           <Form />
        </ProfilLayout>
    )
}

export default ChangePasswordPage
