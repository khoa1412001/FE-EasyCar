import { axiosBotClient, axiosClient } from "./axiosClient";

const apiChatbot = {
    sendmessage: async (params) => {
        const res = await axiosClient.post(`/auth/chatbot`,params)
        return res.data;
    },

    rentalrecommend: async (params) => {
        const res = await axiosClient.get(`/filter/text?q=${params.message}`)
        return res.data;
    },
}
export default apiChatbot;