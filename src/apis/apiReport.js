import {  axiosClient,axiosClientWithToken, axiosClientWithTokenMultiPart} from "./axiosClient";

const apiReport = {
    
    getReportInfo: async (params) => {
        const res = await axiosClientWithToken.get(`/report/${params.id}`)
        return res.data;
    },

    createReport: async (params) => {
        const res = await axiosClientWithToken.post(`/report/create`,params)
        return res.data;
    },
}
export default apiReport;