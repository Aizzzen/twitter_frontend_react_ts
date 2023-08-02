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
    async fetchMessages(chatId: string | number): Promise<void> {
        const {data} = await axios.get(`${api_url}/chat/listmsgs/${chatId}/`);
        return data;
    },
    async fetchMoreMessages(chatId: string | number, offset: number): Promise<void> {
        const {data} = await axios.get(`${api_url}/chat/listmsgs/${chatId}/?limit=20&offset=${offset}`);
        return data;
    },
}
