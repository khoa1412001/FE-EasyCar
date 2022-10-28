import axios from "axios";
import {  axiosClient,axiosClientWithToken} from "./axiosClientMIO";

const apiMio = {
    getlocation: async(params) => {
        const res = await axiosClient.get(`${params.uri}`)
    }
   
}
export default apiMio;