import {IAuthenticator, LoginResult, RegisterResult} from "./IAuthenticator"

class InMemoryAuthenticator implements IAuthenticator{
    constructor(){
    }

    login(email:string , password:string){
        const promise1 = new Promise<LoginResult>((resolve, reject) => {
          setTimeout(() => {
            const result = {access : "accesstoken" , refresh : "refreshtoken"}
            resolve(result);
          }, 300);
        });
        return promise1
    }

    loginWithGoogle(){
      alert("loginWithGoogle")
    }

    loginWithFacebook(){
        alert("loginWithFacebook")
      }

    register(email : string , password:string){
      const promise1 = new Promise<RegisterResult>((resolve, reject) => {
        setTimeout(() => {
          const result = {email : "email" , id : 2};
          resolve(result);
        }, 300);
      });
      return promise1
    }
    registerWithGoogle(){
      alert("registerWithGoogle")
    }

    registerWithFacebook(){
        alert("registerWithFacebook")
      }

}

export default InMemoryAuthenticator