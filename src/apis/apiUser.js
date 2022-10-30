import axios from "axios";
import {  axiosClient,axiosClientWithToken} from "./axiosClient";

const apiUser = {
    updateUser: async (params) => {
        const res = await axiosClientWithToken.post(`/user/update`,params)
        return res.data;
    },
}
export default apiUser;