import { toast } from "react-toastify";
import httpClient from "../Interfaces/httpClient";

const makeRequest = async (config , handleErrorReponse = (error) => {}) => {
      try {
        const response = await httpClient(config)
        return response.data
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

          if(error.response.status == 500){
            toast("Problème au niveau du serveur ;(")
            throw Error("")
          }

          handleErrorReponse(error)

        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          toast("Impossible d'accéder au serveur ;(")
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);

        
        throw Error("")
      }

}

export default makeRequest