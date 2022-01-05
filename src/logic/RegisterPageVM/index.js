import * as Yulp from 'yup';
import InMemoryAuthenticator from '../Authenticator/InMemoryAuthenticator'

class RegisterPageVM{
    authenticator ;
    constructor(){
        this.authenticator = new InMemoryAuthenticator()
    }

    initialValues = {name : "" , phoneNumber : "" ,password : ""}

    userSchema = Yulp.object({
        name:  Yulp.string().required("le nom est requis"),
        phoneNumber:Yulp.string().required("le numéro de téléphone est requis"),
        password:  Yulp.string().min(4 ,  "Minimun 4 lettres please ").required("le mot de passe est requis"),
      });

    register = (name , password) => {
       this.authenticator.register(name , password);
    }

    registerWithGoogle = (name , password) => {
        this.authenticator.registerWithGoogle(name , password)
    }

    registerWithFacebook = (name , password) => {
        this.authenticator.registerWithFacebook(name , password)
    }

}

export default RegisterPageVM