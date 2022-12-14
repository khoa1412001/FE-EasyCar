import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiRentalHistory = {
    getRentalHistoryOwner: async (params) => {
        const res = await axiosClientWithToken.get(`/my-vehicle/detail/${params.id}`)
        return res.data;
    },

    getRentalHistory: async (params) => {
        const res = await axiosClientWithToken.get(`/history/${params.id}`)
        return res.data;
    },

    updateRentalStatus: async (params) => {
        const res = await axiosClientWithTokenMultiPart.post(`/history/update-status/`,params)
        return res.data;
    },

    getCarInfoForStatusUpdate: async (params) => {
        const res = await axiosClientWithToken.get(`/history/info/${params.id}`)
        return res.data;
    },

    getCarStatusDetail: async (params) => {
        const res = await axiosClientWithToken.get(`/history/detail-status/${params.id}`)
        return res.data;
    },

    getContractData: async (params) => {
        const res = await axiosClientWithToken.get(`/history/contract/${params.id}`)
        return res.data;
    }
}
export default apiRentalHistory;