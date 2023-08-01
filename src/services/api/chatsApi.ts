import {axios} from "../../core/axios";


interface Response<T> {
    data: T
    // status: string;
}

const api_url = process.env.REACT_APP_API_URL

export const ChatsApi = {
    async fetchChats(): Promise<void> {
        const {data} = await axios.get(`${api_url}/chat/view/`);
        return data;
    },
    async fetchMessages(id: string): Promise<void> {
        const {data} = await axios.get(`${api_url}/chat/listmsgs/${id}/`);
        return data;
    },
}
