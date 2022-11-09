import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiCar = {
    registerCar: async (params) => {
        const res = await axiosClientWithTokenMultiPart.post('/user/verify', params)
        return res.data;
    }
}
export default apiCar;