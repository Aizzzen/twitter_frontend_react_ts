import axios from "axios";
import {TweetsState} from "../../store/ducks/tweets/contracts/state";

// Promise который возвращает TweetsState['items']
export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios
            .get('https://trycode.pw/c/6BRBO.json')
            // .get('https://trycode.pw/c/2OBQ1.json')
            .then(({data}) => data)
    }
}