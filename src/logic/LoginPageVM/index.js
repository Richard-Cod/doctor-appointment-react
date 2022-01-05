import * as Yulp from 'yup';
import InMemoryAuthenticator from '../Authenticator/InMemoryAuthenticator'

class LoginPageVM{
    authenticator ;
    constructor(){
        this.authenticator = new InMemoryAuthenticator()
    }

    initialValues = {email : "" , password : ""}

    userSchema = Yulp.object({
        email:  Yulp.string().email("Le mail est invalide ").required("le mail est requis"),
        password:  Yulp.string().min(4 ,  "Minimun 4 lettres please ").required("le mot de passe est requis"),
      });

    login = (email , password) => {
       this.authenticator.login(email , password);
    }

    loginWithGoogle = (email , password) => {
        this.authenticator.loginWithGoogle(email , password)
    }

    loginWithFacebook = (email , password) => {
        this.authenticator.loginWithFacebook(email , password)
    }

}

export default LoginPageVM