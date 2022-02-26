import {IAuthenticator, LoginResult, RegisterResult } from "./IAuthenticator"
import  { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosResponseTransformer } from 'axios';
import { toast } from "react-toastify";
import makeRequest from "../../helper/makeRequest";
import { User } from "../../models/User";
import { DependencyContainer } from "../DependencyContainer";
import appConstants from "../../../constants/app";


class HttpAuthenticator implements IAuthenticator{
    constructor(){
    }
  async me(): Promise<User> {
    // const dependencyContainer = new DependencyContainer()
    const token = localStorage.getItem(appConstants.ACCESS_TOKEN_KEY)

    const config : AxiosRequestConfig<any> = {
      method: 'get',
      url: 'djoser/users/me',
      headers: {
        Authorization : `JWT ${token}`
      }
    };
    
    const handleErrorReponse = (error : AxiosError) => {
      const data = error.response?.data
      if(data){
        toast(JSON.stringify(data))
      }
    }

    const result : User = await makeRequest(config , handleErrorReponse)
    return result
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