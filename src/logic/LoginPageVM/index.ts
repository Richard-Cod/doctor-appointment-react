import { toast } from 'react-toastify';
import * as Yup from 'yup';
import appConstants from '../../constants/app';
import HttpAuthenticator from '../Authenticator/HttpAuthenticator';
import {IAuthenticator} from '../Authenticator/IAuthenticator';
import InMemoryAuthenticator from '../Authenticator/InMemoryAuthenticator'
import { DependencyContainer } from '../DependencyContainer';
import { LocalDataRepository } from '../LocalDataRepository';


class LoginPageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    initialValues = {email : "admin@gmail.com" , password : "admin"}

    userSchema = Yup.object({
        email:  Yup.string().email("Le mail est invalide ").required("le mail est requis"),
        password:  Yup.string().min(4 ,  "Minimun 4 lettres please ").required("le mot de passe est requis"),
      });

    login = async (email : string , password:string) => {
      const {access , refresh }  = await  this.dependencyContainer.authenticator.login(email , password);
      this.dependencyContainer.localDataRepository.save(appConstants.ACCESS_TOKEN_KEY , access)
      this.dependencyContainer.localDataRepository.save(appConstants.REFRESH_TOKEN_KEY , refresh)

      toast("La connexion a très bien fonctionné , vous allez être redirigé ")

      
    }

    loginWithGoogle = () => {
        this.dependencyContainer.authenticator.loginWithGoogle()
    }

    loginWithFacebook = (email : string , password : string) => {
        this.dependencyContainer.authenticator.loginWithFacebook()
    }

}

export default LoginPageVM