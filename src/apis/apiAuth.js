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
    
}
export default apiAuth;