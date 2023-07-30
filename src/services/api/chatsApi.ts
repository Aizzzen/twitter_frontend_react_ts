import {axios} from "../../core/axios";
import {Tweet} from "../../store/ducks/tweets/contracts/state";
import {TweetModalFormProps} from "../../components/TweetModal";


interface Response<T> {
    data: T
    // status: string;
}

const api_url = process.env.REACT_APP_API_URL

export const ChatsApi = {
    async fetchChats(): Promise<Response<Tweet[]>> {
        const {data} = await axios.get(`${api_url}/chat/view/`);
        return data;
    },
    // async fetchCurrentUserTweets(): Promise<Response<Tweet[]>> {
    //     const {data} = await axios.get(`${api_url}/tweets/my/`);
    //     return data;
    // },
    // async fetchTweetData(id: string): Promise<Response<Tweet>> {
    //     const {data} = await axios.get(`${api_url}/tweets/${id}/`);
    //     return data.results[0];
    // },
    // async fetchUpdateTweetData(payload: { id: string, data: TweetModalFormProps }): Promise<Response<Tweet>> {
    //     const {data} = await axios.put(`${api_url}/tweets/detail/${payload.id}/`, payload.data);
    //     return data.data;
    // },
    // async addTweet(payload: {text: string, formData: FormData}): Promise<Response<Tweet>> {
    //     const {data} = await axios.post(`${api_url}/tweets/`, payload.formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         }
    //     });
    //     return data;
    // },
    // async removeTweet(id: string): Promise<void> {
    //     const res = await axios.delete(`${api_url}/tweets/detail/${id}/`)
    // },
    // removeTweet: (id: string): Promise<void> => axios.delete(`${api_url}/tweets/${id}/`),
    // async addComment(payload: {text: string, user: number, tweet: number}): Promise<Response<any>> {
    //     const {data} = await axios.post(`${api_url}/comments/`, payload);
    //     return data;
    // },
}
