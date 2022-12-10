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
}
export default apiRentalHistory;