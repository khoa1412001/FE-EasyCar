import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiCar = {
    registerCar: async (params) => {
        const res = await axiosClientWithTokenMultiPart.post('/vehicle/register', params)
        return res.data;
    },

    getBrand: async (params) => {
        const res = await axiosClient.get('/vehicle/models')
        return res.data;
    },

    getModel: async (params) => {
        const res = await axiosClient.get(`/vehicle/models?brand=${params.brand}`)
        return res.data;
    }
}
export default apiCar;