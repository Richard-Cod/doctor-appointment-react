import * as Yulp from 'yup';

class ChangePasswordPageVM{
    initialValues = {oldPassword : "" , newPassword : "" , confirmPassword : ""}
    validationSchema = Yulp.object({
        oldPassword:  Yulp.string().required("le oldPassword est requis"),
        newPassword:  Yulp.string().required("le newPassword est requis"),
        confirmPassword:  Yulp.string().required("le confirmPassword est requis"),
      });

}

export default ChangePasswordPageVM