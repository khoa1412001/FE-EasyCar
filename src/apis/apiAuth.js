import axios from "axios";
import {  axiosClient,axiosClientWithToken} from "./axiosClient";

const apiAuth = {

    register: async (params) => {
        const res = await axiosClient.post(`/auth/register`,params)
        return res.data;
    },
    login: async (params) => {
        const res = await axiosClient.post(`/auth/login`,params)
        return res.data;
    },
    getuserinfo: async(params) => {
        const res = await axiosClientWithToken.get(`/auth/`,params)
        return res.data
    },
    checkEmail: async(params) => {
        const res = await axiosClient.post('/auth/check-email',params)
        return res.data
    },
    changepassword: async(params) => {
        const res = await axiosClientWithToken.post(`/auth/change-password`,params)
        return res.data
    },
   
}
export default apiAuth;