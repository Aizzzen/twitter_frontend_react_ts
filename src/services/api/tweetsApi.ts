import {axios} from "../../core/axios";
import {Tweet} from "../../store/ducks/tweets/contracts/state";


interface Response<T> {
    data: T
    status: string;
}

// Promise который возвращает TweetsState['items']
export const TweetsApi = {
    async fetchTweets(): Promise<Response<Tweet[]>> {
        const {data} = await axios.get('/tweets/');
        console.log(data);
        return data;
    },
    async fetchTweetData(id: string): Promise<Response<Tweet>> {
        const {data} = await axios.get(`/tweets/${id}/`);
        console.log(data);
        return data;
    },
    async addTweet(payload: string): Promise<Response<Tweet>> {
        const {data} = await axios.post('/tweets/', {text: payload});
        console.log(data);
        return data;
    }
}