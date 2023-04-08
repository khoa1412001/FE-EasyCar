import axios from "axios";
import {  axiosBotClient,axiosClientWithToken} from "./axiosClient";

const apiChatbot = {
    sendmessage: async (params) => {
        const res = await axiosBotClient.post(`/`,params)
        return res.data;
    },
}
export default apiChatbot;