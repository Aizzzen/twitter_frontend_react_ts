import {axios} from "../../core/axios";
import {Tweet} from "../../store/ducks/tweets/contracts/state";


interface Response<T> {
    data: T
    // status: string;
}

const api_url = process.env.REACT_APP_API_URL

export const TweetsApi = {
    async fetchTweets(): Promise<Response<Tweet[]>> {
        const {data} = await axios.get(`${api_url}/tweets/`);
        console.log(data)
        return data;
    },
    async fetchCurrentUserTweets(): Promise<Response<Tweet[]>> {
        const {data} = await axios.get(`${api_url}/tweets/my/`);
        console.log(data)
        return data;
    },
    async fetchTweetData(id: string): Promise<Response<Tweet>> {
        const {data} = await axios.get(`${api_url}/tweets/${id}/`);
        return data[0];
    },
    async addTweet(payload: {text: string, formData: FormData}): Promise<Response<Tweet>> {
        const {data} = await axios.post(`${api_url}/tweets/`, payload.formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(data)
        return data;
    },
    removeTweet: (id: string): Promise<void> => axios.delete(`${api_url}/tweets/detail/${id}/`),
    // removeTweet: (id: string): Promise<void> => axios.delete(`${api_url}/tweets/${id}/`),
}
