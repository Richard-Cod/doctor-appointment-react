import { toast } from 'react-toastify';
import * as Yup from 'yup';
import InMemoryAuthenticator from '../Authenticator/InMemoryAuthenticator'
import { DependencyContainer } from '../DependencyContainer';

class RegisterPageVM{
    dependencyContainer : DependencyContainer;
    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }
    initialValues = {email : "user1@gmail.com" ,password : "admin"}
    userSchema = Yup.object({
        email:  Yup.string().email("Le mail est invalide ").required("le mail est requis"),
        password:  Yup.string().min(8 ,  "Minimun 8 lettres please ").required("le mot de passe est requis"),
      });

    register = async (email:string , password : string) => {
        try {
            const result =  await this.dependencyContainer.authenticator.register(email , password);
            toast("La création du compte a réussi!")
        } catch (error) {
        }
      
    }

    registerWithGoogle = () => {
        this.dependencyContainer.authenticator.registerWithGoogle()
    }

    registerWithFacebook = () => {
        this.dependencyContainer.authenticator.registerWithFacebook()
    }

}

export default RegisterPageVM