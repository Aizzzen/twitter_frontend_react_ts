import axios from "axios";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/state";

// Promise который возвращает TweetsState['items']
export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios
            // .get('http://localhost:3001/tweets')
            .get('/tweets?_sort=id&_order=desc')
            // .get('/tags')
            // .get('https://trycode.pw/c/6BRBO.json')
            // .get('https://trycode.pw/c/2OBQ1.json')
            .then(({data}) => data)
    },
    fetchTweetData(id: string): Promise<Tweet[]> {
        return axios
            .get('/tweets?_id=' + id)
            .then(({data}) => data)
    },
    addTweet(payload: Tweet): Promise<Tweet> {
        return axios
            .post('/tweets', payload)
            .then(({data}) => data)
    }
}