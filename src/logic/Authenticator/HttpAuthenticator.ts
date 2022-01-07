import {IAuthenticator, LoginResult, RegisterResult } from "./IAuthenticator"
import  { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosResponseTransformer } from 'axios';
import makeRequest from "../helper/makeRequest";
import { toast } from "react-toastify";


class HttpAuthenticator implements IAuthenticator{
    constructor(){
    }
    async login(email:string , password:string){
      const config : AxiosRequestConfig<any> = {
        method: 'post',
        url: '/authjwt/jwt/create',
        data : {email,password}
      };
      
      const handleErrorReponse = (error : AxiosError) => {
        const data = error.response?.data
        if(data){
          toast(JSON.stringify(data))
        }
      }

      const result : LoginResult = await makeRequest(config , handleErrorReponse)
      return result
    }

    loginWithGoogle(){
      alert("loginWithGoogle")
    }

    loginWithFacebook(){
        alert("loginWithFacebook")
      }

    async register(email : string , password:string){
      const config : AxiosRequestConfig<any> = {
        method: 'post',
        url: '/djoser/users/',
        data : {email,password}
      };


      const handleErrorReponse = (error : AxiosError) => {
        const data = error.response?.data
        if(data){
          toast(JSON.stringify(data))
        }

      }
      
      const result : RegisterResult = await makeRequest(config , handleErrorReponse)
      return result
    }
    registerWithGoogle(){
      alert("registerWithGoogle")
    }

    registerWithFacebook(){
        alert("registerWithFacebook")
      }

}

export default HttpAuthenticator