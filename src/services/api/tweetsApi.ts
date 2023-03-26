import axios from "axios";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/state";

// Promise который возвращает TweetsState['items']
export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios
            .get('/tweets/')
            // .get('/tweets?_sort=id&_order=desc')
            .then(({data}) => {
                console.log(data)
                return data
            })
    },
    fetchTweetData(id: string): Promise<Tweet[]> {
        return axios
            .get('/tweets?_id=' + id)
            .then(({data}) => data)
    },
    addTweet(payload: Tweet): Promise<Tweet> {
        return axios
            .post('/tweets/', payload)
            .then(({data}) => data)
    }
}