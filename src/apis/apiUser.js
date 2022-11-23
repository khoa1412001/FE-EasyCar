import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiUser = {
    updateUser: async (params) => {
        const res = await axiosClientWithToken.post(`/user/update`,params)
        return res.data;
    },
    verifyUser: async (params) => {
        const res = await axiosClientWithTokenMultiPart.post('/user/verify', params)
        return res.data;
    },
    getOwnedVehicle: async () => {
        const res = await axiosClientWithToken.get(`/user/ownedvehicle`)
        return res.data;
    },
    getRentalHistory: async () => {
        const res = await axiosClientWithToken.get(`/user/rentalhistory`)
        return res.data;
    },
}
export default apiUser;