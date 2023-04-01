import {axios} from "../../core/axios";
import {Tweet} from "../../store/ducks/tweets/contracts/state";


interface Response<T> {
    data: T
    status: string;
}

// Promise который возвращает TweetsState['items']
export const TweetsApi = {
    async fetchTweets(): Promise<Response<Tweet[]>> {
        const {data} = await axios.get('http://127.0.0.1:8000/api/v1/tweets/');
        console.log(data);
        return data;
    },
    async fetchTweetData(id: string): Promise<Response<Tweet>> {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/v1/tweets/${id}/`);
        console.log(data[0]);
        return data[0];
    },
    async addTweet(payload: string): Promise<Response<Tweet>> {
        const {data} = await axios.post('http://127.0.0.1:8000/api/v1/tweets/', {text: payload});
        console.log(data);
        return data;
    }
}