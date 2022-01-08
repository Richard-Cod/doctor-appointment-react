import { AxiosError } from "axios";
import { toast } from "react-toastify";
import makeRequest from "../../helper/makeRequest";
import { Doctor } from "../../models/Doctor";
import { User } from "../../models/User";
import { IDoctorRepository } from "./IDoctorRepository";

class HttpDoctorRepository implements IDoctorRepository{
    async getDoctor(id : number) : Promise<Doctor>{
        const config = {method: 'get',url: '/api/doctors/'+id,headers: {} };

        const handleErrorReponse = (error : AxiosError) => {
        const data = error.response?.data
            if(data){
                console.log(data)
                toast(JSON.stringify(data))
            }
        }
    
        const result : Doctor = await makeRequest(config , handleErrorReponse)
        return result
    }

}

export {HttpDoctorRepository}