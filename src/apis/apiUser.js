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
    updateBankinfo: async (params) => {
        const res = await axiosClientWithToken.post(`/user/update-bank-info`,params)
        return res.data;
    },
    getWithdrawlist: async () => {
        const res = await axiosClientWithToken.get(`/user/withdraw-list`)
        return res.data;
    },
    
    addRentalHistory: async (params) => {
        const res = await axiosClientWithToken.post(`/user/add-contract`,params)
        return res.data;
    },
}
export default apiUser;