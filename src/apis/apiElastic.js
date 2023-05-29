import { axiosClient } from "./axiosClient";

const apiElastic = {
    makeElasticSearch: async (params) => {
        const res = await axiosClient.get(`/filter/elastic?query=${params.query}&startdate=${params.startdate}&enddate=${params.enddate}`)
        return res.data;
    },
}
export default apiElastic;