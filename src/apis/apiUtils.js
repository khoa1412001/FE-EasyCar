import axios from "axios";
import {  axiosClient,axiosClientWithToken} from "./axiosClient";

const apiUtils = {
    findLocation: async (params) => {
        const res = await axiosClient.get(`/search-address/?address=${params.address}`)
        return res.data;
    },
}
export default apiUtils;