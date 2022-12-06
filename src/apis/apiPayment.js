import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiPayment = {
    makePaymentmomo: async (params) => {
        const res = await axiosClientWithToken.post(`/payment/create-payment`,params)
        return res.data;
    },
}
export default apiPayment;