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
        const res = await axiosClient.get(`/vehicle/detail/${params.id}?startdate=${params.startdate}&enddate=${params.enddate}`)
        return res.data;
    },

    deleteCar: async (params) => {
        const res = await axiosClientWithToken.delete(`/my-vehicle/delete/${params.id}`)
        return res.data;
    },
    
    postponeCar: async (params) => {
        const res = await axiosClientWithToken.post(`/my-vehicle/postpone/${params.id}`)
        return res.data;
    },

    resumeCar: async (params) => {
        const res = await axiosClientWithToken.post(`/my-vehicle/resume/${params.id}`)
        return res.data;
    },

    getCarStatusList: async (params) => {
        const res = await axiosClientWithToken.get(`/my-vehicle/status/${params.id}`)
        return res.data;
    },

    getOwnedVehicle: async () => {
        const res = await axiosClientWithToken.get(`/my-vehicle/list`)
        return res.data;
    },

    getRentalHistoryOfVehicle: async (params) => {
        const res = await axiosClientWithToken.get(`/my-vehicle/history/${params.id}`)
        return res.data;
    },

    getHistoryDetails: async (params) => {
        const res = await axiosClientWithToken.get(`/my-vehicle/detail/${params.id}`)
        return res.data;
    },

    getCarInfoForStatusUpdate: async (params) => {
        const res = await axiosClientWithToken.get(`/my-vehicle/info/${params.id}`)
        return res.data;
    },

    updateCarStatus: async (params) => {
        const res = await axiosClientWithTokenMultiPart.post(`/my-vehicle/update-status/`,params)
        return res.data;
    },

    getCarStatusDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/my-vehicle/detail-status/${params.id}`)
        return res.data;
    },

    getCarRating: async (params) => {
        const res = await axiosClient.get(`/vehicle/rating/${params.id}`)
        return res.data;
    },

    getOwnedCarDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/my-vehicle/detail-vehical/${params.id}`)
        return res.data;
    },

    updateVehicleRentPrice: async (params) => {
        const res = await axiosClientWithToken.post(`/my-vehicle/update-price/${params.id}`,params)
        return res.data;
    },

    updateVehicleInfo: async (params) => {
        const res = await axiosClientWithToken.post(`/my-vehicle/update-infor/${params.id}`,params)
        return res.data;
    },

    updateVehicleImage: async (params) => {
        const res = await axiosClientWithTokenMultiPart.post(`/my-vehicle/update-image/`,params)
        return res.data;
    },
}
export default apiCar;