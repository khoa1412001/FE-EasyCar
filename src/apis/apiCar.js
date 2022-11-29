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
    },

    getCarFillter: async (params) => {
        const res = await axiosClient.post(`/filter/`,params)
        return res.data;
    },

    getCarDetails: async (params) => {
        const res = await axiosClient.get(`/vehicle/${params.id}?startdate=${params.startdate}&enddate=${params.enddate}`)
        return res.data;
    },
    deleteCar: async (params) => {
        const res = await axiosClientWithToken.delete(`/vehicle/${params.id}`)
        return res.data;
    },
    
    postponeCar: async (params) => {
        const res = await axiosClientWithToken.get(`/vehicle/postpone`)
        return res.data;
    },
}
export default apiCar;